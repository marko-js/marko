import path from "path";
import { loadFileForImport, resolveRelativePath } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import entryBuilder from "../../util/entry-builder";
import {
  getMarkoOpts,
  isOutputDOM,
  isOutputHTML,
} from "../../util/marko-config";
import { finalizeIntersections } from "../../util/references";
import { assignFinalIds } from "../../util/reserve";
import { startSection } from "../../util/sections";
import programDOM from "./dom";
import programHTML from "./html";

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
      if (getMarkoOpts().output === "hydrate") {
        const entryFile = program.hub.file;
        const visitedFiles = new Set([
          resolveRelativePath(entryFile, entryFile.opts.filename as string),
        ]);
        entryBuilder.visit(entryFile, entryFile, function visitChild(resolved) {
          if (!visitedFiles.has(resolved)) {
            visitedFiles.add(resolved);
            const file = loadFileForImport(entryFile, resolved);
            if (file) {
              entryBuilder.visit(file, entryFile, (id) =>
                resolveRelativePath(
                  entryFile,
                  path.join(file.opts.filename as string, "..", id),
                ),
              );
            }
          }
        });

        program.node.body = entryBuilder.build(entryFile);
        program.skip();
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
