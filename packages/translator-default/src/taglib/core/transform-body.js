import { types as t } from "@marko/babel-types";

export function exit(path) {
  const body = path.get("body");

  body.unshiftContainer("body", [
    t.markoTag(t.stringLiteral("component-globals"), [], t.markoTagBody())
  ]);

  body.pushContainer("body", [
    t.markoTag(t.stringLiteral("init-components"), [], t.markoTagBody()),
    t.markoTag(t.stringLiteral("await-reorderer"), [], t.markoTagBody())
  ]);
}
