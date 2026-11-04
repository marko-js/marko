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
INSERT: .open + em
UPDATE: em::text@2 "" => "1"
UPDATE: em::text@2 "0" => "1"
UPDATE: em::text@0 "" => "a"
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
