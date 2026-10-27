# Render `{"x":1,"y":"a","z":5}`
```html
<p>
  6
</p>
<em>
  a1
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
  7
</p>
<em>
  a1
</em>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p::text "6" => "7"
```

# Update `{"x":2,"y":"b","z":6}`
```html
<p>
  9
</p>
<em>
  b2
</em>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: em::text "a1" => "b2"
UPDATE: p::text "7" => "9"
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  10
</p>
<em>
  b2
</em>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p::text "9" => "10"
```

# Update `{"x":3,"y":"c","z":7}`
```html
<p>
  12
</p>
<em>
  c3
</em>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: em::text "b2" => "c3"
UPDATE: p::text "10" => "12"
```
