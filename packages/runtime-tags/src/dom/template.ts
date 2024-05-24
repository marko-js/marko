import type {
  Template,
  Input,
  TemplateInstance,
  Scope,
  RenderResult,
} from "../common/types";
import { prepare, runEffects, runSync } from "./queue";
import { type Renderer, initRenderer } from "./renderer";
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
    templateInput: Input & { $global?: Record<string, unknown> } = {},
    reference: ParentNode & Node,
    position?: InsertPosition,
  ): TemplateInstance {
    let scope!: Scope, dom!: Node;
    const { $global = {}, ...input } = templateInput;
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

  render(): RenderResult {
    throw new Error(
      `render() is not implemented for the DOM compilation of a Marko template`,
    );
  }
}
