# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<section>
  <button>
    clear
  </button>
  <input
    value="b"
  />
  <input
    value="b"
  />
</section>
```
## Change
```
INSERT: section
UPDATE: section > input:nth-of-type(1)[value] null => "b"
UPDATE: section > input:nth-of-type(2)[value] null => "b"
```

# Update
```js
for (const e of d.querySelectorAll("section input")) {
e.value = "typed";
e.dispatchEvent(new d.defaultView.Event("input", { bubbles: true }));
}
```
## Console
```
LOG "change" "typed" "b"
LOG "change" "typed" "b"
```

# Update `{"show":true,"label":"c"}`
