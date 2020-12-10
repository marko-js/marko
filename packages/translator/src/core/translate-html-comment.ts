import { types as t, NodePath } from "@marko/babel-types";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  assertNoVar
} from "@marko/babel-utils";
import { writeHTML } from "../util/html-write";
import { isOutputHTML } from "../util/marko-config";

export function enter(tag: NodePath<t.MarkoTag>) {
  assertNoVar(tag);
  assertNoArgs(tag);
  assertNoParams(tag);
  assertNoAttributeTags(tag);

  if (isOutputHTML(tag)) {
    writeHTML(tag)`<!--`;
  }
}

export function exit(tag: NodePath<t.MarkoTag>) {
  if (isOutputHTML(tag)) {
    writeHTML(tag)`-->`;
  }

  tag.remove();
}
