# Render `{"show":false,"b":"m"}`
```html
<button
  class="l"
>
  l
</button>
```

# Update `{"show":true,"b":"m"}`
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
```
## Change
```
INSERT: p:nth-of-type(2) + p
UPDATE: p:nth-of-type(3)::text " " => "mr"
```

# Update `{"show":true,"b":"n"}`
```html
<i>
  n
</i>
<p>
  np
</p>
<p>
  nq
</p>
<p>
  nr
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
```
## Change
```
UPDATE: i::text "m" => "n"
UPDATE: p:nth-of-type(1)::text "mp" => "np"
UPDATE: p:nth-of-type(2)::text "mq" => "nq"
UPDATE: p:nth-of-type(3)::text "mr" => "nr"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<p>
  np
</p>
<p>
  nq
</p>
<p>
  nr
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
```
## Change
```
REMOVE: i
```
