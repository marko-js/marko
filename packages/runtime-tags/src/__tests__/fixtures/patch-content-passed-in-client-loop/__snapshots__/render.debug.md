# Render `{"label":"a"}`
```html
<button
  class="add"
>
  add
</button>
<p>
  <em>
    a
  </em>
</p>
```

# Update `{"label":"b"}`
```html
<button
  class="add"
>
  add
</button>
<p>
  <em>
    b
  </em>
</p>
```
## Change
```
UPDATE: p > em::text "a" => "b"
```

# Update
```js
d.querySelector("button.add").click();
```
```html
<button
  class="add"
>
  add
</button>
<p>
  <em>
    b
  </em>
</p>
<p>
  <em>
    b
  </em>
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + p
INSERT: p:nth-of-type(2) > em
UPDATE: p:nth-of-type(2) > em::text " " => "b"
```

# Update `{"label":"c"}`
```html
<button
  class="add"
>
  add
</button>
<p>
  <em>
    c
  </em>
</p>
<p>
  <em>
    c
  </em>
</p>
```
## Change
```
UPDATE: p:nth-of-type(1) > em::text "b" => "c"
UPDATE: p:nth-of-type(2) > em::text "b" => "c"
```
