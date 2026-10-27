# Render `{"show":false,"label":"a"}`
```html
<button
  class="open"
>
  inc
</button>
```

# Update
```js
document.querySelector("button.open").click();
```

# Update `{"show":true,"label":"b"}`
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
UPDATE: .child::text@0 "" => "b1"
```
## Console
```
LOG "await" "b"
```

# Update
```js
document.querySelector("button.open").click();
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
  b2:0
</button>
```
## Change
```
UPDATE: .child::text@0 "b1" => "b2"
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
  b2:1
</button>
```
## Change
```
UPDATE: .child::text@3 "0" => "1"
```
