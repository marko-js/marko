# Render `{"b":"m"}`
```html
<section />
<p>
  mp
</p>
<p>
  mq
</p>
<button
  class="l"
>
  l
</button>
<button
  class="m"
>
  m
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<section />
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
  class="l"
>
  l
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
INSERT: p:nth-of-type(2) + p
UPDATE: p:nth-of-type(3)::text " " => "mr"
```

# Update `{"b":"n"}`
```html
<section />
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
  class="l"
>
  l
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "mp" => "np"
UPDATE: p:nth-of-type(2)::text "mq" => "nq"
UPDATE: p:nth-of-type(3)::text "mr" => "nr"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<section>
  <i>
    n
  </i>
</section>
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
  class="l"
>
  l
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
INSERT: section > i
UPDATE: section > i::text " " => "n"
```

# Update `{"b":"o"}`
```html
<section>
  <i>
    o
  </i>
</section>
<p>
  op
</p>
<p>
  oq
</p>
<p>
  or
</p>
<button
  class="l"
>
  l
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "np" => "op"
UPDATE: p:nth-of-type(2)::text "nq" => "oq"
UPDATE: p:nth-of-type(3)::text "nr" => "or"
UPDATE: section > i::text "n" => "o"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<section />
<p>
  op
</p>
<p>
  oq
</p>
<p>
  or
</p>
<button
  class="l"
>
  l
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
REMOVE: section > i
```

# Update `{"b":"w"}`
```html
<section />
<p>
  wp
</p>
<p>
  wq
</p>
<p>
  wr
</p>
<button
  class="l"
>
  l
</button>
<button
  class="m"
>
  m
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "op" => "wp"
UPDATE: p:nth-of-type(2)::text "oq" => "wq"
UPDATE: p:nth-of-type(3)::text "or" => "wr"
```
