# Render `{"items":[{"id":"a","v":1}]}`
```html
<button
  class="r"
>
  a
</button>
<p>
  0
</p>
```

# Update `{"items":[{"id":"b","v":2},{"id":"a","v":1}]}`
```html
<button
  class="r"
>
  b
</button>
<button
  class="r"
>
  a
</button>
<p>
  0
</p>
```
## Change
```
INSERT: button
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<button
  class="r"
>
  b
</button>
<button
  class="r"
>
  a
</button>
<p>
  102
</p>
```
## Change
```
UPDATE: p::text "0" => "102"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<button
  class="r"
>
  b
</button>
<button
  class="r"
>
  a
</button>
<p>
  303
</p>
```
## Change
```
UPDATE: p::text "102" => "303"
```
