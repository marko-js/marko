# Marko 6 cheat sheet

Marko 6 = HTML superset. NOT JSX, NOT old Marko 4/5. `.marko` files are components; the filename is the tag name.

## Golden rules

1. Text interpolation: `${expr}` inside tag bodies. A bare line like `Welcome aboard` at the root of the template parses as a TAG named `Welcome` (concise mode) and fails to compile. Wrap it in an element (`<p>Welcome aboard</p>`) or prefix the line with `-- ` to mark it as text (`-- Welcome ${name}` works at the top level). Attributes take raw JS after `=` with NO braces/quotes needed: `<div title=user.name data-n=1 + 1>` (parenthesize if the value contains `>`).
2. State: `<let/name=initial>` (slash then var name!). Update by plain assignment in an event handler: `count++`, `text = "hi"`. No setState, no hooks.
3. Derived values: `<const/total=items.length * price>` — auto-recomputes. Never use an effect to derive state.
4. NEVER mutate state in place. `items.push(x)` will NOT update the UI. Always reassign:
   - add: `items = items.concat(x)`
   - remove: `items = items.toSpliced(i, 1)`
   - update: `items = items.toSpliced(i, 1, { ...item, done: true })`
   - object: `user = { ...user, name }`
5. Events: method shorthand `onClick() { ... }` or `onClick=fn`. Handler gets the DOM event: `onSubmit(e) { e.preventDefault(); save() }`. Don't sync input values through `onInput`/`onChange` listeners — that's what change handlers (next rule) are for, and they make the data's owner explicit.
6. Native inputs are UNCONTROLLED by default: `value=` only sets the initial value. Adding the matching `*Change` handler is what makes them controlled — `valueChange` on `<input>`/`<textarea>`/`<select>`, `checkedChange` on checkboxes/radios, `openChange` on `<details>`/`<dialog>`. `value:=text` is the shorthand for `value=text valueChange(v) { text = v }`. (`<textarea value:=text/>` — value attribute, not body.)
7. Transform in the handler when needed — number inputs give STRINGS: `<input type="number" value=n valueChange(v) { n = +v }>`, or `value:parseFloat:=n`.
8. Radio/checkbox groups: `checkedValue:=picked` on each input (shared var, distinct `value=`) — the match is checked; array var for multi-checkbox. Dropdown: `<select value:=picked>`.

## Canonical component (copy this shape)

```marko
<let/items=[]>
<let/draft="">
<const/remaining=items.filter(t => !t.done).length>

<input value:=draft placeholder="What next?">
<button onClick() {
  const text = draft.trim();
  if (text) {
    items = items.concat({ id: items.length + 1, text, done: false });
    draft = "";
  }
}>Add</button>

<if=items.length>
  <ul>
    <for|item, i| of=items by="id">
      <li class={ done: item.done }>
        <input
          type="checkbox"
          checked=item.done
          checkedChange(v) { items = items.toSpliced(i, 1, { ...item, done: v }) }
        >
        ${item.text}
      </li>
    </for>
  </ul>
  <p>${remaining} left</p>
</if>
<else>
  <p>Nothing yet</p>
</else>
```

## Control flow

```marko
<if=cond> A </if>
<else if=other> B </else>
<else> C </else>

<for|item, index| of=list by="id"> ${item.name} </for>   // by keys the loop (no key= attr!)
<for|city| of=cities by=(city) => city> ${city} </for>    // primitives: by takes a FUNCTION — by=city would be an undefined variable (the loop param is not in scope in by=)
<for|i| from=0 until=5> ${i} </for>                       // 0..4

<show=open> stays mounted, keeps state (form drafts) when hidden </show>
```

`<if>` destroys/rebuilds its content; `<show>` just hides it (use for toggles that must keep state).

## Async (`<await>`)

```marko
import { getUser } from "../data.js";

<try>
  <await|user|=getUser()>
    <h2>${user.name}</h2>
  </await>

  <@placeholder>Loading...</@placeholder>
  <@catch|err|>${err.message}</@catch>
</try>
```

`@placeholder`/`@catch` go on `<try>`, never on `<await>`. On the server this streams (placeholder flushes first, content follows). It works in the browser too: hand `<await>` a new promise (e.g. a `<const>` derived from state) and it shows the placeholder again, then the new result. `@catch` can't recover in place — usually it redirects (a `<script>` setting `location`) for a full reload, otherwise re-render the `<try>` (bump a key on a wrapping `<for>`).

Don't fetch while rendering: start data loads early, pass the PROMISE through the template, and `<await>` it where the data is rendered. Fetching inside each component that renders the data serializes the requests (waterfalls). Under @marko/run, load in the route handler — `return next({ user: getUser() })`, no await — and render with `<await|user|=$global.data.user>`.

## Components

- File `src/tags/product-card.marko` is auto-discovered as `<product-card>` from any template (no import needed). Attributes arrive as `input`: `${input.title}`.
- Body content passed by the parent renders with `<${input.content}/>`.
- Named sections use attribute tags:

```marko
/* parent */
<my-card>
  <@header>Hello</@header>
  body text
</my-card>

/* src/tags/my-card.marko */
<div class="card">
  <header><${input.header.content}/></header>
  <${input.content}/>
</div>
```

- Repeated attr tags (many `<@tab ...>`) arrive as the SINGULAR prop `input.tab`, which is iterable but NOT an array: `input.tab[i]` and `input.tab.length` are undefined. To index or count, spread first: `<const/tabs=[...input.tab ?? []]>` then `tabs[active]`/`tabs.length`. Looping directly is fine: `<for|tab| of=input.tab>`.
- Conditional attrs: `false`/`null` attrs are omitted from HTML. `aria-selected` etc. want strings: `aria-selected=(i === active && "true")`.
- `class=` / `style=` accept strings, objects, arrays: `class=["btn", { active }]`, `style={ color }` (single braces). `style=` keys are kebab-case CSS names (`{ "background-color": c }`), not camelCase.
- `<id/x>` mints a collision-free id for label/input wiring (`<label for=x>`/`<input id=x>`) — don't hardcode ids in reusable tags; `<id/x=input.id>` reuses a caller's.

## Client-side effects (rare — prefer state/const)

```marko
<div/el/>
<script>
  // Browser-only. Runs after mount and re-runs when referenced state changes.
  el().focus();                                  // element refs are getter FUNCTIONS
  const id = setInterval(tick, 1000);
  $signal.onabort = () => clearInterval(id);     // cleanup
</script>
```

`<style>` = real CSS, extracted & global. `<script>` = reactive effect, NOT an HTML script tag.

Imperative libs (charts, maps) needing mount/update/destroy: use `<lifecycle>`, not a hand-wired `<script>`. `this` persists across all three; return an object from `onMount` to stash the instance:

```marko
<canvas/canvas/>
<lifecycle
  onMount() { return { chart: new Chart(canvas(), data) } }
  onUpdate() { this.chart.setData(data) }         // re-runs when `data` changes
  onDestroy() { this.chart.destroy() }
/>
```

## Lazy loading

Defer a tag's JS into its own bundle until a trigger fires: `render`, `visible#sel`, `idle`, `media(...)`, `on-click#sel` (combine with `|`). Server HTML renders immediately; `<try>` shows a `@placeholder` while loading. Don't hand-roll an `IntersectionObserver`.

```marko
import PriceChart from "<price-chart>" with { load: "visible#chart" }
<div#chart><PriceChart symbol=input.symbol/></div>
```

## DON'T (these are errors or silently wrong)

| Wrong (React/Vue/Marko5 habit)                              | Right                                                                                |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `{expr}` in markup, `className`, `key=`, `style={{...}}`    | `${expr}`, `class`, `by=` on `<for>`, `style={...}`                                  |
| `onClick={() => ...}` / `@click` / `on-click("name")`       | `onClick() { ... }`                                                                  |
| `const [x, setX] = useState()` / `state` / `class {}` block | `<let/x=0>` then `x = 1`                                                             |
| `$ const y = x * 2;` (scriptlets are removed)               | `<const/y=x * 2>`                                                                    |
| `<let x=0>`                                                 | `<let/x=0>`                                                                          |
| `<if(cond)>`                                                | `<if=cond>`                                                                          |
| `items.push(x)`                                             | `items = items.concat(x)`                                                            |
| `input.renderBody`                                          | `input.content`                                                                      |
| `<await>` with `@placeholder`/`@catch`                      | wrap in `<try>`                                                                      |
| `el.focus()` on a ref                                       | `el().focus()` inside `<script>`/handler                                             |
| `input.tab[0]` / `input.tab.length`                         | `[...input.tab ?? []]` first (attr tags are iterables, not arrays)                   |
| bare text on its own line at template root                  | wrap in an element (`<p>...`), or prefix the line with `-- `                         |
| `by=item` using the loop variable                           | `by="propName"` or `by=(item) => key` — `by=` is evaluated outside the loop          |
| `onInput(e) { q = e.target.value }` to sync an input        | `value:=q` — the change handler owns the value                                       |
| fetching inside the component that renders the data         | start the promise early (route handler / top of template), pass it down to `<await>` |
| `style={ backgroundColor: c }` (camelCase keys)             | `style={ "background-color": c }` (kebab-case)                                       |
| `this.querySelector` / `this.getRootNode()` in `<script>`   | element ref getter: `<div/el>` then `el()` (there is no `this`)                      |
| `<div/my-el>` / `<input/card-input>` (hyphen in tag var)    | valid JS identifier: `<div/myEl>`                                                    |
| hand-rolled radios `checked=x checkedChange(v){…}`          | `checkedValue:=picked` on each radio (shared var, distinct `value=`)                 |
| hand-rolled `IntersectionObserver` to defer a widget's JS   | `import W from "<w>" with { load: "visible#sel" }`                                   |
| imperative lib wired through `<script>` mount + cleanup     | `<lifecycle onMount/onUpdate/onDestroy>` (keeps `this` across all three)             |
