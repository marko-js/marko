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

# Update
```html
<button
  class="open"
>
  inc
</button>
<p>
  b:1
</p>
```
## Change
```
INSERT: .open + p
UPDATE: p::text@2 "" => "1"
UPDATE: p::text@0 "" => "b"
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
<p>
  b:2
</p>
```
## Change
```
UPDATE: p::text@2 "1" => "2"
```

# Update `{"show":true,"label":"c"}`

# Update
```html
<button
  class="open"
>
  inc
</button>
<p>
  c:2
</p>
```
## Change
```
UPDATE: p::text@0 "b" => "c"
```
