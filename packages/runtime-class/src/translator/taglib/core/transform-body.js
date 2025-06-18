import { types as t } from "@marko/compiler";

export default function (path) {
  path
    .get("body")
    .pushContainer("body", [
      t.markoTag(t.stringLiteral("init-components"), [], t.markoTagBody()),
      t.markoTag(t.stringLiteral("await-reorderer"), [], t.markoTagBody()),
      t.markoTag(
        t.stringLiteral("_preferred-script-location"),
        [],
        t.markoTagBody(),
      ),
    ]);
}
