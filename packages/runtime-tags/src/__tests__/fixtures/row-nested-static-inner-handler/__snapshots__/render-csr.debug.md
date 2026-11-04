# Render `{"rows":[1]}`
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

# Update `{"rows":[1,2]}`
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
INSERT: button:nth-of-type(2) + :is(button, button)
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
<button
  class="r"
>
  x
</button>
<p>
  22
</p>
```
## Change
```
UPDATE: p::text "0" => "22"
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
<button
  class="r"
>
  x
</button>
<p>
  33
</p>
```
## Change
```
UPDATE: p::text "22" => "33"
```
