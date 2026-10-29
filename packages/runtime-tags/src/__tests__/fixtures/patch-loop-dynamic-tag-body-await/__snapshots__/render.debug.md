# Render `{"rows":[{"id":1,"card":true,"label":"a","p":{}},{"id":2,"card":false,"label":"b","p":{}}]}`
```html
<button
  class="toggle"
>
  toggle
</button>
<b>
  a x
</b>
<div>
  <b>
    b x
  </b>
</div>
```

# Update `{"rows":[{"id":1,"card":true,"label":"c","p":{"value":"y"}},{"id":2,"card":false,"label":"d","p":{"value":"y"}},{"id":3,"card":true,"label":"e","p":{"value":"y"}}]}`
```html
<button
  class="toggle"
>
  toggle
</button>
<b>
  c y
</b>
<div>
  <b>
    d y
  </b>
</div>
<button
  class="toggle"
>
  toggle
</button>
<b>
  e y
</b>
```
## Change
```
REMOVE: button
REMOVE: b
REMOVE: div
INSERT: button, b
INSERT: b:nth-of-type(1) + div
INSERT: div + button
INSERT: button:nth-of-type(2) + b
UPDATE: b:nth-of-type(2)::text@0 "" => "e"
UPDATE: b:nth-of-type(2)::text@2 "" => "y"
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
<div>
  <b>
    d y
  </b>
</div>
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
  c y
</b>
<div>
  <b>
    d y
  </b>
</div>
<button
  class="toggle"
>
  toggle
</button>
<b>
  e y
</b>
```
## Change
```
INSERT: button:nth-of-type(1) + b
INSERT: button:nth-of-type(2) + b
UPDATE: b:nth-of-type(1)::text@2 "" => "y"
UPDATE: b:nth-of-type(1)::text@0 "" => "c"
UPDATE: b:nth-of-type(2)::text@0 "" => "e"
UPDATE: b:nth-of-type(2)::text@2 "" => "y"
```
