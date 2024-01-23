import type {
  Template,
  Input,
  TemplateInstance,
  Scope,
  RenderResult,
} from "../common/types";
import { defaultFragment } from "./fragment";
import { prepare, runEffects, runSync } from "./queue";
import { type Renderer, initRenderer } from "./renderer";
import { register } from "./resume";
import { createScope, destroyScope } from "./scope";

export const createTemplate = (renderer: Renderer, templateId?: string) =>
  register(templateId!, new ClientTemplate(renderer));

export class ClientTemplate implements Template {
  public _: Renderer;

  constructor(renderer: Renderer) {
    this._ = renderer;
  }

  mount(
    input: Input,
    reference: ParentNode & Node,
    position?: InsertPosition,
  ): TemplateInstance {
    let scope!: Scope, dom!: Node;
    const attrs = this._.___attrs;
    const effects = prepare(() => {
      scope = createScope();
      dom = initRenderer(this._, scope);
      if (attrs) {
        attrs(scope, input);
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

  render(): RenderResult {
    throw new Error(
      `render() is not implemented for the DOM compilation of a Marko template`,
    );
  }
}
