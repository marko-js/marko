# Render `{"on":true,"note":"a","items":["x","y"]}`
```html
<button
  class="toggle"
>
  toggle
</button>
<em>
  x a
</em>
<button
  class="toggle"
>
  toggle
</button>
<em>
  y a
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
  x a
</em>
<button
  class="toggle"
>
  toggle
</button>
<em>
  y a
</em>
```
## Change
```
INSERT: em:nth-of-type(1)
UPDATE: em:nth-of-type(1)::text@0 "" => "x"
UPDATE: em:nth-of-type(1)::text@2 "" => "a"
INSERT: em:nth-of-type(2)
UPDATE: em:nth-of-type(2)::text@0 "" => "y"
UPDATE: em:nth-of-type(2)::text@2 "" => "a"
```
