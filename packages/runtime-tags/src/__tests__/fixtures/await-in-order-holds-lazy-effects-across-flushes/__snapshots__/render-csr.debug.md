# Render
```html
<div
  id="log"
/>
```

# Update
```js
document.querySelector(`.${id}`)?.click();
```

# Update
```html
<div
  id="log"
>
  [a]
</div>
<button
  class="a"
>
  a:0
</button>
```
## Change
```
INSERT: #log + .a
INSERT: #log::text("[a]")
```

# Update
```html
<div
  id="log"
>
  [a]
</div>
<button
  class="a"
>
  a:0
</button>
loading
```
## Change
```
INSERT: .a + ::text("loading")
```

# Update
```html
<div
  id="log"
>
  [a][b]
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
loading
```
## Change
```
INSERT: .a + .b
REMOVE: #log::text("[a]")
INSERT: #log::text("[a][b]")
```

# Update
```html
<div
  id="log"
>
  [a][b][c]
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
```
## Change
```
INSERT: .b + .c
REMOVE: .c + ::text("loading")
REMOVE: #log::text("[a][b]")
INSERT: #log::text("[a][b][c]")
```

# Update
```html
<div
  id="log"
>
  [a][b][c][d]
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
INSERT: .c + .d
REMOVE: #log::text("[a][b][c]")
INSERT: #log::text("[a][b][c][d]")
```

# Update
```js
document.querySelector(`.${id}`)?.click();
```
```html
<div
  id="log"
>
  [a][b][c][d]
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
  [a][b][c][d]
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
