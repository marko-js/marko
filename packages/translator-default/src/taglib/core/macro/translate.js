import { types as t } from "@marko/compiler";
import withPreviousLocation from "../../../util/with-previous-location";

export function exit(path) {
  const { node } = path;
  const { body } = node;
  const name = node.attributes.find(attr => attr.name === "name");

  path.replaceWith(
    withPreviousLocation(
      t.functionDeclaration(
        t.identifier(path.hub.file.metadata.marko.macros[name.value.value]),
        [t.identifier("out"), ...body.params],
        t.blockStatement(body.body)
      ),
      node
    )
  );
}
