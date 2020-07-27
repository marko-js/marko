import { types as t } from "@marko/babel-types";
import getComponentFiles from "../../util/get-component-files";

const SEEN_INLINE_CLASS = new WeakSet();

export default function(path) {
  const {
    node,
    hub: { file }
  } = path;
  const {
    rawValue: code,
    name: { start }
  } = node;

  if (getComponentFiles(path).componentFile) {
    throw path
      .get("name")
      .buildCodeFrameError(
        'A Marko file can either have an inline class, or an external "component.js", but not both.'
      );
  }

  if (SEEN_INLINE_CLASS.has(file)) {
    throw path
      .get("name")
      .buildCodeFrameError(
        "A Marko component can only have one top level class."
      );
  }

  const parsed = file.parseExpression(code, start);

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

  SEEN_INLINE_CLASS.add(file);
  path.replaceWith(t.markoClass(parsed.body));
}
