import {
  isAttributeTag,
  isLoopTag,
  isTransparentTag,
} from "@marko/babel-utils";
import type { types as t } from "@marko/compiler";

type Lookup = Record<
  string,
  {
    identifier?: t.Identifier;
    dynamic: boolean;
    repeated: boolean;
  }
>;

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    nestedAttributeTags?: Lookup;
  }
}

export default function analyzeAttributeTags(tag: t.NodePath<t.MarkoTag>) {
  const extra = (tag.node.extra ??= {});
  extra.nestedAttributeTags = {};

  if (tag.node.attributeTags.length) {
    analyzeChildren(extra, false, false, tag);
  }
}

function analyzeChildren(
  rootExtra: NonNullable<t.MarkoTag["extra"]>,
  repeated: boolean,
  dynamic: boolean,
  tag: t.NodePath<t.MarkoTag>,
) {
  for (const child of tag.get("attributeTags")) {
    if (child.isMarkoTag()) {
      analyzeChild(rootExtra, repeated, dynamic, child);
    }
  }
}

function analyzeChild(
  rootExtra: NonNullable<t.MarkoTag["extra"]>,
  repeated: boolean,
  dynamic: boolean,
  tag: t.NodePath<t.MarkoTag>,
) {
  if (isTransparentTag(tag)) {
    if (tag.node.attributeTags.length) {
      analyzeChildren(rootExtra, repeated || isLoopTag(tag), true, tag);
    }
  } else if (isAttributeTag(tag)) {
    const attrName = (tag.node.name as t.StringLiteral).value.slice(1);
    const lookup = rootExtra.nestedAttributeTags!;
    const existing = lookup[attrName];
    const info =
      existing ||
      (lookup[attrName] = {
        dynamic: false,
        repeated: false,
      });

    info.dynamic ||= dynamic;
    info.repeated ||= repeated || existing !== undefined;
  }
}
