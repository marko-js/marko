# Render `{"x":"p","y":"q","show":true}`
```html
<p>
  0p!
</p>
<div>
  s:0
</div>
<p>
  qp!
</p>
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
  1p!
</p>
<div>
  s:1
</div>
<p>
  qp!
</p>
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
UPDATE: p:nth-of-type(1)::text "0p!" => "1p!"
REMOVE: div:nth-of-type(1)::text("s:0")
INSERT: div:nth-of-type(1)::text("s:1")
```

# Update `{"x":"r","y":"s","show":true}`
```html
<p>
  1r!
</p>
<div>
  s:1
</div>
<p>
  sr!
</p>
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
UPDATE: p:nth-of-type(2)::text "qp!" => "sr!"
UPDATE: p:nth-of-type(1)::text "1p!" => "1r!"
REMOVE: div:nth-of-type(2)::text("s:q")
INSERT: div:nth-of-type(2)::text("s:s")
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  2r!
</p>
<div>
  s:2
</div>
<p>
  sr!
</p>
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
UPDATE: p:nth-of-type(1)::text "1r!" => "2r!"
REMOVE: div:nth-of-type(1)::text("s:1")
INSERT: div:nth-of-type(1)::text("s:2")
```

# Update `{"x":"t","y":"u","show":true}`
```html
<p>
  2t!
</p>
<div>
  s:2
</div>
<p>
  ut!
</p>
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
UPDATE: p:nth-of-type(2)::text "sr!" => "ut!"
UPDATE: p:nth-of-type(1)::text "2r!" => "2t!"
REMOVE: div:nth-of-type(2)::text("s:s")
INSERT: div:nth-of-type(2)::text("s:u")
```
