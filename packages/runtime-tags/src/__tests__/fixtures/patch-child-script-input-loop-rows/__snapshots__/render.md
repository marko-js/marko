# Render `{"a":"x","b":"m"}`
```html
<div>
  s:m
</div>
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
```

# Update
```js
d.querySelector(selector).click();
```
```html
<div>
  s:m
</div>
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
```
## Change
```
INSERT: p:nth-of-type(2) + p
UPDATE: p:nth-of-type(3)::text " " => "mr"
```

# Update `{"a":"x","b":"n"}`
```html
<div>
  s:n
</div>
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
```
## Change
```
UPDATE: p:nth-of-type(1)::text "mp" => "np"
UPDATE: p:nth-of-type(2)::text "mq" => "nq"
UPDATE: p:nth-of-type(3)::text "mr" => "nr"
REMOVE: div::text("s:m")
INSERT: div::text("s:n")
```

# Update `{"a":"y","b":"n"}`
