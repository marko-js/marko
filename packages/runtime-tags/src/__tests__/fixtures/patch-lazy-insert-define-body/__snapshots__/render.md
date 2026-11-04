# Render `{"show":false,"label":"a"}`
```html
<button
  class="open"
>
  open
</button>
```

# Update `{"show":true,"label":"b"}`
```html
<button
  class="open"
>
  open
</button>
<button
  class="child"
>
  s:0
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

# Update
```html
<button
  class="open"
>
  open
</button>
<button
  class="child"
>
  s:0
</button>
<button
  class="child"
>
  c:0
</button>
```
## Change
```
INSERT: button:nth-of-type(2) + button
```

# Update
```js
document.querySelector("button.child")?.click();
```
```html
<button
  class="open"
>
  open
</button>
<button
  class="child"
>
  s:1
</button>
<button
  class="child"
>
  c:0
</button>
```
## Change
```
UPDATE: button:nth-of-type(2)::text@2 "0" => "1"
```
