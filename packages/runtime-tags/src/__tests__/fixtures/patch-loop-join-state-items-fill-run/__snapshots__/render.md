# Render `{"a":"x","b":"m"}`
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

# Update
```js
document.querySelector("button.l").click();
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

# Update `{"a":"x","b":"n"}`
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

# Update `{"a":"y","b":"n"}`
