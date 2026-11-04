# Render `{"label":"a"}`
```html
<button
  class="open"
>
  inc
</button>
<p>
  a:0
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
  a:1
</p>
```
## Change
```
UPDATE: p::text@2 "0" => "1"
```

# Update `{"label":"b"}`
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
  b:2
</p>
```
## Change
```
UPDATE: p::text@2 "1" => "2"
```
