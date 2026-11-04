# Render `{"b":"m","items":["u"],"show":true}`
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
<i>
  m
</i>
<p>
  mu
</p>
<button
  class="l"
>
  l
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
<i>
  m
</i>
<p>
  mu
</p>
<button
  class="l"
>
  l
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
INSERT: p:nth-of-type(2) + p
UPDATE: p:nth-of-type(3)::text " " => "mr"
```

# Update `{"b":"n","items":["u"],"show":true}`
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
<i>
  n
</i>
<p>
  nu
</p>
<button
  class="l"
>
  l
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: i:nth-of-type(2)::text "m" => "n"
UPDATE: p:nth-of-type(4)::text "mu" => "nu"
UPDATE: i:nth-of-type(1)::text "m" => "n"
UPDATE: p:nth-of-type(1)::text "mp" => "np"
UPDATE: p:nth-of-type(2)::text "mq" => "nq"
UPDATE: p:nth-of-type(3)::text "mr" => "nr"
```

# Update
```js
document.querySelector(selector).click();
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
<i>
  n
</i>
<p>
  nu
</p>
<button
  class="l"
>
  l
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
REMOVE: i
```

# Update `{"b":"o","items":["v"],"show":false}`
```html
<p>
  op
</p>
<p>
  oq
</p>
<p>
  or
</p>
<p>
  ov
</p>
<button
  class="l"
>
  l
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
REMOVE: p:nth-of-type(3) + i
UPDATE: p:nth-of-type(4)::text "nu" => "ov"
UPDATE: p:nth-of-type(1)::text "np" => "op"
UPDATE: p:nth-of-type(2)::text "nq" => "oq"
UPDATE: p:nth-of-type(3)::text "nr" => "or"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<i>
  o
</i>
<p>
  op
</p>
<p>
  oq
</p>
<p>
  or
</p>
<p>
  ov
</p>
<button
  class="l"
>
  l
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
INSERT: i
UPDATE: i::text " " => "o"
```

# Update `{"b":"w","items":["v"],"show":true}`
```html
<i>
  w
</i>
<p>
  wp
</p>
<p>
  wq
</p>
<p>
  wr
</p>
<i>
  w
</i>
<p>
  wv
</p>
<button
  class="l"
>
  l
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
INSERT: p:nth-of-type(3) + i
UPDATE: p:nth-of-type(4)::text "ov" => "wv"
UPDATE: p:nth-of-type(1)::text "op" => "wp"
UPDATE: p:nth-of-type(2)::text "oq" => "wq"
UPDATE: p:nth-of-type(3)::text "or" => "wr"
UPDATE: i:nth-of-type(1)::text "o" => "w"
```
