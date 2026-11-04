# Render `{"wrap":false,"rows":[{"id":1,"label":"a"}]}`
```html
<div>
  <b>
    a
  </b>
</div>
```

# Update `{"wrap":true,"rows":[{"id":1,"label":"b"},{"id":2,"label":"c"}]}`
```html
<button
  class="toggle"
>
  toggle
</button>
<b>
  b
</b>
<button
  class="toggle"
>
  toggle
</button>
<b>
  c
</b>
```
## Change
```
INSERT: button
REMOVE: b:nth-of-type(1) + div
INSERT: b:nth-of-type(1) + button
INSERT: button:nth-of-type(1) + b
INSERT: button:nth-of-type(2) + b
UPDATE: b:nth-of-type(1)::text " " => "b"
UPDATE: b:nth-of-type(2)::text " " => "c"
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
REMOVE: button:nth-of-type(1) + b
REMOVE: button:nth-of-type(2) + b
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
<b>
  b
</b>
<button
  class="toggle"
>
  toggle
</button>
<b>
  c
</b>
```
## Change
```
INSERT: button:nth-of-type(1) + b
INSERT: button:nth-of-type(2) + b
UPDATE: b:nth-of-type(1)::text " " => "b"
UPDATE: b:nth-of-type(2)::text " " => "c"
```

# Update `{"wrap":true,"rows":[{"id":1,"label":"d"},{"id":2,"label":"e"}]}`
```html
<button
  class="toggle"
>
  toggle
</button>
<b>
  d
</b>
<button
  class="toggle"
>
  toggle
</button>
<b>
  e
</b>
```
## Change
```
UPDATE: b:nth-of-type(1)::text "b" => "d"
UPDATE: b:nth-of-type(2)::text "c" => "e"
```
