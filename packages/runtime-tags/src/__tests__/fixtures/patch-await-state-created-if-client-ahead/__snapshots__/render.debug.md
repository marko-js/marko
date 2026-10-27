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

# Update
```js
document.querySelector("button.open").click();
```

# Update `{"show":true,"label":"b"}`
## Console
```
LOG "await" 2
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
  b2:0
</button>
```
## Change
```
INSERT: .open + .child
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
  b3:0
</button>
```
## Change
```
UPDATE: .child::text@0 "b2" => "b3"
```
## Console
```
LOG "await" 3
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
  b3:1
</button>
```
## Change
```
UPDATE: .child::text@3 "0" => "1"
```
