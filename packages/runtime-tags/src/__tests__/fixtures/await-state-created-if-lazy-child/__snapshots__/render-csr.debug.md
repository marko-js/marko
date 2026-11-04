# Render `{"show":false,"label":"a"}`
```html
<button
  class="open"
>
  inc
</button>
```

# Update `{"show":true,"label":"b"}`

# Update
```js
document.querySelector("button.open").click();
```
## Console
```
LOG "await" 1
LOG "await" 1
```

# Update
```html
<button
  class="open"
>
  inc
</button>
<button
  class="child"
>
  b1:0
</button>
```
## Change
```
INSERT: .open + .child
```

# Update
```js
document.querySelector("button.child")?.click();
```
```html
<button
  class="open"
>
  inc
</button>
<button
  class="child"
>
  b1:1
</button>
```
## Change
```
UPDATE: .child::text@3 "0" => "1"
```
