import { resolve } from "path";
import { types as t } from "@marko/compiler";
import {
  parseExpression,
  resolveTagImport,
  resolveRelativePath,
  importNamed,
  importDefault,
  parseScript,
  isNativeTag,
  isMacroTag,
  isDynamicTag,
  isAttributeTag,
  loadFileForTag,
  findParentTag,
  getTagDef
} from "@marko/babel-utils";
import { version } from "marko/package.json";
import MarkoDocumentType from "./document-type";
import MarkoDeclaration from "./declaration";
import MarkoCDATA from "./cdata";
import MarkoTag from "./tag";
import MarkoText from "./text";
import MarkoPlaceholder from "./placeholder";
import MarkoComment from "./comment";
import MarkoScriptlet from "./scriptlet";
import MarkoClass from "./class";
import { analyzeStaticVDOM } from "./util/optimize-vdom-create";
import { optimizeHTMLWrites } from "./util/optimize-html-writes";
import getComponentFiles from "./util/get-component-files";
import addDependencies from "./util/add-dependencies";

export { default as taglibs } from "./taglib";

export const analyze = {
  Program: {
    enter(program) {
      // Pre populate metadata for component files.
      getComponentFiles(program);
    },
    exit(program) {
      const { file } = program.hub;
      const meta = file.metadata.marko;
      const {
        styleFile,
        packageFile,
        componentBrowserFile
      } = getComponentFiles(program);

      if (packageFile) {
        meta.deps.unshift(`package: ${packageFile}`);
      }

      if (styleFile) {
        meta.deps.unshift(styleFile);
      }

      if (meta.hasComponentBrowser) {
        meta.component = componentBrowserFile;
      } else if (meta.hasComponent || meta.hasStatefulTagParams) {
        meta.component = file.opts.sourceFileName;
      }

      meta.component =
        meta.component && resolveRelativePath(file, meta.component);
      meta.deps = meta.deps.map(filename =>
        typeof filename === "string"
          ? resolveRelativePath(file, filename)
          : filename
      );

      meta.imports = program.node.body
        .filter(child => t.isImportDeclaration(child))
        .map(child => child.source.value);
    }
  },
  MarkoTag(tag) {
    const { file } = tag.hub;
    const tagDef = getTagDef(tag);
    // Check if tag uses stateful tag params.
    const meta = tag.hub.file.metadata.marko;

    if (tagDef) {
      if (tagDef.html && !tagDef.template && !tagDef.renderer) {
        if (tagDef.htmlType === "custom-element") {
          if (tagDef.parseOptions && tagDef.parseOptions.import) {
            // TODO: the taglib should be updated to support this as a top level option.
            meta.deps.push(
              resolve(
                tagDef.dir,
                resolve(tagDef.dir, tagDef.parseOptions.import)
              )
            );
          }
        }
      } else if (tag.get("name").isStringLiteral()) {
        const relativePath = resolveRelativeTagEntry(file, tagDef);

        if (relativePath) {
          tag.node.extra = tag.node.extra || {};
          tag.node.extra.relativePath = relativePath;

          if (!meta.tags.includes(relativePath)) {
            meta.tags.push(relativePath);
          }
        }
      }

      if (tagDef.translator && tagDef.translator.path) {
        if (!meta.watchFiles.includes(tagDef.translator.path)) {
          meta.watchFiles.push(tagDef.translator.path);
        }
      }
    }

    if (
      meta.hasStatefulTagParams ||
      isNativeTag(tag) ||
      isMacroTag(tag) ||
      !tag.get("body").get("params").length
    ) {
      return;
    }

    if (isDynamicTag(tag)) {
      meta.hasStatefulTagParams = true;
      return;
    }

    let curTag = tag;
    while (isAttributeTag(curTag)) {
      curTag = findParentTag(curTag);
    }

    const tagFile = loadFileForTag(curTag);
    const childMeta = tagFile && tagFile.metadata.marko;
    meta.hasStatefulTagParams =
      childMeta &&
      (childMeta.hasStatefulTagParams ||
        (childMeta.hasComponent && !childMeta.hasComponentBrowser));
  },
  ImportDeclaration: {
    exit(path) {
      const source = path.get("source");
      const tagEntry = resolveTagImport(source, source.node.value);

      if (tagEntry) {
        const meta = path.hub.file.metadata.marko;
        source.node.value = tagEntry;

        if (!meta.tags.includes(tagEntry)) {
          meta.tags.push(tagEntry);
        }
      }
    }
  }
};

export const translate = {
  MarkoDocumentType,
  MarkoDeclaration,
  MarkoCDATA,
  MarkoTag,
  MarkoText,
  MarkoPlaceholder,
  MarkoScriptlet,
  MarkoClass,
  MarkoComment,
  Program: {
    enter(path) {
      const {
        hub: { file }
      } = path;

      if (file.markoOpts.output === "hydrate") {
        addDependencies(file, true);
        return;
      } else if (
        file.markoOpts.resolveVirtualDependency &&
        file.markoOpts.output !== "html"
      ) {
        addDependencies(file, false);
      }

      if (file.metadata.marko.moduleCode) {
        path
          .replaceWith(parseScript(file, file.metadata.marko.moduleCode))[0]
          .skip();
        return;
      }

      file._componentDefIdentifier = path.scope.generateUidIdentifier(
        "component"
      );

      // Pre-Analyze tree
      analyzeStaticVDOM(path);

      // Move non static content into the renderBody.
      const [renderBlock] = path.pushContainer("body", t.blockStatement([]));
      path
        .get("body")
        .filter(isRenderContent)
        .forEach(childPath => {
          renderBlock.pushContainer("body", childPath.node);
          childPath.remove();
        });

      file._renderBlock = renderBlock;
    },
    exit(path) {
      const {
        hub: { file }
      } = path;
      const { markoOpts, _inlineComponentClass } = file;
      const includeMetaInSource = markoOpts.meta !== false;
      const meta = file.metadata.marko;
      const { componentFile, componentBrowserFile } = getComponentFiles(path);
      const isHTML = markoOpts.output === "html";

      const renderBlock = file._renderBlock;
      const componentClass =
        (componentFile &&
          importDefault(
            file,
            resolveRelativePath(file, componentFile),
            "marko_component"
          )) ||
        _inlineComponentClass ||
        t.objectExpression([]);

      const componentIdentifier = path.scope.generateUidIdentifier(
        "marko_component"
      );
      const componentTypeIdentifier = path.scope.generateUidIdentifier(
        "marko_componentType"
      );
      const templateIdentifier = path.scope.generateUidIdentifier(
        "marko_template"
      );
      const rendererIdentifier = importDefault(
        file,
        "marko/src/runtime/components/renderer",
        "marko_renderer"
      );
      const templateRendererMember = t.memberExpression(
        templateIdentifier,
        t.identifier("_")
      );
      const templateMetaMember = t.memberExpression(
        templateIdentifier,
        t.identifier("meta")
      );

      if (markoOpts.writeVersionComment) {
        path.addComment(
          "leading",
          ` Compiled using marko@${version} - DO NOT EDIT`,
          true
        );
      }

      const runtimeTemplateIdentifier = path.scope.generateUidIdentifier("t");

      path.unshiftContainer("body", [
        t.importDeclaration(
          [t.importSpecifier(runtimeTemplateIdentifier, t.identifier("t"))],
          t.stringLiteral(
            `marko/${markoOpts.optimize ? "dist" : "src"}/runtime/${
              isHTML ? "html" : "vdom"
            }`
          )
        ),
        t.variableDeclaration("const", [
          t.variableDeclarator(
            templateIdentifier,
            t.callExpression(
              runtimeTemplateIdentifier,
              includeMetaInSource ? [t.identifier("__filename")] : []
            )
          )
        ]),
        t.exportDefaultDeclaration(templateIdentifier)
      ]);

      const componentIdString = t.stringLiteral(meta.id);
      path.pushContainer(
        "body",
        t.variableDeclaration("const", [
          t.variableDeclarator(
            componentTypeIdentifier,
            isHTML
              ? componentIdString
              : t.callExpression(
                  importNamed(
                    file,
                    "marko/src/runtime/components/registry",
                    "r",
                    "marko_registerComponent"
                  ),
                  [
                    componentIdString,
                    t.arrowFunctionExpression(
                      [],
                      componentBrowserFile
                        ? importDefault(
                            file,
                            resolveRelativePath(file, componentBrowserFile),
                            "marko_split_component"
                          )
                        : templateIdentifier
                    )
                  ]
                )
          ),
          t.variableDeclarator(componentIdentifier, componentClass)
        ])
      );

      const templateRenderOptionsProps = [
        t.objectProperty(t.identifier("t"), componentTypeIdentifier)
      ];

      if (!meta.component) {
        templateRenderOptionsProps.push(
          t.objectProperty(t.identifier("i"), t.booleanLiteral(true))
        );
      }

      if (componentBrowserFile) {
        templateRenderOptionsProps.push(
          t.objectProperty(t.identifier("s"), t.booleanLiteral(true))
        );
      }

      if (!markoOpts.optimize) {
        templateRenderOptionsProps.push(
          t.objectProperty(t.identifier("d"), t.booleanLiteral(true))
        );
      }

      path.pushContainer(
        "body",
        t.expressionStatement(
          t.assignmentExpression(
            "=",
            templateRendererMember,
            t.callExpression(rendererIdentifier, [
              t.functionExpression(
                null,
                [
                  t.identifier("input"),
                  t.identifier("out"),
                  file._componentDefIdentifier,
                  t.identifier("component"),
                  t.identifier("state")
                ],
                renderBlock.node
              ),
              t.objectExpression(templateRenderOptionsProps),
              componentIdentifier
            ])
          )
        )
      );
      renderBlock.remove();

      if (!isHTML) {
        path.pushContainer(
          "body",
          t.expressionStatement(
            t.assignmentExpression(
              "=",
              t.memberExpression(templateIdentifier, t.identifier("Component")),
              t.callExpression(
                importDefault(
                  file,
                  "marko/src/runtime/components/defineComponent",
                  "marko_defineComponent"
                ),
                [componentIdentifier, templateRendererMember]
              )
            )
          )
        );
      }

      if (includeMetaInSource) {
        const metaObject = t.objectExpression([
          t.objectProperty(t.identifier("id"), componentTypeIdentifier)
        ]);

        if (meta.component) {
          metaObject.properties.push(
            t.objectProperty(
              t.identifier("component"),
              t.stringLiteral(meta.component)
            )
          );
        }

        if (meta.deps.length) {
          metaObject.properties.push(
            t.objectProperty(
              t.identifier("deps"),
              parseExpression(file, JSON.stringify(meta.deps), file.code.length)
            )
          );
        }

        if (meta.tags.length) {
          metaObject.properties.push(
            t.objectProperty(
              t.identifier("tags"),
              t.arrayExpression(meta.tags.map(tag => t.stringLiteral(tag)))
            )
          );
        }

        path.pushContainer(
          "body",
          t.expressionStatement(
            t.assignmentExpression("=", templateMetaMember, metaObject)
          )
        );
      }

      optimizeHTMLWrites(path);
    }
  }
};

export function getRuntimeEntryFiles(output, optimize) {
  const base = `marko/${optimize ? "dist" : "src"}/`;

  return [
    `${base}runtime/components`,
    `${base}runtime/components/defineComponent`,
    `${base}runtime/components/renderer`,
    `${base}runtime/components/registry`,
    `${base}runtime/components/attach-detach`,
    `${base}runtime/helpers/assign`,
    `${base}runtime/helpers/class-value`,
    `${base}runtime/helpers/dynamic-tag`,
    `${base}runtime/helpers/load-nested-tag`,
    `${base}runtime/helpers/merge`,
    `${base}runtime/helpers/render-tag`,
    `${base}runtime/helpers/style-value`,
    `${base}runtime/helpers/to-string`,
    `${base}core-tags/components/preserve-tag`,
    `${base}core-tags/components/init-components-tag`,
    `${base}core-tags/components/preferred-script-location-tag`,
    `${base}core-tags/core/__flush_here_and_after__`,
    `${base}core-tags/core/await/renderer`,
    `${base}core-tags/core/await/reorderer-renderer`,
    ...(output === "html"
      ? [
          `${base}runtime/html`,
          `${base}runtime/html/helpers/attr`,
          `${base}runtime/html/helpers/attrs`,
          `${base}runtime/html/helpers/class-attr`,
          `${base}runtime/html/helpers/data-marko`,
          `${base}runtime/html/helpers/escape-quotes`,
          `${base}runtime/html/helpers/escape-script-placeholder`,
          `${base}runtime/html/helpers/escape-style-placeholder`,
          `${base}runtime/html/helpers/escape-xml`,
          `${base}runtime/html/helpers/merge-attrs`,
          `${base}runtime/html/helpers/props-script`,
          `${base}runtime/html/helpers/style-attr`
        ]
      : [
          `${base}runtime/vdom`,
          `${base}runtime/vdom/helpers/attrs`,
          `${base}runtime/vdom/helpers/const`,
          `${base}runtime/vdom/helpers/v-element`,
          `${base}runtime/vdom/helpers/v-text`,
          `${base}runtime/vdom/preserve-attrs`
        ])
  ];
}

function isRenderContent(path) {
  const { node } = path;
  return t.MARKO_TYPES.includes(node.type) && !node.static;
}

function resolveRelativeTagEntry(file, tagDef) {
  // TODO: support transform and other entries.
  const entry = tagDef.template || tagDef.renderer;
  return entry && resolveRelativePath(file, entry);
}
