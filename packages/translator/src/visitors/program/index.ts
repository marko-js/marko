import { types as t } from "@marko/compiler";
import {
  getMarkoOpts,
  isOutputDOM,
  isOutputHTML,
} from "../../util/marko-config";
import programHTML from "./html";
import programDOM from "./dom";
import { startSection } from "../../util/sections";
import { assignFinalIds } from "../../util/reserve";
import { finalizeIntersections } from "../../util/references";
import { callRuntime } from "../../util/runtime";

export let currentProgramPath: t.NodePath<t.Program>;
export let scopeIdentifier: t.Identifier;
export let cleanIdentifier: t.Identifier;

const previousProgramPath: WeakMap<
  t.NodePath<t.Program>,
  t.NodePath<t.Program> | undefined
> = new WeakMap();

export default {
  migrate: {
    enter(program: t.NodePath<t.Program>) {
      previousProgramPath.set(program, currentProgramPath);
      currentProgramPath = program;
    },
    exit() {
      currentProgramPath.scope.crawl();
      currentProgramPath = previousProgramPath.get(currentProgramPath)!;
    },
  },
  analyze: {
    enter(program: t.NodePath<t.Program>) {
      previousProgramPath.set(program, currentProgramPath);
      currentProgramPath = program;
      startSection(program);
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    exit() {
      assignFinalIds();
      finalizeIntersections();
      currentProgramPath = previousProgramPath.get(currentProgramPath)!;
    },
  },
  translate: {
    enter(program: t.NodePath<t.Program>) {
      previousProgramPath.set(program, currentProgramPath);
      currentProgramPath = program;
      scopeIdentifier = isOutputDOM()
        ? program.scope.generateUidIdentifier("scope")
        : (null as any as t.Identifier);
      cleanIdentifier = isOutputDOM()
        ? program.scope.generateUidIdentifier("clean")
        : (null as any as t.Identifier);
      if (getMarkoOpts().output === ("hydrate" as "html")) {
        program.skip();
        program.node.body = [
          t.importDeclaration(
            [],
            t.stringLiteral(program.hub.file.opts.filename as string)
          ),
        ];
        if (
          program.node.extra.hasInteractiveChild ||
          program.node.extra.isInteractive
        ) {
          program.node.body.push(t.expressionStatement(callRuntime("init")));
        }
        return;
      }
    },
    exit(program: t.NodePath<t.Program>) {
      if (isOutputHTML()) {
        programHTML.translate.exit(program);
      } else {
        programDOM.translate.exit(program);
      }
      currentProgramPath = previousProgramPath.get(currentProgramPath)!;
    },
  },
};
