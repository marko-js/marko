# Render `{"n":0}`
```html
<button
  class="r"
>
  x
</button>
<p>
  0
</p>
```

# Update `{"n":1}`
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

# Update `{"n":2}`
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
  2
</p>
```
## Change
```
INSERT: button:nth-of-type(2) + button
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
  5
</p>
```
## Change
```
UPDATE: p::text "2" => "5"
```
