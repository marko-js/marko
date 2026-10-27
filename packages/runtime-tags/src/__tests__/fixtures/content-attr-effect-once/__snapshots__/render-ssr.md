# Render `{"label":"a"}`
```html
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div>
  <em>
    a
  </em>
</div>
```
## Change
```
INSERT: button + div
UPDATE: div > em::text " " => "a"
```
## Console
```
LOG "child mount"
LOG "parent mount object" "a"
```
