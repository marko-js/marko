# Render `{"x":"p","y":"q","show":true}`
```html
<p>
  0!p?0
</p>
<em>
  0p
</em>
<button
  class="m"
>
  m
</button>
<div>
  s:0
</div>
<p>
  q!p?0
</p>
<em>
  qp
</em>
<button
  class="m"
>
  m
</button>
<div>
  s:q
</div>
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
  1!p?0
</p>
<em>
  1p
</em>
<button
  class="m"
>
  m
</button>
<div>
  s:1
</div>
<p>
  q!p?0
</p>
<em>
  qp
</em>
<button
  class="m"
>
  m
</button>
<div>
  s:q
</div>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "0p" => "1p"
UPDATE: p:nth-of-type(1)::text "0!p?0" => "1!p?0"
REMOVE: div:nth-of-type(1)::text("s:0")
INSERT: div:nth-of-type(1)::text("s:1")
```

# Update `{"x":"r","y":"s","show":true}`
```html
<p>
  1!r?0
</p>
<em>
  1r
</em>
<button
  class="m"
>
  m
</button>
<div>
  s:1
</div>
<p>
  s!r?0
</p>
<em>
  sr
</em>
<button
  class="m"
>
  m
</button>
<div>
  s:s
</div>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text "qp" => "sr"
UPDATE: em:nth-of-type(1)::text "1p" => "1r"
UPDATE: p:nth-of-type(1)::text "1!p?0" => "1!r?0"
UPDATE: p:nth-of-type(2)::text "q!p?0" => "s!r?0"
REMOVE: div:nth-of-type(2)::text("s:q")
INSERT: div:nth-of-type(2)::text("s:s")
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  2!r?0
</p>
<em>
  2r
</em>
<button
  class="m"
>
  m
</button>
<div>
  s:2
</div>
<p>
  s!r?0
</p>
<em>
  sr
</em>
<button
  class="m"
>
  m
</button>
<div>
  s:s
</div>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "1r" => "2r"
UPDATE: p:nth-of-type(1)::text "1!r?0" => "2!r?0"
REMOVE: div:nth-of-type(1)::text("s:1")
INSERT: div:nth-of-type(1)::text("s:2")
```

# Update `{"x":"t","y":"u","show":true}`
```html
<p>
  2!t?0
</p>
<em>
  2t
</em>
<button
  class="m"
>
  m
</button>
<div>
  s:2
</div>
<p>
  u!t?0
</p>
<em>
  ut
</em>
<button
  class="m"
>
  m
</button>
<div>
  s:u
</div>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text "sr" => "ut"
UPDATE: em:nth-of-type(1)::text "2r" => "2t"
UPDATE: p:nth-of-type(1)::text "2!r?0" => "2!t?0"
UPDATE: p:nth-of-type(2)::text "s!r?0" => "u!t?0"
REMOVE: div:nth-of-type(2)::text("s:s")
INSERT: div:nth-of-type(2)::text("s:u")
```
