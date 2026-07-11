# Marko 6 cheat sheet

Marko 6 = HTML superset. NOT JSX, NOT old Marko 4/5. `.marko` files are components; the filename is the tag name.

## Golden rules

1. Text interpolation: `${expr}` inside tag bodies. Attributes take raw JS after `=` with NO braces/quotes needed: `<div title=user.name data-n=1 + 1>` (parenthesize if the value contains `>`).
2. State: `<let/name=initial>` (slash then var name!). Update by plain assignment in an event handler: `count++`, `text = "hi"`. No setState, no hooks.
3. Derived values: `<const/total=items.length * price>` — auto-recomputes. Never use an effect to derive state.
4. NEVER mutate state in place. `items.push(x)` will NOT update the UI. Always reassign:
   - add: `items = items.concat(x)`
   - remove: `items = items.toSpliced(i, 1)`
   - update: `items = items.toSpliced(i, 1, { ...item, done: true })`
   - object: `user = { ...user, name }`
5. Events: method shorthand `onClick() { ... }` or `onClick=fn`. Handler gets the DOM event: `onInput(e) { q = e.target.value }`.
6. Two-way form binding: `value:=text` on `<input>`/`<textarea>`/`<select>`, `checked:=flag` on checkboxes. `<textarea value:=text/>` (value attr, not body).
7. Number inputs give STRINGS: cast in the handler — `<input type="number" value=n valueChange(v) { n = +v }>`.

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
<for|i| from=0 until=5> ${i} </for>                       // 0..4

<show=open> stays mounted, keeps state (form drafts) when hidden </show>
```

`<if>` destroys/rebuilds its content; `<show>` just hides it (use for toggles that must keep state).

## Async (server streaming)

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

`@placeholder`/`@catch` go on `<try>`, never on `<await>`.

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

- Repeated attr tags (many `<@tab ...>`) arrive as the SINGULAR prop `input.tab`, which is iterable but NOT an array: `input.tab[i]` and `input.tab.length` are undefined. To index or count, spread first: `<const/tabs=[...input.tab || []]>` then `tabs[active]`/`tabs.length`. Looping directly is fine: `<for|tab| of=input.tab>`.
- Conditional attrs: `false`/`null` attrs are omitted from HTML. `aria-selected` etc. want strings: `aria-selected=(i === active && "true")`.
- `class=` / `style=` accept strings, objects, arrays: `class=["btn", { active }]`, `style={ color }` (single braces).

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

## DON'T (these are errors or silently wrong)

| Wrong (React/Vue/Marko5 habit) | Right |
|---|---|
| `{expr}` in markup, `className`, `key=`, `style={{...}}` | `${expr}`, `class`, `by=` on `<for>`, `style={...}` |
| `onClick={() => ...}` / `@click` / `on-click("name")` | `onClick() { ... }` |
| `const [x, setX] = useState()` / `state` / `class {}` block | `<let/x=0>` then `x = 1` |
| `$ const y = x * 2;` (scriptlets are removed) | `<const/y=x * 2>` |
| `<let x=0>` | `<let/x=0>` |
| `<if(cond)>` | `<if=cond>` |
| `items.push(x)` | `items = items.concat(x)` |
| `input.renderBody` | `input.content` |
| `<await>` with `@placeholder`/`@catch` | wrap in `<try>` |
| `el.focus()` on a ref | `el().focus()` inside `<script>`/handler |
| `input.tab[0]` / `input.tab.length` | `[...input.tab || []]` first (attr tags are iterables, not arrays) |
