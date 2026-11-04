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
<p>
  b!1
</p>
```
## Change
```
INSERT: .open + p
UPDATE: p::text " " => "b!1"
```
## Console
```
LOG "const" "b!"
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
  b!2
</p>
```
## Change
```
UPDATE: p::text "b!1" => "b!2"
```

# Update `{"show":true,"label":"c"}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  c!2
</p>
```
## Change
```
UPDATE: p::text "b!2" => "c!2"
```
## Console
```
LOG "const" "c!"
```
