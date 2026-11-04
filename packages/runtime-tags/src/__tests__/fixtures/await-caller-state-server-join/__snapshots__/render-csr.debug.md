# Render `{"label":"a","prefix":"x"}`
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
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:x1
</p>
```
## Change
```
INSERT: .open + p
UPDATE: p::text@2 "" => "x1"
UPDATE: p::text@0 "" => "a"
```

# Update `{"label":"b","prefix":"y"}`

# Update
```html
<button
  class="open"
>
  inc
</button>
<p>
  b:y1
</p>
```
## Change
```
UPDATE: p::text@2 "x1" => "y1"
UPDATE: p::text@0 "a" => "b"
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
  b:y2
</p>
```
## Change
```
UPDATE: p::text@2 "y1" => "y2"
```

# Update `{"label":"c","prefix":"z"}`

# Update
```html
<button
  class="open"
>
  inc
</button>
<p>
  c:z2
</p>
```
## Change
```
UPDATE: p::text@2 "y2" => "z2"
UPDATE: p::text@0 "b" => "c"
```
