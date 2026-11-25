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
<em>
  a
</em>
```
## Change
```
INSERT: em:nth-of-type(1), em:nth-of-type(2)
UPDATE: em:nth-of-type(1)::text " " => "a"
UPDATE: em:nth-of-type(2)::text " " => "a"
```
