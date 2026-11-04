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
REMOVE: button:nth-of-type(1) + em
REMOVE: button:nth-of-type(2) + em
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
INSERT: button:nth-of-type(1) + em
INSERT: button:nth-of-type(2) + em
UPDATE: em:nth-of-type(1)::text@0 "" => "x"
UPDATE: em:nth-of-type(1)::text@2 "" => "a"
UPDATE: em:nth-of-type(2)::text@2 "" => "a"
UPDATE: em:nth-of-type(2)::text@0 "" => "y"
```
