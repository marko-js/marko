import { types as t } from "@marko/compiler";

import { getMarkoOpts } from "../../util/marko-config";
import { isMembraneLive } from "../../util/membranes";
import { forEachSectionReverse } from "../../util/sections";
import { getResumeRegisterId } from "../../util/signals";
import { getSectionMeta } from "../../util/writer";

// A child-template reference resolves against `serverRenderers` when the
// shell is first emitted (the child's html module registers before its
// parents' map runs, so composition is a lazy string join).
export type ShellPart = string | [childTemplateId: string];
export type ShellSource = string | ShellPart[];
export type RendererShells = Record<
  string,
  [template: ShellSource, walks: ShellSource]
>;

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    /** Marks a composed template/walks reference with the child template's
     * registered id so the renderers entry can emit it as a shell part. */
    childTemplateId?: string;
  }
}

export function withChildTemplateId<T extends t.Expression>(
  expr: T,
  id: string,
): T {
  (expr.extra ??= {}).childTemplateId = id;
  return expr;
}

/** Emits the server-side shell map for `entry: "renderers"`:
 * `{ [sectionUpdateRegisterId]: [template, walks] }`, data only. */
export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      const rootSection = program.node.extra!.section;
      const shells: RendererShells = {};
      // Shared section templates hoist to identifiers (see
      // `getSectionMetaIdentifiers`); resolve through their declarators so
      // reuse does not defeat static shell extraction.
      const constants = (programConstants = new Map());
      forEachSectionReverse((section) => {
        for (const declarator of getSectionMeta(section).decls || []) {
          if (t.isIdentifier(declarator.id) && declarator.init) {
            constants.set(declarator.id.name, declarator.init);
          }
        }
      });
      forEachSectionReverse((section) => {
        // Nucleus-free sections deliver as captured region markup, never as
        // values-free shells; registration marks a section shell-capable.
        // The root of an all-scaffold template still registers under its
        // update id (never the template id — that absence is the dynamic-tag
        // liveness signal) so live parents composing it by reference resolve.
        const live = isMembraneLive(section);
        if (!live && section !== rootSection) return;
        const meta = getSectionMeta(section);
        const template = asShellSource(meta.writes as t.Expression);
        const walks = asShellSource(meta.walks as t.Expression);
        if (template === undefined || walks === undefined) {
          if (process.env.SHELL_DEBUG) {
            const m = getSectionMeta(section);
            console.error(
              "SHELLSKIP",
              section.id,
              section.name,
              template === undefined ? "T" : "",
              walks === undefined ? "W" : "",
              JSON.stringify(m.writes)?.slice(0, 300),
              "|",
              JSON.stringify(m.walks)?.slice(0, 200),
            );
          }
          return;
        }
        const shell: [ShellSource, ShellSource] = [template, walks];
        shells[getResumeRegisterId(section, "update")] = shell;
        // Renderer ids resolve the same shell at dynamic hops: content ids
        // for same-template targets, the template id for escaped targets.
        if (live) {
          shells[
            section === rootSection
              ? program.hub.file.metadata.marko.id
              : getResumeRegisterId(section, "content")
          ] = shell;
        }
      });
      // The internal nested compile reads the map through this side channel
      // (see the html program exit) instead of parsing the emitted module.
      (
        getMarkoOpts() as {
          __onRendererShells?: (shells: RendererShells) => void;
        }
      ).__onRendererShells?.(shells);
      program.node.body = [
        t.exportDefaultDeclaration(
          t.objectExpression(
            Object.entries(shells).map(([id, [template, walks]]) =>
              t.objectProperty(
                t.stringLiteral(id),
                t.arrayExpression([
                  shellSourceToExpression(template),
                  shellSourceToExpression(walks),
                ]),
              ),
            ),
          ),
        ),
      ];
    },
  },
};

export function shellSourceToExpression(source: ShellSource): t.Expression {
  return typeof source === "string"
    ? t.stringLiteral(source)
    : t.arrayExpression(
        source.map((part) =>
          typeof part === "string"
            ? t.stringLiteral(part)
            : t.arrayExpression([t.stringLiteral(part[0])]),
        ),
      );
}

// Shells are pure data: static strings, or parts interleaving strings with
// child-template references (statically inlined children compose through the
// server registry). Anything else — an absent meta side stays an empty
// string, but a present expression that cannot reduce omits the section.
function asShellSource(
  expr: t.Expression | undefined,
): ShellSource | undefined {
  if (!expr) return "";
  const parts = asShellParts(expr);
  if (!parts) return undefined;
  return parts.length === 0
    ? ""
    : parts.length === 1 && typeof parts[0] === "string"
      ? parts[0]
      : parts;
}

let programConstants: Map<string, t.Expression> | undefined;

function asShellParts(expr: t.Expression): ShellPart[] | undefined {
  if (expr.extra?.childTemplateId) {
    return [[expr.extra.childTemplateId]];
  }
  if (t.isStringLiteral(expr)) {
    return expr.value ? [expr.value] : [];
  }
  if (t.isIdentifier(expr)) {
    const init = programConstants?.get(expr.name);
    return init && asShellParts(init);
  }
  if (
    t.isBinaryExpression(expr) &&
    expr.operator === "+" &&
    !t.isPrivateName(expr.left)
  ) {
    const left = asShellParts(expr.left);
    const right = left && asShellParts(expr.right);
    return right && concatShellParts(left!, right);
  }
  if (t.isTemplateLiteral(expr)) {
    return resolveQuasis(expr, expr.expressions as t.Expression[]);
  }
  // `normalizeStringExpression`'s pure-annotation form:
  // `((_w0, ...) => \`...${_w0}...\`)(part0, ...)`.
  if (
    t.isCallExpression(expr) &&
    t.isArrowFunctionExpression(expr.callee) &&
    t.isTemplateLiteral(expr.callee.body) &&
    expr.callee.params.length === expr.arguments.length &&
    expr.callee.params.every((param) => t.isIdentifier(param)) &&
    expr.arguments.every((arg) => t.isExpression(arg))
  ) {
    const args = new Map<string, t.Expression>();
    expr.callee.params.forEach((param, i) => {
      args.set((param as t.Identifier).name, expr.arguments[i] as t.Expression);
    });
    return resolveQuasis(
      expr.callee.body,
      expr.callee.body.expressions.map((slot) =>
        t.isIdentifier(slot) ? args.get(slot.name) : undefined,
      ),
    );
  }
}

function resolveQuasis(
  template: t.TemplateLiteral,
  slots: (t.Expression | undefined)[],
): ShellPart[] | undefined {
  let parts: ShellPart[] = [];
  for (let i = 0; i < template.quasis.length; i++) {
    const str = template.quasis[i].value.cooked ?? template.quasis[i].value.raw;
    if (str) parts = concatShellParts(parts, [str]);
    if (i < slots.length) {
      const slot = slots[i];
      const slotParts = slot && asShellParts(slot);
      if (!slotParts) return undefined;
      parts = concatShellParts(parts, slotParts);
    }
  }
  return parts;
}

function concatShellParts(left: ShellPart[], right: ShellPart[]) {
  const merged = [...left];
  for (const part of right) {
    const last = merged[merged.length - 1];
    if (typeof part === "string" && typeof last === "string") {
      merged[merged.length - 1] = last + part;
    } else {
      merged.push(part);
    }
  }
  return merged;
}
