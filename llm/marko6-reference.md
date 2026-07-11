# Marko 6 Reference & Guidance (marko@6 / @marko/runtime-tags 6.3.2)

Comprehensive, source-verified reference for the Marko 6 "tags API". Verified against
`packages/runtime-tags` source (translator + runtime), the markojs.com docs, and live
compile/render testing. Every syntax claim here has been checked against the
implementation (`src/translator/core/*`) or executed.

---

## 1. Mental model

- A `.marko` file is HTML-superset source that compiles to **two artifacts**: a
  streaming string-concatenation program for the server and a fine-grained DOM
  program for the browser. There is no virtual DOM and no runtime dependency
  tracking; the reactive graph is computed **at compile time**.
- **Everything is a tag.** State (`<let>`), derivation (`<const>`), control flow
  (`<if>`, `<for>`), effects (`<script>`), lifecycle (`<lifecycle>`), error/async
  boundaries (`<try>`, `<await>`) are all tags. There is no component class, no
  hooks, no `this`.
- **Resumability, not hydration.** The server serializes state and markers into
  the HTML; the client picks up where the server left off without re-rendering.
  Consequence: state must be serializable, and zero JS ships for non-interactive
  content ("islands" at expression granularity, automatically).
- Component boundaries are free: splitting templates into more `.marko` files does
  not change bundle size. Bundle size is determined by interactivity alone.

## 2. Template variables

| Variable  | What it is                                                                                                                                                                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `input`   | The object of attributes passed by the parent tag or top-level `render`/`mount` call. Type it with `export interface Input { ... }`.                                                                                                                  |
| `$global` | Render globals, passed as `input.$global` at the render entry point (stripped from `input`). Under @marko/run this is the request context.                                                                                                            |
| `$signal` | An `AbortSignal` scoped to the current expression/scope; aborted on invalidation or removal. **Client-only** — usable inside `<script>` bodies and event handlers; reading it during server rendering throws `Cannot use $signal in a server render`. |

## 3. Module-level statements

Allowed at template root (module scope), before/between/after markup:

```marko
import sum from "./sum.js"          // static import (shorthand for `static import`)
import MyTag from "<my-tag>"        // tag import shorthand (uses tag discovery)
export function helper() {}          // regular exports allowed
static const ONE_TIME = compute()    // module scope, runs once on server AND client
server console.log("server only")    // module scope, server only
client console.log("browser only")   // module scope, browser only
static { /* any statements */ }      // block form; also server { } / client { }
```

- `static`/`server`/`client` values are **not reactive** — they run once at module
  load, shared by all instances.
- **`$ scriptlets` do not exist in Marko 6.** `$ const x = 1;` is a compile error
  ("Scriptlets are not supported when using the tags api."). Use `<const/x=1>`.

## 4. Tag syntax essentials

```
<tag|...params|/tagVar ...attrs> content <@attrTags/> </tag>
```

### Attributes are JavaScript expressions

```marko
<my-tag str="Hello" num=1 + 1 date=new Date() list=[1, 2] obj={ a: 1 }/>
<my-tag str=`Hi ${name}`/>
```

- `"Hello"` is a JS string literal, not an HTML attribute string.
- `null`/`undefined`/`false` attrs are **omitted from HTML** (`0`, `NaN`, `""` are kept).
- Bare attributes are `true`: `<input checked>` ≡ `checked=true`.
- An unparenthesized `>` is ambiguous: write `value=(1 > 2)`.
- Commas may terminate attributes (`<my-tag a=1, b=2/>`); sequence expressions need parens.
- Spread: `<my-tag ...input foo="bar"/>` (merged left→right).
- ARIA enumerated attrs want strings: `aria-pressed=isPressed && "true"` (a bare
  boolean serializes as `""`).

### Shorthands

```marko
<div#hero.card.large/>              // id="hero" class="card large" (interpolation ok: .icon-${name})
<my-tag=42/>                        // value=42        (default "value" attribute)
<my-tag() { doIt() }/>              // value=function
<button onClick(e) { count++ }>     // method shorthand for function attrs
<input value:=text>                 // two-way bind: value=text valueChange(v){ text = v }
<input value:parseFloat:=num>       // bind + refine: valueChange(v){ num = parseFloat(v) }
<counter count:=input.count/>       // member bind: count=input.count countChange=input.countChange
```

`:=` requires an identifier or property accessor. The generated handler name is
always the attribute name + `Change`.

### Content and text

```marko
<div>Hello ${user.name}</div>       // interpolation, XSS-escaped
<article>$!{trustedHtml}</article>  // UNESCAPED (only for pre-sanitized markup)
```

Body content of a custom tag arrives as `input.content` (a `Marko.Body`), rendered
with a dynamic tag: `<${input.content}/>`. **`renderBody` is Marko 5; it is spelled
`content` in Marko 6.** Since Marko 6, native tags also accept `content=` as an
attribute.

### Comments

`<!-- html -->`, `// line`, and `/* block */` comments are all stripped from output.
Use `<html-comment>` to emit a real comment.

### Tag variables (`/var`)

Expose a value **from** a tag into the whole template scope (hoisted):

```marko
<let/count=0>                       // state variable
<style/styles> .foo { } </style>    // CSS modules object
<div/el/>                           // native tags: el is a GETTER FUNCTION for the node
<my-widget/api/>                    // custom tags: value of the child's <return>

<script>
  el().focus();                     // call the getter — client-side only
</script>
```

- Tag vars are hoisted: readable anywhere in the file except module statements.
- A tag var referenced from a hoisted context (e.g. declared inside `<for>`, read
  outside) is **iterable**: `[...$el]` gives all instances.
- Element refs and hoisted values may only be _read_ inside `<script>` bodies and
  event handlers (client side).
- Convention: name element refs `$el` (`<input/$el/>`).

### Tag parameters (`|params|`) and arguments

Content receives values **back from the child** through parameters:

```marko
/* child.marko */
<${input.content} number=1337/>       // or with args: <${input.content}(1, 2, 3)/>

/* parent.marko */
<child|{ number }|> got ${number} </child>
<child|a, b, c|> args form </child>   // when child used (1, 2, 3)
```

Params are scoped to the tag body only (not attribute tags). Attributes _or_
arguments — not both.

### Attribute tags (`<@name>`)

Named/repeated content channels, passed as `input.<name>`:

```marko
<my-layout title="Welcome">
  <@header class="hero"><h1>Hi</h1></@header>
  <p>Default content</p>
</my-layout>
```

`input.header` → `{ class: "hero", content: Marko.Body }`; remaining body →
`input.content`. Repeated attr tags share one name and are **iterable**:

```marko
/* my-menu.marko */
<for|item| of=input.item>            // input.item, singular, iterates ALL <@item>s
  <${item.content}/>
</for>

<const/items=[...input.item || []]>  // or spread to an array (|| [] when optional)
```

- Attribute tags may be nested, and may be applied conditionally/repeatedly by
  wrapping in `<if>`/`<for>` (the only things that can wrap them).
- Tag params are not visible to attribute tags (they evaluate as attributes).

### Dynamic tags (`<${expr}>`)

```marko
<${"h" + level}>Heading</>            // string → native tag
<${condition && "a"} href=url>text</> // falsy name → renders content only (conditional wrapper!)
<${MyTemplate} x=1/>                  // template/component reference
<${input.content} .../>               // render passed content
```

Strings always render _native_ tags. PascalCase local variables can be used
directly as tags: `<MyTag/>` ≡ `<${MyTag}/>` (imports, `<define>` vars).
Close dynamic tags with `</>`.

## 5. Core tags

### `<let>` — mutable reactive state

```marko
<let/count=0>
<let/user={ name: "Ada" }>
<button onClick() { count++ }>${count}</button>
```

- Requires a tag variable; destructuring is **not** allowed on `<let>` (it is on `<const>`).
- Updating = plain assignment (`count++`, `user = {...user, x}`) from handlers/scripts.
- **Not reactive to its `value=` attribute** after init — `<let/x=input.x>` captures
  the initial value only, unless made controllable:

```marko
/* counter.marko — controllable state */
<let/count:=input.count>            // uses input.count+input.countChange when provided,
<button onClick() { count++ }>${count}</button>   // else owns its state
```

Parent controls it with `<counter count:=parentCount/>` or intercepts with
`count=x countChange(v) { ... }`. This is the idiomatic replacement for
"lifting state up" + event mirroring (which is an anti-pattern in Marko).

### `<const>` — derived value

```marko
<const/doubled=count * 2>
<const/{ items, total }=input>       // destructuring OK
<const/fmt(n) { return n.toFixed(2) }>  // functions OK (method shorthand on value)
```

Recomputes when dependencies change; read-only (assignment is a compile error).
For app-wide constants use `static const` instead (no per-instance cost).

### `<if>` / `<else>` — conditionals

```marko
<if=user.isAdmin> Admin </if>
<else if=user.isMember> Member </else>
<else> Guest </else>
```

- Condition goes in the **default value attribute**: `<if=cond>`. Parenthesized
  conditions are fine (`<if=(a > b)>`). `<if(cond)>` (call-style args) is a
  **compile error**. Both `<else if=…>` and `<else-if=…>` parse.
- Content is destroyed & rebuilt when the condition flips; state inside is lost.

### `<show>` — visibility toggle that preserves state

```marko
<show=open>
  <textarea/>                        // keeps its value across hide/show
</show>
```

Content stays mounted (server renders it inside a `hidden` wrapper); only its
presence in the document toggles. Prefer over `<if>` for frequently-toggled or
state-holding content; prefer `<if>` when hidden content shouldn't render at all.
No `<else>`; `value=` only.

### `<for>` — loops

```marko
<for|item, index| of=items by="id">${item.name}</for>   // arrays/iterables
<for|key, value| in=obj>${key}: ${value}</for>          // object entries
<for|i| from=0 until=5>${i}</for>                       // 0..4  (until = exclusive)
<for|i| from=1 to=5 step=2>${i}</for>                   // 1,3,5 (to = inclusive)
```

- `by` keys iterations for reorder-stable state: function `by=item => item.id`, or
  **string property shorthand only with `of=`** (`by="id"`).
- There is **no `key=` attribute** (compile error suggests `by`).
- `<let>` inside `<for>` is idiomatic — per-row state, no hooks rules.

### `<await>` + `<try>` — async & error boundaries

```marko
<try>
  <await|user|=getUser()>
    <h2>${user.name}</h2>
  </await>

  <@placeholder> Loading... </@placeholder>
  <@catch|err|> ${err.message} </@catch>
</try>
```

- `<await|resolved|=promise>` — the promise is the value attribute; the resolved
  value is a tag parameter. **`@placeholder` and `@catch` belong to `<try>`, not
  `<await>`** (attribute tags on `<await>` are a compile error).
- With a `@placeholder`, the server streams the placeholder immediately and the
  awaited content later, out of order. Without `<try>`, HTML output pauses at the
  `<await>` (in-order streaming).
- `<try>` alone (with `@catch`) is a runtime error boundary.
- `<await>` is reactive in the browser: when its `value=` promise changes (for
  example a `<const>` recomputing from state), the boundary shows the
  `@placeholder` again and renders the newly resolved value.
- Don't fetch while rendering: start data loads early and pass the _promise_
  down (through attributes or route data), placing `<await>` where the data is
  rendered. Fetching inside each component that renders the data serializes the
  requests (waterfalls). Under @marko/run, load in the route handler with
  `return next({ user: getUser() })` (unawaited) and render
  `<await|user|=$global.data.user>`.
- Rendering a promise directly (`${promise}`) is a runtime error telling you to use `<await>`.

### `<script>` — the client effect primitive

```marko
<let/query="">
<script>
  console.log("query is now", query);       // runs on mount AND whenever `query` changes
  const id = setInterval(tick, 1000);
  $signal.onabort = () => clearInterval(id); // cleanup (or pass { signal: $signal } to APIs)
</script>
```

- Body is **JavaScript statements, not markup**; runs in the browser only, after
  render; re-runs when any referenced reactive value changes.
- This is Marko's `useEffect` equivalent — and like effects, avoid unless you
  actually need an imperative side effect. Derive with `<const>` instead.
- Event handlers, by contrast, are _untracked_: they read fresh values when
  invoked but never re-subscribe.
- For a literal HTML `<script>` element, use `<html-script>`.

### `<style>` — bundled CSS

```marko
<style>
  .card { padding: 1rem }              /* GLOBAL scope, extracted & loaded once */
</style>

<style/styles>                         /* tag variable → CSS Modules */
  .foo { color: red }
</style>
<div class=styles.foo/>

<style.scss> /* preprocessors via extension */ </style>

<style>
  .toast { border-color: ${tone}; }    /* dynamic values → CSS custom properties */
</style>
```

- Styles are **global by default** (unlike Vue/Svelte SFCs); scope via the CSS
  Modules tag-variable form or naming conventions.
- Dynamic `${}` values only apply to elements rendered _after_ the tag, can only
  appear where CSS expects a declaration value, and can't be immediately suffixed
  with a unit — include the unit in the value or use `calc(${x} * 1px)`.
- Adjacent files are auto-discovered per tag: `foo.marko` + `foo.style.css`
  (or `tags/foo/index.marko` + `style.css`).
- For a literal inline `<style>` element, use `<html-style>`.

### `<lifecycle>` — imperative library escape hatch

```marko
<canvas/canvas/>
<lifecycle
  onMount() { return { chart: new Chart(canvas()) } }  // returned object merges onto `this`
  onUpdate() { this.chart.update(data) }                // re-runs when its deps change
  onDestroy() { this.chart.destroy() }
/>
```

`this` is stable across the tag's lifetime and includes the tag's attributes
(reassigned on update — `onMount` must not overwrite existing props; dev throws).
Use sparingly; prefer `<script>`/state.

### `<define>` — inline reusable snippets

```marko
<define/Chip|{ label }|>
  <span class="chip">${label}</span>
</define>
<Chip label="a"/> <Chip label="b"/>
```

The tag var reflects the define's attributes + content; PascalCase makes it usable
as a tag.

### `<return>` — expose a value/API to the parent

```marko
/* color-input.marko */
<let/color="#fff">
<input type="color" value:=color>
<return=color valueChange(v) { color = v }/>   // valueChange makes it assignable
```

Parent: `<color-input/color/>` then use `color`; assignment flows through
`valueChange`. `<return/{ open() { ... } }>` exposes methods (component-ref
pattern). One `<return>` per template; not allowed inside native or control-flow tags.

### Small utilities

```marko
<id/uid/> <label for=uid>...</label> <input id=uid>   // unique SSR-safe id (value= to override)
<log=`count: ${count}`>                                // console.log, re-runs on change
<debug/> <debug=[watched, values]>                     // debugger statement
<html-comment>shown in view-source</html-comment>      // literal <!-- -->
```

Deprecated (auto-migrated, don't write): `<effect>` → `<script>`;
`<attrs/{ x }/>` → `<const/{ x }=input>`.

## 6. Native tag enhancements

### `class=` and `style=` accept strings, objects, arrays

```marko
<div class=["a", cond && "b", { c: isC }]/>
<div style={ display: "block", "margin-right": 16 }/>   // single braces — NOT React's {{ }}
```

### Event handlers

- Attributes matching `on` + capital or `on-` attach listeners:
  `onClick` → `click` (lowercased), `on-DblClick` → `DblClick` (case preserved).
- Value must be a function or falsy (conditional handlers: `onClick=ready && handler`).
- Handlers receive the DOM event. Attach cleanup-needing APIs with `$signal`.
- `on:click` and string-valued `onload=` style attrs are compile errors with fix-it hints.
- React-isms that error with suggestions: `className` → `class`, `htmlFor` → `for`,
  `key` → `by`, `ref` → tag var, `defaultValue` → `value`,
  `dangerouslySetInnerHTML` → `$!{html}`.

### Controllable form elements ("uncontrolled by default")

`<input value="x">` sets the **default**; the browser owns the state after that.
Add the matching `*Change` handler (or `:=`) to take control:

| Tag                           | Attribute                                                | Change handler       |
| ----------------------------- | -------------------------------------------------------- | -------------------- |
| `<input>`                     | `value`                                                  | `valueChange`        |
| `<input type=checkbox/radio>` | `checked`                                                | `checkedChange`      |
| `<input type=checkbox/radio>` | `checkedValue` (string or array matched against `value`) | `checkedValueChange` |
| `<select>`                    | `value` (string or array for `multiple`)                 | `valueChange`        |
| `<textarea>`                  | `value` (instead of body text)                           | `valueChange`        |
| `<details>`/`<dialog>`        | `open`                                                   | `openChange`         |

```marko
<let/text="">
<input value:=text>                       // fully controlled text input

<let/n=0>
<input type="number" value=n valueChange(v) { n = +v }>  // value is ALWAYS a string — cast it!

<let/picks=[]>
<input type="checkbox" value="a" checkedValue:=picks>    // arrays for multi-check

<let/sel="en">
<select value:=sel> <option value="en">EN</option> </select>
```

Foot-gun: `value:=numState` on a number input assigns **strings** into your state.
Use an explicit `valueChange` with a cast, or the refine shorthand `value:Number:=n`.

## 7. Custom tags & discovery

Resolution order for `<a-tag>` / `<ATag>`:

1. **Local variables** (PascalCase identifiers: imports, `<define>` vars).
2. **Relative `tags/` directories**, searched upward from the file:
   `tags/tag-name.marko`, `tags/tag-name/index.marko`, `tags/tag-name/tag-name.marko`
   (one level of non-tag "grouping" folders is crawled; dot-prefixed folders skipped).
3. **Installed packages** with a `marko.json` (`{ "exports": "./dist/tags" }`).

- A nested `tags/` inside a tag folder = private tags (facade pattern).
- `components/` directories signal the legacy class API — use `tags/` in Marko 6
  projects (mixing APIs in one file is a compile error; `// use tags` comment opts in).
- Lowercase local variables can't be tags directly — use `<${camelVar}/>` or rename
  to PascalCase.
- kebab-case file name ⇒ `<kebab-case>` tag; import shorthand: `import X from "<x>"`.

### Lazy loading

```marko
import HeavyChart from "<heavy-chart>" with { load: "visible#chart" }
<div#chart> <HeavyChart data=input.data/> </div>
```

Triggers: `render`, `visible<selector>[?rootMargin=…]`, `idle[?timeout=…]`,
`media(query)`, `on<Event><selector>`; combine with `|`. Static string only.
SSR HTML renders immediately; only the JS is deferred. Wrap in `<try>` +
`@placeholder` for client-render loading UI. Facade pattern: a tiny public tag
re-exporting the real one with `load: "render"` makes it always-lazy.

## 8. Reactivity & state rules

- **Assignment-based**: only assigning to a `<let>` var (or through a change
  handler) triggers updates, and only when the value is `!==` the old one.
- **Reassign, never mutate**: `items.push(x)` updates nothing.

```marko
items = items.concat(item)                 // add
items = items.toSpliced(i, 1)              // remove
items = items.toSpliced(i, 1, updated)     // replace
user  = { ...user, clicks: user.clicks + 1 }
```

- Updates batch on a microtask; further updates before paint defer to the next
  frame (no infinite update loops). Don't expect synchronous DOM reads after
  assignment.
- **Serialization rule** (resumability): `<let>`/`<const>` state that reaches the
  client must be serializable — primitives, plain objects/arrays, `Date`, `Map`,
  `Set`, typed arrays, `URL`, and **functions/closures defined in `.marko` files**
  are fine; class instances, DOM nodes, and functions imported from arbitrary JS
  modules are not (dev explains at the offending spot).
- Render expressions should be pure — Marko may evaluate grouped expressions together.
- Per-item state lives _inside_ the loop (`<let>` under `<for by=…>`); hoist via the
  controllable pattern (`<let/done=todo.done valueChange(d) { todos = todos.toSpliced(i,1,{...todo,done:d}) }>`)
  only when a parent truly needs it.

## 9. Template API (server & client entry points)

```js
import Template from "./page.marko";

// SERVER (html build): stream or buffer
for await (const chunk of Template.render({ name: "x" })) res.write(chunk);
Template.render(input).pipe(res); // Node writable
new Response(Template.render(input).toReadable()); // WHATWG stream
const html = await Template.render(input); // buffered (loses streaming)
Template.render(input).toString(); // sync; throws if anything async

// CLIENT (dom build): mount and control
const inst = Template.mount(input, document.body, "beforeend");
inst.update(newInput);
inst.value;
inst.destroy();
```

`input.$global` is stripped and becomes `$global` everywhere. Known keys:
`signal` (abort SSR), `cspNonce`, `renderId` (isolate multiple SSR segments),
`runtimeId` (isolate multiple runtimes), `serializedGlobals` (choose which
`$global` props reach the client). `render()` exists only in the server build,
`mount()` only in the client build (each throws in the other).

## 10. Best practices

- Derive, don't effect: `<const>` over `<script>`+`<let>` mirrors. Reach for
  `<script>` only for real side effects, `<lifecycle>` only for imperative libraries.
- Prefer controllable (`value`/`valueChange`/`:=`) over state mirroring for
  parent-child sync; pass callback props (`input.onSelect?.(x)`) instead of an
  event system. The same applies to native inputs: sync values with change
  handlers, not `onInput`/`onChange` listeners — the change handler names the
  value's owner.
- Forward attributes with spread: `export interface Input extends Marko.HTML.Button {}`
  then `<button ...input>` — handlers ride along.
- Static, non-interactive markup is free; ship less JS by keeping expressions
  static, using `static const` for constants, `<show>` for toggles of heavy markup,
  and lazy `load` imports for heavy widgets.
- Streaming: put slow data behind `<await>` inside `<try>`+`@placeholder` so the
  shell flushes immediately; size placeholders to avoid layout shift; watch out for
  buffering proxies (nginx `proxy_buffering off`, gzip `Z_PARTIAL_FLUSH`).
- Keep a feature's markup/style/state together; split tags for readability freely
  (no bundle cost).

## 11. Foot-gun quick list (ranked)

1. Mutating state in place (`push`/`splice`/prop assignment) — reassign instead.
2. React JSX-isms: `{expr}` interpolation, `className`, `key=`, `style={{ }}`,
   `onClick={fn}`, `value+onChange`. Marko: `${expr}`, `class`, `by=`, `style={ }`,
   `onClick() {}` / `onClick=fn`, `value:=x`.
3. Marko 5-isms: `class {}` blocks, `state`, `on-click("method")` string handlers,
   `$ scriptlets`, `<await-reorderer>`, `out.global`, `renderBody`. All removed or
   renamed (`input.content`, `$global`).
4. `<let name=0>` instead of `<let/name=0>` — the var goes after a slash.
5. `<if(cond)>` instead of `<if=cond>`.
6. Placing `@placeholder`/`@catch` on `<await>` — they belong on the wrapping `<try>`.
7. Treating `value=` on inputs as a live binding — it's the default; use `:=` /
   `*Change` to control.
8. Number inputs: `value:=n` stores strings — cast in `valueChange` (`n = +v`).
9. Expecting `<let/x=input.x>` to follow later `input.x` changes — it won't unless
   controllable (`<let/x:=input.x>`).
10. Non-serializable state (class instances, DOM nodes, imported closures).
11. Assuming scoped styles — `<style>` is global; use `<style/styles>` CSS modules.
12. Element ref used as a value (`el.focus()`) — refs are getter functions:
    `el().focus()`, client-side only.
13. Reading tag params outside the tag body, or from attribute tags.
14. `aria-*` enumerated attributes passed booleans — pass `"true"`/`"false"` strings.
15. Effects for derivable data; forgetting `$signal` cleanup in real effects.
16. `<script>` treated as a plain HTML script (it's a reactive client effect;
    use `<html-script>` for the real thing).
17. Writing root-level text in concise mode without `--` fences (parses as tags).
18. `by="id"` used with `in=`/`to=`/`until=` (string form is `of=`-only).
19. Expecting synchronous DOM updates after assignment (batched on microtask).
20. `$signal` referenced in server-rendered expression positions (client-only).
