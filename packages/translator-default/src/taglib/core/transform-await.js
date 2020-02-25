import { types as t } from "@marko/babel-types";

export function exit(path) {
  const args = path.get("arguments");

  if (!args.length) {
    throw path
      .get("name")
      .buildCodeFrameError(
        'You must provide a promise argument to the "<await>" tag, eg: "<await(promise)>".'
      );
  } else if (args.length > 1) {
    const { start } = args[1].node;
    const { end } = args[args.length - 1].node;
    throw path.hub.buildError(
      { start, end },
      'You can only pass one argument to the "<await>" tag.'
    );
  }

  const provider = args[0].node;
  const defaultName = t.stringLiteral(
    path.hub.file.code.slice(provider.start, provider.end)
  );

  path.pushContainer("attributes", t.markoAttribute("_provider", provider));
  path.pushContainer("attributes", t.markoAttribute("_name", defaultName));
  path.set("arguments", undefined);
}
