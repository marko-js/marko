import type { ITemplate, Input, InsertResult, Scope } from "../common/types";
import { prepare, runEffects, runSync } from "./queue";
import { createScope, destroyScope } from "./scope";
import { type Renderer, initRenderer } from "./renderer";
import { register } from "./resume";
import { defaultFragment } from "./fragment";

export const createTemplate = (renderer: Renderer, templateId?: string) =>
  register(templateId!, new Template(renderer));

export class Template implements ITemplate {
  public _: Renderer;

  constructor(renderer: Renderer) {
    this._ = renderer;
  }

  insertBefore(
    parent: ParentNode & Node,
    reference: (ChildNode & Node) | null,
    input?: Input
    // context?: Context
  ): InsertResult {
    let scope!: Scope, dom!: Node;
    const attrs = this._.___attrs;
    const effects = prepare(() => {
      scope = createScope();
      dom = initRenderer(this._, scope);
      if (attrs) {
        attrs(scope, input);
      }
    });

    parent.insertBefore(dom, reference);
    runEffects(effects);

    return {
      update: (newInput: unknown) => {
        if (attrs) {
          runSync(() => {
            attrs(scope, newInput, 1);
            attrs(scope, newInput);
          });
        }
      },
      destroy: () => {
        (this._.___fragment ?? defaultFragment).___remove(destroyScope(scope));
      },
    };
  }

  asHTML(): Promise<string> {
    throw unimplemented("asHTML");
  }

  asReadableStream(): ReadableStream {
    throw unimplemented("asReadableStream");
  }

  asPipeableStream(): NodeJS.ReadableStream {
    throw unimplemented("asPipeableStream");
  }

  writeTo(): void {
    throw unimplemented("writeTo");
  }
}

function unimplemented(methodName: string) {
  return new Error(
    `${methodName}() is not implemented for the DOM compilation of a Marko template`
  );
}
