# Render `{"x":"a","y":"p"}`
```html
<button
  class="c"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<p>
  0:a
</p>
<p>
  p:a
</p>
<button
  class="c"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
INSERT: p
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(1)::text " " => "0:a"
UPDATE: p:nth-of-type(2)::text " " => "p:a"
```

# Update `{"x":"b","y":"q"}`
```html
<p>
  0:b
</p>
<p>
  q:b
</p>
<button
  class="c"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "0:a" => "0:b"
UPDATE: p:nth-of-type(2)::text "p:a" => "q:b"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<p>
  1:b
</p>
<p>
  q:b
</p>
<button
  class="c"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "0:b" => "1:b"
```

# Update `{"x":"c","y":"r"}`
```html
<p>
  1:c
</p>
<p>
  r:c
</p>
<button
  class="c"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "1:b" => "1:c"
UPDATE: p:nth-of-type(2)::text "q:b" => "r:c"
```
