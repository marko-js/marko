import { resolve } from "path";
import { types as t } from "@marko/compiler";
import {
  parseExpression,
  resolveTagImport,
  resolveRelativePath,
  importNamed,
  importDefault,
  parseStatements,
  isNativeTag,
  isMacroTag,
  isDynamicTag,
  isAttributeTag,
  loadFileForTag,
  findParentTag,
  getTagDef,
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
      const meta = program.hub.file.metadata.marko;
      getComponentFiles(program);

      if (!meta.hasComponent && !meta.hasComponentBrowser) {
        meta.hasComponent = program
          .get("body")
          .some((child) => child.isMarkoClass());
      }
    },
    exit(program) {
      const { file } = program.hub;
      const meta = file.metadata.marko;
      const { styleFile, packageFile, componentBrowserFile } =
        getComponentFiles(program);

      if (packageFile) {
        meta.deps.unshift(`package: ${packageFile}`);
      }

      if (styleFile) {
        meta.deps.unshift(styleFile);
      }

      if (meta.hasComponentBrowser) {
        meta.component = componentBrowserFile;
      } else if (meta.hasComponent || meta.hasStatefulTagParams) {
        meta.component = file.opts.filename;
      }

      meta.component =
        meta.component && resolveRelativePath(file, meta.component);
      meta.deps = meta.deps.map((filename) =>
        typeof filename === "string"
          ? resolveRelativePath(file, filename)
          : filename
      );

      meta.imports = program.node.body
        .filter((child) => t.isImportDeclaration(child))
        .map((child) => child.source.value);
    },
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
    },
  },
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
  ReferencedIdentifier(path) {
    if (path.node.name === "component" && !path.scope.hasBinding("component")) {
      path.replaceWith(path.hub.file._componentInstanceIdentifier);
    }
  },
  Program: {
    enter(path) {
      const {
        hub: { file },
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
          .replaceWith(
            t.program(
              parseStatements(file, file.metadata.marko.moduleCode),
              undefined,
              file.markoOpts.modules === "cjs" ? "script" : "module"
            )
          )[0]
          .skip();
        return;
      }

      file._componentDefIdentifier =
        path.scope.generateUidIdentifier("componentDef");

      file._componentInstanceIdentifier =
        path.scope.generateUidIdentifier("component");

      // Pre-Analyze tree
      analyzeStaticVDOM(path);

      // Move non static content into the renderBody.
      const [renderBlock] = path.pushContainer("body", t.blockStatement([]));
      path
        .get("body")
        .filter(isRenderContent)
        .forEach((childPath) => {
          renderBlock.pushContainer("body", childPath.node);
          childPath.remove();
        });

      file._renderBlock = renderBlock;
      path.scope.crawl();
    },
    exit(path) {
      const {
        hub: { file },
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

      const componentIdentifier =
        path.scope.generateUidIdentifier("marko_component");
      const componentTypeIdentifier = path.scope.generateUidIdentifier(
        "marko_componentType"
      );
      const templateIdentifier =
        path.scope.generateUidIdentifier("marko_template");
      const rendererIdentifier = importDefault(
        file,
        "marko/src/runtime/components/renderer.js",
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

      path.unshiftContainer(
        "body",
        [
          t.importDeclaration(
            [t.importSpecifier(runtimeTemplateIdentifier, t.identifier("t"))],
            t.stringLiteral(
              `marko/${markoOpts.optimize ? "dist" : "src"}/runtime/${
                isHTML ? "html" : "vdom"
              }/${markoOpts.hot ? "hot-reload.js" : "index.js"}`
            )
          ),
          t.variableDeclaration("const", [
            t.variableDeclarator(
              componentTypeIdentifier,
              t.stringLiteral(meta.id)
            ),
            t.variableDeclarator(
              templateIdentifier,
              t.callExpression(runtimeTemplateIdentifier, [
                componentTypeIdentifier,
              ])
            ),
          ]),
          includeMetaInSource &&
            t.expressionStatement(
              t.assignmentExpression(
                "=",
                t.memberExpression(templateIdentifier, t.identifier("path")),
                t.identifier("__filename")
              )
            ),
          t.exportDefaultDeclaration(templateIdentifier),
        ].filter(Boolean)
      );

      path.pushContainer(
        "body",
        [
          !isHTML &&
            t.expressionStatement(
              t.callExpression(
                importNamed(
                  file,
                  "marko/src/runtime/components/registry",
                  "r",
                  "marko_registerComponent"
                ),
                [
                  componentTypeIdentifier,
                  t.arrowFunctionExpression(
                    [],
                    componentBrowserFile
                      ? importDefault(
                          file,
                          resolveRelativePath(file, componentBrowserFile),
                          "marko_split_component"
                        )
                      : templateIdentifier
                  ),
                ]
              )
            ),
          t.variableDeclaration("const", [
            t.variableDeclarator(componentIdentifier, componentClass),
          ]),
        ].filter(Boolean)
      );

      const templateRenderOptionsProps = [
        t.objectProperty(t.identifier("t"), componentTypeIdentifier),
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
                  file._componentInstanceIdentifier,
                  t.identifier("state"),
                  t.identifier("$global"),
                ],
                renderBlock.node
              ),
              t.objectExpression(templateRenderOptionsProps),
              componentIdentifier,
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
                  "marko/src/runtime/components/defineComponent.js",
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
          t.objectProperty(t.identifier("id"), componentTypeIdentifier),
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
              parseExpression(file, JSON.stringify(meta.deps))
            )
          );
        }

        if (meta.tags.length) {
          metaObject.properties.push(
            t.objectProperty(
              t.identifier("tags"),
              t.arrayExpression(meta.tags.map((tag) => t.stringLiteral(tag)))
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
    },
  },
};

export function getRuntimeEntryFiles(output, optimize) {
  const base = `marko/${optimize ? "dist" : "src"}/`;

  return [
    `${base}runtime/components/index.js`,
    `${base}runtime/components/defineComponent.js`,
    `${base}runtime/components/renderer.js`,
    `${base}runtime/components/registry.js`,
    `${base}runtime/components/attach-detach.js`,
    `${base}runtime/helpers/assign.js`,
    `${base}runtime/helpers/class-value.js`,
    `${base}runtime/helpers/dynamic-tag.js`,
    `${base}runtime/helpers/load-nested-tag.js`,
    `${base}runtime/helpers/merge.js`,
    `${base}runtime/helpers/repeatable.js`,
    `${base}runtime/helpers/self-iterator.js`,
    `${base}runtime/helpers/render-tag.js`,
    `${base}runtime/helpers/style-value.js`,
    `${base}runtime/helpers/to-string.js`,
    `${base}core-tags/components/preserve-tag.js`,
    ...(output === "html"
      ? [
          `${base}runtime/html/index.js`,
          `${base}runtime/html/hot-reload.js`,
          `${base}runtime/html/helpers/attr.js`,
          `${base}runtime/html/helpers/attrs.js`,
          `${base}runtime/html/helpers/class-attr.js`,
          `${base}runtime/html/helpers/data-marko.js`,
          `${base}runtime/html/helpers/escape-quotes.js`,
          `${base}runtime/html/helpers/escape-script-placeholder.js`,
          `${base}runtime/html/helpers/escape-style-placeholder.js`,
          `${base}runtime/html/helpers/escape-xml.js`,
          `${base}runtime/html/helpers/merge-attrs.js`,
          `${base}runtime/html/helpers/props-script.js`,
          `${base}runtime/html/helpers/style-attr.js`,
          `${base}core-tags/components/init-components-tag.js`,
          `${base}core-tags/components/preferred-script-location-tag.js`,
          `${base}core-tags/core/__flush_here_and_after__.js`,
          `${base}core-tags/core/await/renderer.js`,
          `${base}core-tags/core/await/reorderer-renderer.js`,
        ]
      : [
          `${base}runtime/vdom/index.js`,
          `${base}runtime/vdom/hot-reload.js`,
          `${base}runtime/vdom/helpers/attrs.js`,
          `${base}runtime/vdom/helpers/const.js`,
          `${base}runtime/vdom/helpers/v-element.js`,
          `${base}runtime/vdom/helpers/v-text.js`,
          `${base}runtime/vdom/preserve-attrs.js`,
        ]),
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
