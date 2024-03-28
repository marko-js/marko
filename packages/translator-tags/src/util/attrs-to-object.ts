import { types as t } from "@marko/compiler";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";
import { isOutputHTML } from "./marko-config";
import { forEach } from "./optional";
import { getScopeAccessorLiteral } from "./reserve";
import { callRuntime } from "./runtime";
import { createScopeReadPattern } from "./scope-read";
import { getScopeIdIdentifier, getSection, type Section } from "./sections";
import { getSerializedScopeProperties } from "./signals";
import toPropertyName from "./to-property-name";

const renderBodyProps = new WeakMap<t.Expression, t.ArrowFunctionExpression>();
const htmlHoistFunctionVisitor: t.Visitor<{ section: Section }> = {
  FunctionExpression: { exit: htmlFunctionVisit },
  ArrowFunctionExpression: { exit: htmlFunctionVisit },
};

const domHoistFunctionVisitor: t.Visitor<{ section: Section }> = {
  FunctionExpression: { exit: domFunctionVisit },
  ArrowFunctionExpression: { exit: domFunctionVisit },
};

function htmlFunctionVisit(
  fn: t.NodePath<t.FunctionExpression | t.ArrowFunctionExpression>,
  state: { section: Section },
) {
  const extra = fn.node.extra;
  if (!extra) return;

  const serializedScopeProperties = getSerializedScopeProperties(state.section);
  forEach(extra.references, (ref) => {
    serializedScopeProperties.set(
      getScopeAccessorLiteral(ref),
      t.identifier(ref.name),
    );
  });
  fn.replaceWith(
    callRuntime(
      "register",
      fn.node,
      t.stringLiteral(extra.registerId!),
      getScopeIdIdentifier(state.section),
    ),
  )[0].skip();
}

function domFunctionVisit(
  fn: t.NodePath<t.FunctionExpression | t.ArrowFunctionExpression>,
  state: { section: Section },
) {
  const { node } = fn;
  const extra = node.extra;
  if (!extra) return;

  const fnId = currentProgramPath.scope.generateUidIdentifier(extra.name);

  if (extra.references) {
    if (node.body.type !== "BlockStatement") {
      node.body = t.blockStatement([t.returnStatement(node.body)]);
    }

    node.body.body.unshift(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          createScopeReadPattern(state.section, extra.references),
          scopeIdentifier,
        ),
      ]),
    );
  }

  node.params.unshift(scopeIdentifier);
  currentProgramPath
    .pushContainer(
      "body",
      t.variableDeclaration("const", [
        t.variableDeclarator(
          fnId,
          callRuntime("register", t.stringLiteral(extra.registerId!), node),
        ),
      ]),
    )[0]
    .skip();

  fn.replaceWith(callRuntime("bindFunction", scopeIdentifier, fnId))[0].skip();
}

export default function attrsToObject(
  tag: t.NodePath<t.MarkoTag>,
  withRenderBody = false,
): t.Expression {
  const { node } = tag;
  let result: t.Expression = t.objectExpression([]);
  const resultExtra = (result.extra = {});
  const section = getSection(tag);
  const hoistVisitor = isOutputHTML()
    ? htmlHoistFunctionVisitor
    : domHoistFunctionVisitor;

  for (const attr of tag.get("attributes")) {
    attr.traverse(hoistVisitor, { section });
    const value = attr.node.value!;

    if (attr.isMarkoSpreadAttribute()) {
      result.properties.push(t.spreadElement(value));
    } else {
      result.properties.push(
        t.objectProperty(
          toPropertyName((attr as t.NodePath<t.MarkoAttribute>).node.name),
          value,
        ),
      );
    }
  }

  if (withRenderBody) {
    const { body, params } = node.body;
    let hoistedControlFlows = node.extra!.hoistedControlFlows;

    if (hoistedControlFlows) {
      for (const child of tag.get("body").get("body")) {
        tag.insertBefore(child.node);
        child.remove();

        if (child.isConditional() || child.isLoop()) {
          if (!--hoistedControlFlows) {
            break;
          }
        }
      }
    }

    if (body.length) {
      const renderBodyExpression = t.arrowFunctionExpression(
        params,
        t.blockStatement(body),
      );

      renderBodyProps.set(result, renderBodyExpression);
      (result as t.ObjectExpression).properties.push(
        t.objectProperty(
          t.identifier("renderBody"),
          isOutputHTML()
            ? callRuntime("createRenderer", renderBodyExpression)
            : renderBodyExpression,
        ),
      );
    }
  }

  if (result.properties.length) {
    if (result.properties.length === 1) {
      const [prop] = result.properties;

      if (t.isSpreadElement(prop)) {
        result = prop.argument;
        result.extra = resultExtra;
      }
    }
  }

  if (node.arguments?.length) {
    if ((result as t.ObjectExpression).properties.length) {
      result = t.arrayExpression([...node.arguments, result]);
    } else if (node.arguments.length == 1) {
      const arg = node.arguments[0];
      result = t.isSpreadElement(arg) ? arg.argument : arg;
    } else {
      result = t.arrayExpression(node.arguments);
    }
  }

  return result;
}

export function getRenderBodyProp(
  attrsObject: ReturnType<typeof attrsToObject>,
) {
  if (t.isObjectExpression(attrsObject)) {
    // renderBody prop is always added last.
    const lastProp = attrsObject.properties[attrsObject.properties.length - 1];

    if (
      t.isObjectProperty(lastProp) &&
      (lastProp.key as t.Identifier).name === "renderBody"
    ) {
      return renderBodyProps.get(attrsObject) as t.ArrowFunctionExpression & {
        body: t.BlockStatement;
      };
    }
  }
}
