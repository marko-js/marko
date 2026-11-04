# Render `{"card":false,"label":"a","tag":"x"}`
```html
<span
  label="x"
>
  <em>
    a
  </em>
</span>
```

# Update `{"card":true,"label":"b","tag":"y"}`
```html
<button
  class="toggle"
>
  t
</button>
<p>
  y
  <em>
    b
  </em>
</p>
```
## Change
```
INSERT: .toggle, p
REMOVE: p + span
UPDATE: p::text "" => "y"
INSERT: p::text + em
UPDATE: p > em::text " " => "b"
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
  t
</button>
<p>
  y
</p>
```
## Change
```
REMOVE: p::text + em
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
  t
</button>
<p>
  y
  <em>
    b
  </em>
</p>
```
## Change
```
INSERT: p::text + em
UPDATE: p > em::text " " => "b"
```

# Update `{"card":true,"label":"c","tag":"z"}`
```html
<button
  class="toggle"
>
  t
</button>
<p>
  z
  <em>
    c
  </em>
</p>
```
## Change
```
UPDATE: p::text "y" => "z"
UPDATE: p > em::text "b" => "c"
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
  t
</button>
<p>
  z
</p>
```
## Change
```
REMOVE: p::text + em
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
  t
</button>
<p>
  z
  <em>
    c
  </em>
</p>
```
## Change
```
INSERT: p::text + em
UPDATE: p > em::text " " => "c"
```
