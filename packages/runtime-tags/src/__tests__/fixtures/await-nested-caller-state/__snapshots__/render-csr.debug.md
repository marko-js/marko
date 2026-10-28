# Render `{"label":"a"}`
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
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:1:11
</p>
```
## Change
```
INSERT: .open + p
UPDATE: p::text@4 "" => "11"
UPDATE: p::text@0 "" => "a"
UPDATE: p::text@2 "" => "1"
```

# Update `{"label":"b"}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  b:1:11
</p>
```
## Change
```
UPDATE: p::text@0 "a" => "b"
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
  inc
</button>
<p>
  b:2:12
</p>
```
## Change
```
UPDATE: p::text@4 "11" => "12"
UPDATE: p::text@2 "1" => "2"
```

# Update `{"label":"c"}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  c:2:12
</p>
```
## Change
```
UPDATE: p::text@0 "b" => "c"
```
