import type { types as t } from "@marko/compiler";
import { startSection } from "./util/sections";

export default function Program(program: t.NodePath<t.Program>) {
  startSection(program);
}
