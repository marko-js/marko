import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import type { Input, Scope, Template, TemplateInstance } from "../common/types";
import { prepare, runEffects, runSync } from "./queue";
import { initRenderer, type Renderer } from "./renderer";
import { register } from "./resume";
import { createScope, removeAndDestroyScope } from "./scope";
import { MARK } from "./signals";

export const createTemplate = (renderer: Renderer, templateId?: string) =>
  register(templateId!, new ClientTemplate(renderer));

export class ClientTemplate implements Template {
  public _: Renderer;

  constructor(renderer: Renderer) {
    this._ = renderer;
  }

  mount(
    input: Input & { $global?: Record<string, unknown> } = {},
    reference: ParentNode & Node,
    position?: InsertPosition,
  ): TemplateInstance {
    let scope!: Scope, dom!: Node;
    let { $global } = input;
    if ($global) {
      ({ $global, ...input } = input);
      $global = {
        runtimeId: DEFAULT_RUNTIME_ID,
        renderId: DEFAULT_RENDER_ID,
        ...$global,
      };
    } else {
      $global = {
        runtimeId: DEFAULT_RUNTIME_ID,
        renderId: DEFAULT_RENDER_ID,
      };
    }

    const args = this._.___args;
    const effects = prepare(() => {
      scope = createScope($global);
      dom = initRenderer(this._, scope);
      if (args) {
        args(scope, [input]);
      }
    });

    /*
      <!-- beforebegin -->
      <reference>
        <!-- afterbegin -->
        foo
        <!-- beforeend -->
      </reference>
      <!-- afterend -->
    */

    switch (position) {
      case "afterbegin":
        reference.insertBefore(dom, reference.firstChild);
        break;
      case "afterend":
        reference.parentElement!.insertBefore(dom, reference.nextSibling);
        break;
      case "beforebegin":
        reference.parentElement!.insertBefore(dom, reference);
        break;
      default:
        reference.appendChild(dom);
        break;
    }

    runEffects(effects);

    return {
      update: (newInput: unknown) => {
        if (args) {
          runSync(() => {
            args(scope, MARK);
            args(scope, [newInput]);
          });
        }
      },
      destroy: () => {
        removeAndDestroyScope(scope);
      },
    };
  }

  declare render: never;
}

if (MARKO_DEBUG) {
  (ClientTemplate.prototype as any).render = () => {
    throw new Error(
      `render() is not implemented for the DOM compilation of a Marko template`,
    );
  };
}
