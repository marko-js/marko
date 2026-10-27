# Render `{"show":false}`
```html
<p>
  0
</p>
```

# Update `{"show":true}`
```html
<button
  class="r"
>
  x
</button>
<button
  class="r"
>
  x
</button>
<button
  class="r"
>
  x
</button>
<p>
  0
</p>
```
## Change
```
INSERT: button, button, button
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<button
  class="r"
>
  x
</button>
<button
  class="r"
>
  x
</button>
<button
  class="r"
>
  x
</button>
<p>
  3
</p>
```
## Change
```
UPDATE: p::text "0" => "3"
```
