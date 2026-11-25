# Render
```html
<div
  id="log"
/>
<button
  class="a"
>
  a:0
</button>
```

# Update
```html
<div
  id="log"
/>
<button
  class="a"
>
  a:0
</button>
<button
  class="b"
>
  b:0
</button>
loading
```
## Change
```
INSERT: .b
INSERT: .b::text("b:")
INSERT: .b::text("0")
INSERT: ::text("loading")
```

# Update
```js
document.querySelector(`.${id}`)?.click();
```

# Update
```html
<div
  id="log"
/>
<button
  class="a"
>
  a:0
</button>
<button
  class="b"
>
  b:0
</button>
<button
  class="c"
>
  c:0
</button>
```
## Change
```
REMOVE: ::text("loading")
INSERT: .c
INSERT: .c::text("c:")
INSERT: .c::text("0")
```

# Update
```html
<div
  id="log"
>
  [a][b][d][c]
</div>
<button
  class="a"
>
  a:0
</button>
<button
  class="b"
>
  b:0
</button>
<button
  class="c"
>
  c:0
</button>
<button
  class="d"
>
  d:0
</button>
```
## Change
```
INSERT: #log::text("[a]")
INSERT: #log::text("[a][b]")
INSERT: #log::text("[a][b][d]")
REMOVE: #log::text("[a]")
REMOVE: #log::text("[a][b]")
REMOVE: #log::text("[a][b][d]")
INSERT: #log::text("[a][b][d][c]")
INSERT: .d
INSERT: .d::text("d:")
INSERT: .d::text("0")
```

# Update
```js
document.querySelector(`.${id}`)?.click();
```
```html
<div
  id="log"
>
  [a][b][d][c]
</div>
<button
  class="a"
>
  a:1
</button>
<button
  class="b"
>
  b:0
</button>
<button
  class="c"
>
  c:0
</button>
<button
  class="d"
>
  d:0
</button>
```
## Change
```
UPDATE: .a::text@2 "0" => "1"
```

# Update
```js
document.querySelector(`.${id}`)?.click();
```
```html
<div
  id="log"
>
  [a][b][d][c]
</div>
<button
  class="a"
>
  a:1
</button>
<button
  class="b"
>
  b:0
</button>
<button
  class="c"
>
  c:0
</button>
<button
  class="d"
>
  d:1
</button>
```
## Change
```
UPDATE: .d::text@2 "0" => "1"
```
