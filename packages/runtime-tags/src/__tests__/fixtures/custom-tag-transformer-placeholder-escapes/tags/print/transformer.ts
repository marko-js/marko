import type { types } from "@marko/compiler";

export default (tag: types.NodePath<types.MarkoTag>, t: typeof types) => {
  tag.replaceWith(t.markoPlaceholder(tag.node.attributes[0].value));
};
