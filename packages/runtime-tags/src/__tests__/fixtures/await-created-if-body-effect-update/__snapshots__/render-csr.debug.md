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
  b
</p>
<em>
  b:1
</em>
```
## Change
```
INSERT: .open + p
UPDATE: p::text " " => "b"
INSERT: p + em
UPDATE: em::text@2 "" => "1"
UPDATE: em::text@0 "" => "b"
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
<p>
  b
</p>
```
## Change
```
REMOVE: p + em
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
  b
</p>
<em>
  b:3
</em>
```
## Change
```
INSERT: p + em
UPDATE: em::text@2 "" => "3"
UPDATE: em::text@0 "" => "b"
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
  c
</p>
<em>
  c:3
</em>
```
## Change
```
UPDATE: p::text "b" => "c"
UPDATE: em::text@0 "b" => "c"
```
## Console
```
LOG "await" "c"
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
  c
</p>
```
## Change
```
REMOVE: p + em
```
