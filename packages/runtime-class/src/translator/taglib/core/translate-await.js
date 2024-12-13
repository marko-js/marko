import { types as t } from "@marko/compiler";

export function enter(path) {
  const args = path.get("arguments");

  if (!args.length) {
    throw path
      .get("name")
      .buildCodeFrameError(
        'You must provide a promise argument to the "<await>" tag, eg: "<await(promise)>".',
      );
  } else if (args.length > 1) {
    const {
      loc: { start },
    } = args[1].node;
    const {
      loc: { end },
    } = args[args.length - 1].node;
    throw path.hub.file.buildCodeFrameError(
      { loc: { start, end } },
      'You can only pass one argument to the "<await>" tag.',
    );
  }

  const [provider] = args;
  path.pushContainer(
    "attributes",
    t.markoAttribute("_provider", provider.node),
  );

  if (
    !path.get("attributes").some((attr) => attr.get("name").node === "name")
  ) {
    path.pushContainer(
      "attributes",
      t.markoAttribute("_name", t.stringLiteral(provider.toString())),
    );
  }

  path.set("arguments", undefined);
}
