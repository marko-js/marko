# Render `{"show":false,"y":"a"}`
```html
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

# Update `{"show":true,"y":"b"}`
```html
<p>
  x1
</p>
<p>
  b1
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
INSERT: p, p
UPDATE: p:nth-of-type(1)::text " " => "x1"
UPDATE: p:nth-of-type(2)::text " " => "b1"
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  x2
</p>
<p>
  b2
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "x1" => "x2"
UPDATE: p:nth-of-type(2)::text "b1" => "b2"
```

# Update `{"show":false,"y":"c"}`
```html
<button
  class="n"
>
  +
</button>
```
## Change
```
REMOVE: p
REMOVE: p
```

# Update `{"show":true,"y":"d"}`
```html
<p>
  x2
</p>
<p>
  d2
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
INSERT: p, p
UPDATE: p:nth-of-type(1)::text " " => "x2"
UPDATE: p:nth-of-type(2)::text " " => "d2"
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  x3
</p>
<p>
  d3
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "x2" => "x3"
UPDATE: p:nth-of-type(2)::text "d2" => "d3"
```
