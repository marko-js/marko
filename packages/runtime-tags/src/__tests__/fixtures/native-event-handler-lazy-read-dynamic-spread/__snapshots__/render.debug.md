# Render
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:0
</div>
<div
  class="log"
/>
```

# Update
```js
c.querySelector(".bump").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
/>
```
## Change
```
UPDATE: .state::text@5 "0" => "1"
```

# Update
```js
c.querySelector(".a").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
>
  a(1)
</div>
```
## Change
```
UPDATE: .log::text "" => "a(1)"
```

# Update
```js
c.querySelector(".b").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
>
  a(1)b(1)
</div>
```
## Change
```
UPDATE: .log::text "a(1)" => "a(1)b(1)"
```

# Update
```js
c.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  :1
</div>
<div
  class="log"
>
  a(1)b(1)
</div>
```
## Change
```
UPDATE: .state::text "true" => ""
```

# Update
```js
c.querySelector(".a").click();
```

# Update
```js
c.querySelector(".b").click();
```

# Update
```js
c.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
>
  a(1)b(1)
</div>
```
## Change
```
UPDATE: .state::text@0 "" => "true"
```

# Update
```js
c.querySelector(".bump").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:2
</div>
<div
  class="log"
>
  a(1)b(1)
</div>
```
## Change
```
UPDATE: .state::text@5 "1" => "2"
```

# Update
```js
c.querySelector(".a").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:2
</div>
<div
  class="log"
>
  a(1)b(1)a(2)
</div>
```
## Change
```
UPDATE: .log::text "a(1)b(1)" => "a(1)b(1)a(2)"
```

# Update
```js
c.querySelector(".b").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="bump"
>
  bump
</button>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
<div
  class="state"
>
  true:2
</div>
<div
  class="log"
>
  a(1)b(1)a(2)b(2)
</div>
```
## Change
```
UPDATE: .log::text "a(1)b(1)a(2)" => "a(1)b(1)a(2)b(2)"
```
