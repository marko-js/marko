import type { types as t } from "@marko/compiler";
import type { Tag } from "@marko/compiler/babel-utils";

// Core comptime tags, consumed by the pass (./index.ts) during transform.
// The analyze hook is an invariant trap for tags the pass somehow missed.

const comptimeMissedGuard = (tag: t.NodePath<t.MarkoTag>) => {
  throw tag.buildCodeFrameError(
    `The \`${
      (tag.node.name as t.StringLiteral).value
    }\` tag was not consumed by the comptime transform. This is a bug in Marko.`,
  );
};

function comptimeTag(tag: Omit<Tag, "analyze">): Tag {
  return {
    analyze: comptimeMissedGuard,
    ...tag,
  } as Tag;
}

export const ComptimeIfTag = comptimeTag({
  parseOptions: { controlFlow: true },
  autocomplete: [
    {
      displayText: "-if=<condition>",
      description:
        "Evaluates the condition while compiling; the body is kept only when it is truthy.",
    },
  ],
});

export const ComptimeForTag = comptimeTag({
  parseOptions: { controlFlow: true },
  autocomplete: [
    {
      displayText: "-for|item| of=<iterable>",
      description:
        "Unrolls the loop while compiling, repeating the body once per iteration.",
    },
  ],
});

export const ComptimeConstTag = comptimeTag({
  parseOptions: { openTagOnly: true },
  autocomplete: [
    {
      displayText: "-const/<name>=<value>",
      description: "Binds a compile-time constant usable from this point on.",
    },
  ],
});

export const ComptimeLogTag = comptimeTag({
  parseOptions: { openTagOnly: true },
  autocomplete: [
    {
      displayText: "-log=<value>",
      description: "Logs a value while compiling; erased from the output.",
    },
  ],
});

export const ComptimeDebugTag = comptimeTag({
  parseOptions: { openTagOnly: true },
  autocomplete: [
    {
      displayText: "-debug",
      description:
        "Pauses the compiler under a debugger at this point of the comptime expansion.",
    },
  ],
});

export const ComptimeDefineTag = comptimeTag({
  autocomplete: [
    {
      displayText: "-define/<Name>",
      description:
        "Defines a compile-time snippet, invoked as `<-Name>` with its attributes and params bound while compiling.",
    },
  ],
});

export const ComptimeReturnTag = comptimeTag({
  parseOptions: { openTagOnly: true },
  autocomplete: [
    {
      displayText: "-return=<value>",
      description:
        "Provides the compile-time result of a comptime-invoked tag (binds the caller's tag variable).",
    },
  ],
});
