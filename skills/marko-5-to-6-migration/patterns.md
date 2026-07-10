# Conversion Patterns

Worked Marko 5 → Marko 6 conversions for the recurring component shapes. Each shows the Class API original, the Tags API result, and the traps. Combine as needed — real components mix several shapes.

## Stateful component

```marko
/* marko 5 */
class {
  onCreate() {
    this.state = { count: 0 };
  }
  increment() {
    this.state.count++;
  }
}

<button on-click("increment")>
  Count: ${state.count}
</button>
```

```marko
/* marko 6 */
<let/count=0>

<button onClick() { count++ }>
  Count: ${count}
</button>
```

One `<let>` per independently-updating state key. Reads of `state.x` become `x`; writes become plain assignment. Methods that only served as event handlers become inline handlers or `<const/fn() { ... }>` when shared.

**Trap:** mutation. `this.state.list.push(x)` + `setStateDirty("list")` must become `list = [...list, x]` — in Marko 6 only assignment triggers updates, and there is deliberately no dirty-marking escape hatch.

## Derived values

```marko
/* marko 5 */
$ const total = input.items.reduce((sum, item) => sum + item.price, 0);
$ const formatted = total.toFixed(2);
<div>Total: $${formatted}</div>
```

```marko
/* marko 6 */
<const/total=input.items.reduce((sum, item) => sum + item.price, 0)>
<const/formatted=total.toFixed(2)>
<div>Total: $${formatted}</div>
```

Multi-statement scriptlets that build one value collapse into an IIFE: `<const/list=(() => { ...; return list })()>`. Components that "normalized" input by mutating it in `onInput(input)` become `<const>` derivations — never mutate `input`.

Destructuring input is the standard opener of a converted file:

```marko
<const/{ label, disabled = false, ...restAttrs } = input>
```

## Controllable state (state initialized from input + change events)

The Class API pattern of copying input into state and emitting on change:

```marko
/* marko 5 */
class {
  onCreate(input) {
    this.state = { open: input.open || false };
  }
  onInput(input) {
    this.state.open = input.open || false;
  }
  toggle() {
    this.setState("open", !this.state.open);
    this.emit("toggle", { open: this.state.open });
  }
}

<button on-click("toggle")>Toggle</button>
<if(state.open)>
  <div>Drawer content</div>
</if>
```

becomes a controllable `<let>`:

```marko
/* marko 6 */
export interface Input {
  open?: boolean;
  openChange?: (open: boolean) => void;
}

<let/open=input.open || false valueChange=input.openChange>

<button onClick() { open = !open }>Toggle</button>
<if=open>
  <div>Drawer content</div>
</if>
```

When no default/transform is needed, the shorthand `<let/open:=input.open>` is equivalent. Semantics: with no `openChange` from the parent, the component owns its state (uncontrolled); when the parent passes `openChange`, the parent owns it (controlled) and `open` tracks `input.open`.

Call sites:

```marko
/* parent.marko (marko 5, via interop) */
<drawer open=state.drawerOpen openChange(open) { component.handleOpenChange(open) }/>
```

Note the Class API parent passes `openChange` as a **function attribute** — the converted child reads `input.openChange` and emits no events, so a Class-style `on-open-change("handleOpenChange")` binding would compile but never fire (see `interop.md`).

```marko
/* parent.marko (marko 6) */
<let/drawerOpen=false>
<drawer open:=drawerOpen/>
```

**Traps:** name the change handler `<prop>Change` (that is what `:=` desugars to — `openChange`, `valueChange`); a differently-named event (`on-toggle`) forfeits the shorthand. Marko 5 events conventionally wrapped payloads (`{ originalEvent, open }`) — Marko 6 passes plain arguments; document the new signature for consumers.

## Element refs and focus

```marko
/* marko 5 */
class {
  focusName() {
    this.getEl("name").focus();
  }
}

<input key="name" placeholder="Name"/>
<button on-click("focusName")>Focus</button>
```

```marko
/* marko 6 */
<input/nameInput placeholder="Name">
<button onClick() { nameInput().focus() }>Focus</button>
```

The tag variable is a **getter function** (`nameInput()`), browser-only. For repeated elements (`key="opt[]"` + `getEls("opt")`), the hoisted variable is iterable:

```marko
<for|opt, i| of=input.options>
  <input/optEl value=opt>
</for>

<button onClick() {
  for (const el of optEl) console.log(el.value);
  [...optEl][0]?.focus();
}>Read all</button>
```

`getElId()` / `id:scoped` uses become the `<id>` tag:

```marko
<id/inputId>
<label for=inputId>Name</label>
<input id=inputId>
```

## Global listeners, timers, effects

```marko
/* marko 5 */
class {
  onMount() {
    this.subscribeTo(window).on("resize", this.onResize.bind(this));
    this.timer = setInterval(() => this.tick(), 1000);
  }
  onDestroy() {
    clearInterval(this.timer);
  }
  onResize() { this.setState("width", window.innerWidth); }
  tick() { this.setState("now", Date.now()); }
}
```

```marko
/* marko 6 */
<let/width=0>
<let/now=Date.now()>

<script>
  window.addEventListener("resize", () => { width = window.innerWidth }, { signal: $signal });

  const timer = setInterval(() => { now = Date.now() }, 1000);
  $signal.onabort = () => clearInterval(timer);
</script>
```

`<script>` runs in the browser after mount and **re-runs whenever a tag variable it references changes**; `$signal` aborts on cleanup (before re-run and on removal). Keep effect scripts free of incidental state reads or they re-run more than intended — split unrelated effects into separate `<script>` tags.

## Third-party imperative libraries

When an instance must persist across updates (charts, maps, editors), `<script>` re-running is the wrong shape — use `<lifecycle>`:

```marko
/* marko 5 */
class {
  onMount() {
    this.chart = new Chart(this.getEl("canvas"), { data: this.input.data });
  }
  onUpdate() {
    this.chart.setData(this.input.data);
  }
  onDestroy() {
    this.chart.destroy();
  }
}

<canvas key="canvas"/>
```

```marko
/* marko 6 */
client import { Chart } from "chart-lib"

<canvas/canvas/>
<lifecycle
  onMount() {
    return { chart: new Chart(canvas(), { data: input.data }) };
  }
  onUpdate() {
    this.chart.setData(input.data);
  }
  onDestroy() {
    this.chart.destroy();
  }
/>
```

`this` is stable across the three hooks; `onMount`'s returned object merges into it. `onUpdate` re-runs when its own referenced dependencies change. The `client import` keeps the library out of the server bundle (replaces `component-browser.js` tricks).

## Attribute tags (named/nested content)

```marko
/* marko 5: my-menu.marko + marko-tag.json declaring "@item" */
<ul>
  <for|item| of=input.item>
    <li on-click("handleSelect", item.value)>
      <${item.renderBody}/>
    </li>
  </for>
</ul>
```

```marko
/* marko 6: my-menu.marko (marko-tag.json deleted) */
export interface Input {
  item?: Marko.AttrTag<{
    value: string;
    content?: Marko.Body;
  }>;
  onSelect?: (value: string) => void;
}

<ul>
  <for|item| of=input.item>
    <li onClick() { (input.onSelect || null)?.(item.value) }>
      <${item.content}/>
    </li>
  </for>
</ul>
```

Call sites are unchanged (`<my-menu><@item value="a">A</@item>...</my-menu>`). The type declarations from `marko-tag.json` (`"@item <item>[]"`, attribute lists) move into `Input` with `Marko.AttrTag<T>`; repeated tags are consumed by iterating the singular property. `(input.onSelect || null)?.(...)` is the standard optional-handler call — handler props may be conditionally _falsy_, and `false?.()` would throw.

## Async content (`<await>`)

```marko
/* marko 5 */
<await(getUser()) client-reorder>
  <@placeholder>Loading…</@placeholder>
  <@then|user|>Hi ${user.name}</@then>
  <@catch|err|>${err.message}</@catch>
</await>
```

```marko
/* marko 6 */
<try>
  <await|user|=getUser()>
    Hi ${user.name}
  </await>

  <@placeholder>Loading…</@placeholder>
  <@catch|err|>${err.message}</@catch>
</try>
```

The body of `<await>` is the "then"; placeholder and error handling move to a wrapping `<try>` (which may cover several awaits). A `@placeholder` opts the section into out-of-order streaming automatically — `client-reorder`, `<await-reorderer>`, `timeout=`, and `show-after=` are removed (implement timeouts on the promise itself, e.g. `AbortSignal.timeout`). Explicit `<await-reorderer/>` (and `<init-components/>`) tags were implicitly injected by Marko 5 anyway — delete them unconditionally, even before migrating.

**Interop trap:** while mixed 5/6, keep an `<await>` and the components it renders on the same side of the Class/Tags boundary — pending promises cannot cross it.

## Split components (`component-browser.js`)

Marko 5 split components separate server-safe rendering from browser behavior:

```text
components/fancy-toggle/
  index.marko            # template + component.js lifecycle
  component-browser.js   # onMount/onUpdate + handlers, browser-only bundle
```

Split components exist for two different reasons — treat them differently:

1. **A glorified `client import`.** Many `component-browser.js` files carry no real lifecycle logic; they exist only to keep browser-only code out of the server bundle. Replace these directly with a `client import` in the template — even **before** migrating, since `server`/`client` statements were backported to Marko 5 (5.38+) and are neutral for interop classification:

   ```marko
   client import "./browser-only-setup"
   ```

2. **Real browser lifecycle** (`onMount`/`onUpdate` + handlers). These collapse into `index.marko` during conversion. There is nothing to preserve about the split itself: targeted compilation already generates separate server/client outputs per template, and only the reactive/handler code ships to the browser.

Either way the end state is one `.marko` file: browser-only imports become `client import`, server-only ones `server import`. Convert the template plus _both_ JS files as one unit using the patterns above, then delete the JS files.

## Parent calls child methods (`getComponent`)

```marko
/* marko 5 parent */
class {
  reset() {
    this.getComponent("picker").setColor("#ffffff");
  }
}
<color-picker key="picker"/>
<button on-click("reset")>Reset</button>
```

Marko 6 children export an API with `<return>`, received as a tag variable:

```marko
/* color-picker.marko (marko 6) */
<let/color="#ff8000">
<input type="color" value:=color>
<return={ setColor(c) { color = c } }/>
```

```marko
/* parent.marko (marko 6) */
<color-picker/picker/>
<button onClick() { picker.setColor("#ffffff") }>Reset</button>
```

Before reaching for this, check whether the controllable pattern (`color:=`) removes the need for imperative calls entirely — it usually does.

## Legacy widgets (marko-widgets / `@marko/compat-v4`)

```js
// marko 5-era legacy widget (widget.js)
module.exports = require("marko-widgets").defineComponent({
  template: require("./template.marko"),
  getInitialState(input) {
    return { expanded: !!input.expanded };
  },
  init() {
    this.el.classList.add("ready");
  },
  handleHeaderClick() {
    this.setState("expanded", !this.state.expanded);
  },
});
```

Rewrite directly as one Tags API file — the same shapes apply: `getInitialState` → `<let>` initials, `getTemplateData`/`getInitialProps` → `<const>`, `init()` → `<script>`, `w-on-*`/`w-id` in the template → `onEvent=` handlers and tag variables, `w-body` → `content`. There is no interop for widgets, so this rewrite cannot be deferred in either migration flow. For sprawling widgets, an intermediate rewrite to the Class API (which _does_ interop) is acceptable to unblock the incremental flow, but budget the second pass.
