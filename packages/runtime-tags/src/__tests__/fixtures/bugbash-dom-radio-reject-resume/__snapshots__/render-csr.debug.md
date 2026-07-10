# Render
```html
<form>
  <input
    checked=""
    name="g"
    type="radio"
    value="a"
  />
  <input
    name="g"
    type="radio"
    value="b"
  />
</form>
<span>
  sel:a
</span>
```

# Update
```js
// jsdom has no CSS.escape; polyfill so the runtime's radio-group
// revert path (document.querySelectorAll + CSS.escape) can run.
const win = container.ownerDocument.defaultView;
win.CSS ||= {
  escape: s => s
};
container.querySelectorAll("input")[1].click();
```

# Update
```js
// The change handler rejected the change, so the controlled value is
// still "a" and radio a should still be checked. Write the live
// checked state into the DOM so the tracker snapshots it.
const [a, b] = Array.from(container.querySelectorAll("input"));
container.querySelector("span").textContent = `a:${a.checked} b:${b.checked}`;
```
```html
<form>
  <input
    checked=""
    name="g"
    type="radio"
    value="a"
  />
  <input
    name="g"
    type="radio"
    value="b"
  />
</form>
<span>
  a:true b:false
</span>
```
## Change
```
REMOVE: span > :is(::text("sel:"), ::text("a"))
INSERT: span::text("a:true b:false")
```
