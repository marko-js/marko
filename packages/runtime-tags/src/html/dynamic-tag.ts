import { normalizeDynamicRenderer } from "../common/helpers";
import { type Accessor, AccessorPrefix, ResumeSymbol } from "../common/types";
import {
  attrs,
  controllable_select_value,
  controllable_textarea_value,
} from "./attrs";
import { isTemplate, type ServerRenderer } from "./template";
import {
  getState,
  nextScopeId,
  peekNextScopeId,
  register,
  withBranchId,
  write,
  writeScope,
} from "./writer";

const voidElementsReg =
  /^(?:area|b(?:ase|r)|col|embed|hr|i(?:mg|nput)|link|meta|param|source|track|wbr)$/;

interface BodyContentObject {
  [x: PropertyKey]: unknown;
  content: ServerRenderer;
}

interface DynamicTagOptions {
  scopeId: number;
  accessor: Accessor;
  tag: unknown | string | ServerRenderer | BodyContentObject;
  inputOrArgs: unknown;
  content?: (() => void) | 0;
  inputIsArgs?: boolean;
  serializeReason?: 1 | 0;
}

/**
 * Unified implementation for dynamic tag rendering that handles both input and args patterns.
 * This refactors the previous separate implementations into a single, more maintainable function.
 */
function renderDynamicTag({
  scopeId,
  accessor,
  tag,
  inputOrArgs,
  content,
  inputIsArgs = false,
  serializeReason,
}: DynamicTagOptions): unknown {
  const shouldResume = serializeReason !== 0;
  const renderer = normalizeDynamicRenderer<ServerRenderer>(tag);

  if (MARKO_DEBUG) {
    validateRenderer(renderer);
  }

  const state = getState()!;
  const branchId = peekNextScopeId();
  let result: unknown;

  if (typeof renderer === "string") {
    result = renderNativeElement({
      renderer,
      inputOrArgs,
      inputIsArgs,
      content,
      scopeId,
      accessor,
      branchId,
      shouldResume,
      state,
    });
  } else {
    result = renderCustomComponent({
      renderer,
      inputOrArgs,
      inputIsArgs,
      content,
      scopeId,
      accessor,
      branchId,
      shouldResume,
      state,
    });
  }

  handleScopeManagement({
    scopeId,
    accessor,
    branchId,
    shouldResume,
    renderer,
  });

  return result;
}

function validateRenderer(renderer: unknown): void {
  if (
    renderer &&
    typeof renderer !== "function" &&
    typeof renderer !== "string"
  ) {
    throw new Error(`Invalid renderer passed for dynamic tag: ${renderer}`);
  }
}

interface RenderNativeElementOptions {
  renderer: string;
  inputOrArgs: unknown;
  inputIsArgs: boolean;
  content?: (() => void) | 0;
  scopeId: number;
  accessor: Accessor;
  branchId: number;
  shouldResume: boolean;
  state: ReturnType<typeof getState>;
}

function renderNativeElement({
  renderer,
  inputOrArgs,
  inputIsArgs,
  content,
  scopeId,
  accessor,
  branchId,
  shouldResume,
  state,
}: RenderNativeElementOptions): void {
  const input = extractInputFromArgs(inputOrArgs, inputIsArgs);
  const normalizedContent = normalizeDynamicRenderer<ServerRenderer>(input.content);
  const renderContent = content || (typeof normalizedContent === 'function' ? normalizedContent : undefined);

  nextScopeId();
  write(`<${renderer}${attrs(input, accessor, scopeId, renderer)}>`);

  if (!voidElementsReg.test(renderer)) {
    const renderNativeTag = () => {
      renderElementContent(renderer, input, renderContent, scopeId, accessor, content);
    };

    if (shouldResume) {
      withBranchId(branchId, renderNativeTag);
    } else {
      renderNativeTag();
    }
    write(`</${renderer}>`);
  } else if (MARKO_DEBUG && content) {
    throw new Error(
      `Body content is not supported for the \`<${renderer}>\` tag.`,
    );
  }

  if (shouldResume) {
    write(
      state!.mark(
        ResumeSymbol.BranchSingleNode,
        scopeId + " " + accessor + " " + branchId,
      ),
    );
  }
}

function renderElementContent(
  renderer: string,
  input: Record<string, unknown>,
  renderContent: ServerRenderer | (() => void) | undefined,
  scopeId: number,
  accessor: Accessor,
  content?: (() => void) | 0,
): void {
  if (renderer === "textarea") {
    if (MARKO_DEBUG && content) {
      throw new Error(
        "A dynamic tag rendering a `<textarea>` cannot have `content` and must use the `value` attribute instead.",
      );
    }
    write(
      controllable_textarea_value(
        scopeId,
        accessor,
        input.value,
        input.valueChange,
      ),
    );
  } else if (renderContent && typeof renderContent === "function") {
    if (
      renderer === "select" &&
      ("value" in input || "valueChange" in input)
    ) {
      controllable_select_value(
        scopeId,
        accessor,
        input.value,
        input.valueChange,
        renderContent as ServerRenderer,
      );
    } else {
      renderContent();
    }
  }
}

interface RenderCustomComponentOptions {
  renderer: ServerRenderer | undefined;
  inputOrArgs: unknown;
  inputIsArgs: boolean;
  content?: (() => void) | 0;
  scopeId: number;
  accessor: Accessor;
  branchId: number;
  shouldResume: boolean;
  state: ReturnType<typeof getState>;
}

function renderCustomComponent({
  renderer,
  inputOrArgs,
  inputIsArgs,
  content,
  scopeId,
  accessor,
  branchId,
  shouldResume,
  state,
}: RenderCustomComponentOptions): unknown {
  if (shouldResume) {
    write(state!.mark(ResumeSymbol.BranchStart, branchId + ""));
  }

  const render = () => {
    if (renderer) {
      if (isTemplate(renderer)) {
        const input = inputIsArgs
          ? (inputOrArgs as unknown[])[0]
          : inputOrArgs;
        return renderer(
          content
            ? { ...(input as Record<string, unknown>), content }
            : input,
          shouldResume ? 1 : 0,
        );
      }
      return inputIsArgs
        ? renderer(...(inputOrArgs as unknown[]))
        : renderer(
            content
              ? { ...(inputOrArgs as Record<string, unknown>), content }
              : inputOrArgs,
          );
    } else if (content) {
      return content();
    }
  };

  const result = shouldResume ? withBranchId(branchId, render) : render();

  if (shouldResume) {
    write(state!.mark(ResumeSymbol.BranchEnd, scopeId + " " + accessor));
  }

  return result;
}

function extractInputFromArgs(
  inputOrArgs: unknown,
  inputIsArgs: boolean,
): Record<string, unknown> {
  return ((inputIsArgs
    ? (inputOrArgs as unknown[])[0]
    : inputOrArgs) || {}) as Record<string, unknown>;
}

interface ScopeManagementOptions {
  scopeId: number;
  accessor: Accessor;
  branchId: number;
  shouldResume: boolean;
  renderer: string | ServerRenderer | undefined;
}

function handleScopeManagement({
  scopeId,
  accessor,
  branchId,
  shouldResume,
  renderer,
}: ScopeManagementOptions): void {
  const rendered = peekNextScopeId() !== branchId;
  if (rendered) {
    if (shouldResume) {
      writeScope(scopeId, {
        [AccessorPrefix.ConditionalScope + accessor]: writeScope(branchId, {}),
        [AccessorPrefix.ConditionalRenderer + accessor]:
          (renderer as ServerRenderer | undefined)?.___id || renderer,
      });
    }
  } else {
    nextScopeId();
  }
}

// Export the unified implementation
export let dynamicTag = (
  scopeId: number,
  accessor: Accessor,
  tag: unknown | string | ServerRenderer | BodyContentObject,
  inputOrArgs: unknown,
  content?: (() => void) | 0,
  inputIsArgs?: 1,
  serializeReason?: 1 | 0,
) => {
  return renderDynamicTag({
    scopeId,
    accessor,
    tag,
    inputOrArgs,
    content,
    inputIsArgs: Boolean(inputIsArgs),
    serializeReason,
  });
};

// Convenience functions for different usage patterns
export const dynamicTagInput = (
  scopeId: number,
  accessor: Accessor,
  tag: unknown | string | ServerRenderer | BodyContentObject,
  input: unknown,
  content?: (() => void) | 0,
  serializeReason?: 1 | 0,
) => {
  return renderDynamicTag({
    scopeId,
    accessor,
    tag,
    inputOrArgs: input,
    content,
    inputIsArgs: false,
    serializeReason,
  });
};

export const dynamicTagArgs = (
  scopeId: number,
  accessor: Accessor,
  tag: unknown | string | ServerRenderer | BodyContentObject,
  args: unknown[],
  content?: (() => void) | 0,
  serializeReason?: 1 | 0,
) => {
  return renderDynamicTag({
    scopeId,
    accessor,
    tag,
    inputOrArgs: args,
    content,
    inputIsArgs: true,
    serializeReason,
  });
};

export function createContent(id: string, fn: ServerRenderer) {
  fn.___id = id;
  return fn;
}

export function registerContent(
  id: string,
  fn: ServerRenderer,
  scopeId?: number,
) {
  return register(createContent(id, fn), id, scopeId);
}

export function patchDynamicTag(
  patch: (
    scopeId: number,
    accessor: Accessor,
    tag: unknown | string | ServerRenderer | BodyContentObject,
  ) => unknown,
) {
  dynamicTag = (
    (originalDynamicTag) =>
    (scopeId, accessor, tag, input, content, inputIsArgs, resume) => {
      const patched = patch(scopeId, accessor, tag);
      (patched as any).___id = tag;
      return originalDynamicTag(
        scopeId,
        accessor,
        patched,
        input,
        content,
        inputIsArgs,
        resume,
      );
    }
  )(dynamicTag);
}
