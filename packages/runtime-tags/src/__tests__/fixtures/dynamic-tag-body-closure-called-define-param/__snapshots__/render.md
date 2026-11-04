# Render `{"on":true,"note":"a"}`
```html
<button
  class="toggle"
>
  toggle
</button>
<em>
  x a
</em>
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: .toggle + em
```

# Update
```js
for (const b of document.querySelectorAll(".toggle"))
b.click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<em>
  x a
</em>
```
## Change
```
INSERT: .toggle + em
UPDATE: em::text@2 "" => "a"
UPDATE: em::text@0 "" => "x"
```
