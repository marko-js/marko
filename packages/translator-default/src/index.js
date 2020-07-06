import { types as t } from "@marko/babel-types";
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
import { visitor as optimize } from "./optimize";
import getComponentFiles from "./util/get-component-files";

export { default as taglibs } from "./taglib";

export const visitor = {
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

      if (file._moduleCode) {
        path.get("body").forEach(bodyItemPath => bodyItemPath.remove());
        file._moduleCode.forEach(node => path.pushContainer("body", node));
        return path.skip();
      }

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
      const { _markoOptions, _meta, _inlineComponentClass } = file;
      const {
        styleFile,
        packageFile,
        componentFile,
        componentBrowserFile
      } = getComponentFiles(path);
      const isHTML = _markoOptions.output === "html";
      let isSplit = false;
      let isImplicit = !file._hasTagParams;

      if (packageFile) {
        _meta.deps.unshift(packageFile);
      }

      if (styleFile) {
        _meta.deps.unshift(styleFile);
      }

      if (componentFile || _inlineComponentClass) {
        isImplicit = false;
        _meta.component = file.opts.filename;
      }

      if (componentBrowserFile) {
        isImplicit = false;
        isSplit = true;
        _meta.component = componentBrowserFile;
      }

      _meta.component =
        _meta.component && file.resolveRelativePath(_meta.component);
      _meta.deps = _meta.deps.map(filename =>
        typeof filename === "string"
          ? file.resolveRelativePath(filename)
          : filename
      );

      const renderBlock = file._renderBlock;
      const componentClass =
        (componentFile &&
          file.importDefault(
            path,
            file.resolveRelativePath(componentFile),
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
      const rendererIdentifier = file.importDefault(
        path,
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
      const componentId = _meta.id;

      if (_markoOptions.writeVersionComment) {
        path.addComment(
          "leading",
          ` Compiled using marko@${version} - DO NOT EDIT`,
          true
        );
      }

      path.unshiftContainer(
        "body",
        t.exportDefaultDeclaration(templateIdentifier)
      );
      path.unshiftContainer(
        "body",
        t.variableDeclaration("const", [
          t.variableDeclarator(
            templateIdentifier,
            t.callExpression(
              file.importNamed(
                path,
                `marko/src/runtime/${_markoOptions.output}`,
                "t"
              ),
              [t.identifier("__filename")]
            )
          )
        ])
      );

      const componentIdString = t.stringLiteral(componentId);
      path.pushContainer(
        "body",
        t.variableDeclaration("const", [
          t.variableDeclarator(
            componentTypeIdentifier,
            isHTML
              ? componentIdString
              : t.callExpression(
                  file.importNamed(
                    path,
                    "marko/src/runtime/components/registry-browser",
                    "r",
                    "marko_registerComponent"
                  ),
                  [
                    componentIdString,
                    t.arrowFunctionExpression(
                      [],
                      isSplit
                        ? file.importDefault(
                            path,
                            file.resolveRelativePath(componentBrowserFile),
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

      if (isImplicit) {
        templateRenderOptionsProps.push(
          t.objectProperty(t.identifier("i"), t.booleanLiteral(true))
        );
      }

      if (isSplit) {
        templateRenderOptionsProps.push(
          t.objectProperty(t.identifier("s"), t.booleanLiteral(true))
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
                file.importDefault(
                  path,
                  "marko/src/runtime/components/defineComponent",
                  "marko_defineComponent"
                ),
                [componentIdentifier, templateRendererMember]
              )
            )
          )
        );
      }

      if (_markoOptions.meta !== false) {
        const metaObject = t.objectExpression([
          t.objectProperty(t.identifier("id"), componentTypeIdentifier)
        ]);

        if (_meta.component) {
          metaObject.properties.push(
            t.objectProperty(
              t.identifier("component"),
              t.stringLiteral(_meta.component)
            )
          );
        }

        if (_meta.deps.length) {
          metaObject.properties.push(
            t.objectProperty(
              t.identifier("deps"),
              file.parseExpression(JSON.stringify(_meta.deps), file.code.length)
            )
          );
        }

        if (_meta.tags.length) {
          metaObject.properties.push(
            t.objectProperty(
              t.identifier("tags"),
              t.arrayExpression(_meta.tags.map(tag => t.stringLiteral(tag)))
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

      path.traverse(optimize);
    }
  }
};

function isRenderContent(path) {
  const { node } = path;
  return t.MARKO_TYPES.includes(node.type) && !node.static;
}
