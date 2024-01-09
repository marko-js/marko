import { types as t } from "@marko/compiler";

export function enter(path) {
  if (path.hub.file.markoOpts.output === "html") {
    const body = path.get("body");

    body.pushContainer("body", [
      t.markoTag(t.stringLiteral("init-components"), [], t.markoTagBody()),
      t.markoTag(t.stringLiteral("await-reorderer"), [], t.markoTagBody()),
      t.markoTag(
        t.stringLiteral("_preferred-script-location"),
        [],
        t.markoTagBody(),
      ),
    ]);
  }
}
