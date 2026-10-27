# Render `{"x":1,"y":"a","row":{"a":7,"b":8}}`
```html
<p>
  1
</p>
<em>
  a1
</em>
<p>
  15
</p>
<em>
  a8
</em>
<button
  class="n"
>
  +
</button>
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  2
</p>
<em>
  a1
</em>
<p>
  15
</p>
<em>
  a8
</em>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "1" => "2"
```

# Update `{"x":2,"y":"b","row":{"a":7,"b":9}}`
```html
<p>
  3
</p>
<em>
  b2
</em>
<p>
  16
</p>
<em>
  b9
</em>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "a1" => "b2"
UPDATE: p:nth-of-type(2)::text "15" => "16"
UPDATE: em:nth-of-type(2)::text "a8" => "b9"
UPDATE: p:nth-of-type(1)::text "2" => "3"
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  4
</p>
<em>
  b2
</em>
<p>
  16
</p>
<em>
  b9
</em>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "3" => "4"
```

# Update `{"x":3,"y":"c","row":{"a":6,"b":9}}`
```html
<p>
  5
</p>
<em>
  c3
</em>
<p>
  15
</p>
<em>
  c9
</em>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "b2" => "c3"
UPDATE: p:nth-of-type(2)::text "16" => "15"
UPDATE: em:nth-of-type(2)::text "b9" => "c9"
UPDATE: p:nth-of-type(1)::text "4" => "5"
```
