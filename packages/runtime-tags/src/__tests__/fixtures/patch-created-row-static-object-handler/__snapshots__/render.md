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
<p>
  0
</p>
```
## Change
```
INSERT: button
INSERT: button:nth-of-type(1) + button
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
<p>
  2
</p>
```
## Change
```
UPDATE: p::text "0" => "2"
```
