# Marko 6 cheat sheet

Marko 6 = HTML superset, not JSX and not Marko 4/5 syntax. `.marko` files are components; the filename is the tag name.

## Golden rules

1. Text interpolation: `${expr}` inside tag bodies. A bare line at the template root parses as a tag (concise mode): `Welcome aboard` fails to compile, but `p is a tag` compiles **silently** to `<p is a tag></p>`, since any line starting with a real tag name loses its words to attributes. Wrap text in an element (`<p>Welcome aboard</p>`) or prefix the line with `--` and a space (`-- Welcome ${name}`). Attributes take raw JS after `=` with no braces or quotes: `<div title=user.name data-n=1 + 1>`.
2. A top-level `>` hugging its operand in an attribute value **ends the tag** silently: `<button disabled=count>=8 onClick() {…}>More</button>` is `disabled=count` plus the text `=8 onClick() {…}>`, so the handler never binds. Space a `>=` (`disabled=count >= 8`), and parenthesize a bare `>` comparison (`hidden=(a > b)`) and a TS type argument `<let/s=(new Set<string>())>`. Do not move the type onto the tag variable instead: `<let/s:Set<string>=new Set()>` compiles but fails type-check with TS2322 (the annotation does not flow into the initializer). A `>` nested inside `(…)`/`{…}`/`[…]` is safe (`class={ big: n > 1 }`). `<` never closes a tag (`disabled=count<=1` is fine).
3. State: `<let/name=initial>` (slash then var name!). Update by plain assignment in an event handler: `count++`, `text = "hi"`. No setState, no hooks.
4. Derived values: `<const/total=items.length * price>` auto-recomputes. Never use an effect to derive state. A tag variable is whatever the tag returns, not the attribute you passed. `<let/draft=input.text>` re-runs on every `input.text` change but returns state it controls, so `draft` keeps your edits; only a controllable `<let>` (`valueChange=`, or `<let/draft:=input.text>`) takes the new value. Pick by intent: recomputes → `<const>`, seeds then diverges → `<let>`. A `<let>` you never assign is just a frozen `<const>`. Updates batch: mid-handler a reassigned `<let>` reads current but its derived `<const>` reads stale, so recompute from the `<let>`.
5. Never mutate state in place: `items.push(x)` does not update the UI. Always reassign:
   - add: `items = items.concat(x)`
   - remove: `items = items.toSpliced(i, 1)`
   - update: `items = items.toSpliced(i, 1, { ...item, done: true })`
   - object: `user = { ...user, name }`
6. Events: method shorthand `onClick() { ... }` or `onClick=fn`. Handlers receive `(event, element)`; delegation means the element is the second parameter, not `event.currentTarget`: `onSubmit(e) { e.preventDefault(); save() }`, `onClick(e, el) { el.focus() }`. Don't sync input values through `onInput`/`onChange`; that's what the change handlers below are for. Prefix with `async` to `await` in the body: `async onClick() { await save() }`.
7. Native inputs are uncontrolled by default: `value=` sets the default value — later writes update what `form.reset()` restores, never a dirty field's display. Adding the matching `*Change` handler is what makes them controlled: `valueChange` on `<input>`/`<textarea>`/`<select>`, `checkedChange` on checkboxes/radios, `openChange` on `<details>`/`<dialog>`. `value:=text` is the shorthand for `value=text valueChange(v) { text = v }`. (`<textarea value:=text/>`: value attribute, not body.) `:=` differs by operand: on an identifier (`value:=text`) it assigns that variable; on a member expression (`<let/count:=input.count>` in a child) it wires `input.countChange`, so the child is controlled when the parent passes that handler and keeps its own state when it doesn't.
8. Transform in the handler when needed; number inputs give strings: `<input type="number" value=n valueChange(v) { n = +v }>`, or `value:parseFloat:=n`. Uncommitted edits (debounce, commit on blur) never sync through a `<script>`; that is rule 4's derive-by-effect trap. Pair a controllable `<let/value:=input.value>` with `<let/pending=null>`, show `<const/draft=pending ?? value>`, collect with `valueChange(v) { pending = v }`, and commit by assigning `value = pending; pending = null`. Prefer that to calling `input.valueChange(...)`, which throws unless every caller controls the tag.
9. Radio/checkbox groups: `checkedValue:=picked` on each input (shared var, distinct `value=`); the match is checked; array var for multi-checkbox. Dropdown: `<select value:=picked>`.
10. Module-level values, helpers and type aliases need `static`: `static const LIMIT = 10`, `static function fmt(n) {…}`, `static type Row = {…}`. Without it `function fmt(n) {` parses as a tag: ``Unable to find entry point for custom tag `<function>` ``, an error that points at `static`. Prefer it to `<const>` for anything that never changes: `<const/LIMIT=10>` emits a per-instance signal plus a `$setup` call. `server`/`client` narrow `static` to one platform (`client import { Chart } from "chart"`); the binding is `undefined` on the other, so read a `client` one only from `<script>`/handlers/`<lifecycle>` — reading it while rendering throws `is not a function` during SSR.

## Canonical component

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
<if=(count > 10)> A </if>   // parenthesize comparisons; a bare `>` ends the tag (rule 2)
<else if=other> B </else>
<else> C </else>

<for|item, index| of=list by="id"> ${item.name} </for>   // by keys the loop (no key= attr!)
<for|city| of=cities by=(city) => city> ${city} </for>    // primitives: by takes a function; the loop param is not in scope in by=, so by=city is an undefined variable
<for|i| from=0 until=5> ${i} </for>                       // 0..4

<show=open> stays mounted, keeps state (form drafts) when hidden </show>
```

`<if>` destroys/rebuilds its content; `<show>` renders it and hides it, on the server too (use for toggles that must keep state).

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

`@placeholder`/`@catch` go on `<try>`, never on `<await>`. On the server this streams (placeholder flushes first, content follows). It works in the browser too: hand `<await>` a new promise (e.g. a `<const>` derived from state) and it shows the placeholder again, then the new result. `@catch` can't recover in place: redirect (a `<script>` setting `location`), or re-render the `<try>` by bumping a key on a wrapping `<for>`.

Don't fetch while rendering: start data loads early, pass the promise through the template, and `<await>` it where the data is rendered. Fetching inside each component that renders the data serializes the requests (waterfalls). Under @marko/run, load in the route handler (`return next({ user: getUser() })`, no await) and render with `<await|user|=$global.data.user>`.

## Components

- File `src/tags/product-card.marko` is auto-discovered as `<product-card>` from any template (no import needed). Attributes arrive as `input`: `${input.title}`.
- Body content renders where the child places `<${input.content}/>`, and the child can hand it values: `<${input.content}(x, y)/>` in the child, `<my-tag|count, total|>${count}</my-tag>` in the parent. Placement is the child's: put it inside a `<for>` and the body appears once per item, each with its own values (`<for|...args| to=input.to><${input.content}(...args)/></>`). Those values exist only inside that body.
- `<return=value>` publishes one value into the parent's scope, named by a tag variable; from there it is an ordinary value in that template. A native tag variable's value is itself a function returning the element, so `<div/el>` is read as `el()`. So: body parameters when the value belongs to the nested markup, including one set per item where the child loops; a tag variable when the parent needs one value outside the body. A tag var on a child that never returns is `undefined`.

```marko
/* src/tags/toggle-section.marko */
<let/open=input.startExpanded ?? false>
<button onClick() { open = !open }>${input.title}</button>
<if=open><div><${input.content}/></div></if>
<return=open>

/* parent */
<toggle-section/aOpen title="A" startExpanded=true>one</toggle-section>
<toggle-section/bOpen title="B">two</toggle-section>
<const/openCount=(aOpen ? 1 : 0) + (bOpen ? 1 : 0)>   // recomputes on every toggle
```

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

- Repeated attr tags (many `<@tab ...>`) arrive as the singular prop `input.tab`, which is iterable but not an array: `input.tab[i]` and `input.tab.length` are undefined. To index or count, spread first: `<const/tabs=[...input.tab ?? []]>` then `tabs[active]`/`tabs.length`. Looping directly is fine: `<for|tab| of=input.tab>`.
- Conditional attrs: `false`/`null` attrs are omitted from HTML. `aria-selected` etc. want strings: `aria-selected=(i === active && "true")`.
- `class=` / `style=` accept strings, objects, arrays: `class=["btn", { active }]`, `style={ color }` (single braces). `style=` keys are kebab-case CSS names (`{ "background-color": c }`), not camelCase.
- `<id/x>` mints a collision-free id for label/input wiring (`<label for=x>`/`<input id=x>`); don't hardcode ids in reusable tags; `<id/x=input.id>` reuses a caller's.
- Head tags render where written: a `<title>`/`<meta>`/`<link>` inside a nested component stays in the body, giving a second title or an inert canonical. `<head>` is already written by the time descendants render, so page meta has to be known before it: under @marko/run declare it in the route's `+meta.*` file and read `$global.meta` from the layout that owns `<head>`, otherwise pass it down or set it on `$global` at the render call.

## Sharing data (`$global`)

- Read request-scoped `$global` from any template, no threading: `${$global.messages.title}`. Otherwise prop-drill through `input`; there is no provider/consumer context API.
- Populate at the render call: `template.render({ $global: { messages } })`. Under @marko/run a middleware's `return next({ messages })` merges into `$global.data`.
- `$global` is not serialized to the client by default. Mark any key the browser itself evaluates, e.g. an event handler, a `<script>`, markup the browser (re)creates, or a `<const>` that recomputes from state: `$global.serializedGlobals = { messages: true }` at the render call (under @marko/run, `context.serializedGlobals.data = true`; it ships `params`/`url` already). What the server already rendered needs no opt-in.

## Client-side effects

Rare; prefer state and `<const>`.

```marko
<div/el/>
<script>
  // Browser-only. Runs after mount and re-runs when referenced state changes.
  el().focus();                                  // native element refs are getter functions
  const id = setInterval(tick, 1000);
  $signal.onabort = () => clearInterval(id);     // cleanup
</script>
```

`<style>` = real CSS, extracted & global; `<style/styles>` scopes it (CSS modules): `.card {...}` then `class=styles.card`, or `<style/{card}>` then `class=card`. Don't hand-namespace globals. `<script>` = reactive effect, not an HTML script tag.

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

## TypeScript

`export interface Input` types `input`; generic as `Input<T>`, body content as `Marko.Body<[params]>`, repeated attr tags as `Marko.AttrTag<T>`.

```marko
export interface Input<T> {
  value: T;
  onSelect?: (index: number) => void;              // event attrs: exact camelCase
  then?: Marko.AttrTag<{ content: Marko.Body<[T]> }>;
}

<${input.then}(input.value)/>
```

`tsc` silently skips `.marko`, so a type-broken template still exits 0. Check with `mtc` (`@marko/type-check`); in TS mode an undeclared `Input` is `{}` by design, so declare one before reading `input`.

## DON'T

Each left-hand habit is an error or silently wrong.

| Wrong (React/Vue/Marko5 habit)                              | Right                                                                                |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `disabled=n>=8` (hugging `>` in a value)                    | `disabled=n >= 8` or `disabled=(n >= 8)`; a hugging `>` silently closes the tag      |
| `<let/s=new Set<string>()>` (type argument in a value)      | `<let/s=(new Set<string>())>`; a tag-var annotation fails type-check                 |
| `{expr}` in markup, `className`, `key=`, `style={{...}}`    | `${expr}`, `class`, `by=` on `<for>`, `style={...}`                                  |
| `onClick={() => ...}` / `@click` / `on-click("name")`       | `onClick() { ... }`                                                                  |
| `const [x, setX] = useState()` / `state` / `class {}` block | `<let/x=0>` then `x = 1`                                                             |
| `$ const y = x * 2;` (scriptlets are removed)               | `<const/y=x * 2>`                                                                    |
| `<let/n=a + b>` for a value that should recompute           | `<const/n=a + b>`; `<let>` seeds an initial value, then de-syncs by design           |
| `<let/x=input.x>` expecting it to track `input.x`           | `<const/x=input.x>`, or `<let/x:=input.x>` to make it controllable                   |
| `function fmt(n) {…}` / `const LIMIT = 10` at module level  | `static function fmt(n) {…}` / `static const LIMIT = 10`                             |
| `type Row = {…}` at module level                            | `static type Row = {…}`                                                              |
| `<let x=0>`                                                 | `<let/x=0>`                                                                          |
| `<if(cond)>`                                                | `<if=cond>`                                                                          |
| `items.push(x)`                                             | `items = items.concat(x)`                                                            |
| `input.renderBody` (renders nothing, no error)              | `input.content`                                                                      |
| `<await>` with `@placeholder`/`@catch`                      | wrap in `<try>`                                                                      |
| `el.focus()` on a ref                                       | `el().focus()` inside `<script>`/handler                                             |
| `input.tab[0]` / `input.tab.length`                         | `[...input.tab ?? []]` first (attr tags are iterables, not arrays)                   |
| bare text on its own line at template root                  | wrap in an element (`<p>...`), or prefix the line with `--` and a space              |
| `by=item` using the loop variable                           | `by="propName"` or `by=(item) => key`; `by=` is evaluated outside the loop           |
| `onInput(e) { q = e.target.value }` to sync an input        | `value:=q`; the change handler owns the value                                        |
| `<script>` syncing a draft field back from `value`          | `<const/draft=pending ?? value>`; a `<let>` holds only the uncommitted edit          |
| fetching inside the component that renders the data         | start the promise early (route handler / top of template), pass it down to `<await>` |
| `style={ backgroundColor: c }` (camelCase keys)             | `style={ "background-color": c }` (kebab-case)                                       |
| `this.querySelector` / `this.getRootNode()` in `<script>`   | element ref getter: `<div/el>` then `el()` (there is no `this`)                      |
| `<div/my-el>` / `<input/card-input>` (hyphen in tag var)    | valid JS identifier: `<div/myEl>` (the error won't name the hyphen)                  |
| hand-rolled radios `checked=x checkedChange(v){…}`          | `checkedValue:=picked` on each radio (shared var, distinct `value=`)                 |
| hand-rolled `IntersectionObserver` to defer a widget's JS   | `import W from "<w>" with { load: "visible#sel" }`                                   |
| imperative lib wired through `<script>` mount + cleanup     | `<lifecycle onMount/onUpdate/onDestroy>` (keeps `this` across all three)             |
| `createContext`/provider to share data                      | `input` (prop drilling) or request-scoped `$global`                                  |
| `<title>`/`<meta>` in a nested component                    | put page meta in the layout that owns `<head>`; head tags never hoist                |
| `$global.x` in client-reactive code, not allow-listed       | `$global.serializedGlobals = { x: true }` first; otherwise the read is `undefined`   |
| hand-namespaced global classes (`.my-card-title`)           | `<style/styles>` + `class=styles.card` (scoped CSS modules)                          |
| `tsc --noEmit` to type check templates                      | `mtc`; `tsc` skips `.marko` files and exits 0                                        |
