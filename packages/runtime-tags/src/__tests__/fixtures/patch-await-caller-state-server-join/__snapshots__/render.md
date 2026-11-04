# Render `{"label":"a","prefix":"x"}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:x0
</p>
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
UPDATE: p::text@2 "x0" => "x1"
```

# Update `{"label":"b","prefix":"y"}`
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
UPDATE: p::text@0 "a" => "b"
UPDATE: p::text@2 "x1" => "y1"
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
UPDATE: p::text@0 "b" => "c"
UPDATE: p::text@2 "y2" => "z2"
```
