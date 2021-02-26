import { types as t } from "@marko/compiler";
import { parseExpression } from "@marko/babel-utils";
import getComponentFiles from "../../util/get-component-files";

export default function(path) {
  const {
    node,
    hub: { file }
  } = path;
  const {
    rawValue: code,
    name: { start }
  } = node;
  const meta = file.metadata.marko;

  if (getComponentFiles(path).componentFile) {
    throw path
      .get("name")
      .buildCodeFrameError(
        'A Marko file can either have an inline class, or an external "component.js", but not both.'
      );
  }

  if (meta.hasComponent) {
    throw path
      .get("name")
      .buildCodeFrameError(
        "A Marko component can only have one top level class."
      );
  }

  const parsed = parseExpression(file, code, start);

  if (parsed.id) {
    throw file.buildCodeFrameError(
      parsed.id,
      "Component class cannot have a name."
    );
  }

  if (parsed.superClass) {
    throw file.buildCodeFrameError(
      parsed.superClass,
      "Component class cannot have a super class."
    );
  }

  const constructorProp = parsed.body.body.find(
    prop => t.isClassMethod(prop) && prop.kind === "constructor"
  );
  if (constructorProp) {
    throw file.buildCodeFrameError(
      constructorProp.key,
      "The constructor method should not be used for a component, use onCreate instead."
    );
  }

  meta.hasComponent = true;
  path.replaceWith(t.markoClass(parsed.body));
}
