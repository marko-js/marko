# Render `{"show":false}`
```html
<button
  class="l"
>
  l
</button>
<button
  class="bb"
>
  b
</button>
```

# Update `{"show":true}`
```html
<i>
  m
</i>
<p>
  mp
</p>
<p>
  mq
</p>
<button
  class="t"
>
  t
</button>
<button
  class="l"
>
  l
</button>
<button
  class="bb"
>
  b
</button>
```
## Change
```
INSERT: i, .t
INSERT: i + p
INSERT: p:nth-of-type(1) + p
UPDATE: i::text " " => "m"
UPDATE: p:nth-of-type(1)::text " " => "mp"
UPDATE: p:nth-of-type(2)::text " " => "mq"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<i>
  m
</i>
<p>
  mp
</p>
<p>
  mq
</p>
<p>
  mr
</p>
<button
  class="t"
>
  t
</button>
<button
  class="l"
>
  l
</button>
<button
  class="bb"
>
  b
</button>
```
## Change
```
INSERT: p:nth-of-type(2) + p
UPDATE: p:nth-of-type(3)::text " " => "mr"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<i>
  m!
</i>
<p>
  m!p
</p>
<p>
  m!q
</p>
<p>
  m!r
</p>
<button
  class="t"
>
  t
</button>
<button
  class="l"
>
  l
</button>
<button
  class="bb"
>
  b
</button>
```
## Change
```
UPDATE: i::text "m" => "m!"
UPDATE: p:nth-of-type(1)::text "mp" => "m!p"
UPDATE: p:nth-of-type(2)::text "mq" => "m!q"
UPDATE: p:nth-of-type(3)::text "mr" => "m!r"
```

# Update `{"show":true}`

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<p>
  m!p
</p>
<p>
  m!q
</p>
<p>
  m!r
</p>
<button
  class="t"
>
  t
</button>
<button
  class="l"
>
  l
</button>
<button
  class="bb"
>
  b
</button>
```
## Change
```
REMOVE: i
```
