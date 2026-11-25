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
INSERT: #log::text("[a]")
INSERT: .a
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
INSERT: ::text("loading")
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
REMOVE: #log::text("[a]")
INSERT: #log::text("[a][b]")
INSERT: .b
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
REMOVE: ::text("loading")
REMOVE: #log::text("[a][b]")
INSERT: #log::text("[a][b][c]")
INSERT: .c
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
REMOVE: #log::text("[a][b][c]")
INSERT: #log::text("[a][b][c][d]")
INSERT: .d
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
