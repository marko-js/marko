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
<i>
  1
</i>
<button
  class="t"
>
  t
</button>
<p>
  b1
</p>
<i>
  1
</i>
<button
  class="t"
>
  t
</button>
<button
  class="n"
>
  +
</button>
```
## Change
```
INSERT: p, i, button, p, i, button
UPDATE: p:nth-of-type(1)::text " " => "x1"
UPDATE: p:nth-of-type(2)::text " " => "b1"
UPDATE: i:nth-of-type(1)::text " " => "1"
UPDATE: i:nth-of-type(2)::text " " => "1"
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  x2
</p>
<i>
  2
</i>
<button
  class="t"
>
  t
</button>
<p>
  b2
</p>
<i>
  2
</i>
<button
  class="t"
>
  t
</button>
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
UPDATE: i:nth-of-type(1)::text "1" => "2"
UPDATE: i:nth-of-type(2)::text "1" => "2"
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
REMOVE: i
REMOVE: button
REMOVE: p
REMOVE: i
REMOVE: button
```

# Update `{"show":true,"y":"d"}`
```html
<p>
  x2
</p>
<i>
  2
</i>
<button
  class="t"
>
  t
</button>
<p>
  d2
</p>
<i>
  2
</i>
<button
  class="t"
>
  t
</button>
<button
  class="n"
>
  +
</button>
```
## Change
```
INSERT: p, i, button, p, i, button
UPDATE: p:nth-of-type(1)::text " " => "x2"
UPDATE: p:nth-of-type(2)::text " " => "d2"
UPDATE: i:nth-of-type(1)::text " " => "2"
UPDATE: i:nth-of-type(2)::text " " => "2"
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  x3
</p>
<i>
  3
</i>
<button
  class="t"
>
  t
</button>
<p>
  d3
</p>
<i>
  3
</i>
<button
  class="t"
>
  t
</button>
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
UPDATE: i:nth-of-type(1)::text "2" => "3"
UPDATE: i:nth-of-type(2)::text "2" => "3"
```
