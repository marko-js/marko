# Render `{"tag":"div","title":"a"}`
```html
<div
  title="a"
/>
<button>
  0
</button>
```

# Update `{"tag":"span","title":"bb"}`
```html
<span
  title="bb"
/>
<button>
  0
</button>
```
## Change
```
INSERT: span
REMOVE: span + div
UPDATE: span[title] null => "bb"
```

# Update
```js
document.querySelector("[title]").click();
```
```html
<span
  title="bb"
/>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "0" => "2"
```
