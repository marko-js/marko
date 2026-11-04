# Render `{"label":"a"}`
```html
<button
  class="open"
>
  inc
</button>
<em>
  a:0
</em>
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
<em>
  a:1
</em>
```
## Change
```
UPDATE: em::text@2 "0" => "1"
```

# Update `{"label":"b"}`
```html
<button
  class="open"
>
  inc
</button>
<em>
  b:1
</em>
```
## Change
```
UPDATE: em::text@0 "a" => "b"
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
<em>
  b:2
</em>
```
## Change
```
UPDATE: em::text@2 "1" => "2"
```
