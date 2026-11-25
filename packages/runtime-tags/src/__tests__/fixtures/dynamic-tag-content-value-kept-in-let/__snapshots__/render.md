# Render `{"on":true,"note":"a"}`
```html
<button
  class="toggle"
>
  toggle
</button>
<em>
  a
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
REMOVE: em
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
  a
</em>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "a"
```
