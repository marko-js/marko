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
  class="act"
>
  act
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
  class="act"
>
  act
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
c.querySelector(".act").click();
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
  class="act"
>
  act
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
>
  (1)
</div>
```
## Change
```
UPDATE: .log::text "" => "(1)"
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
  class="act"
>
  act
</button>
<div
  class="state"
>
  :1
</div>
<div
  class="log"
>
  (1)
</div>
```
## Change
```
UPDATE: .state::text "true" => ""
```

# Update
```js
c.querySelector(".act").click();
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
  class="act"
>
  act
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
>
  (1)
</div>
```
## Change
```
UPDATE: .state::text@0 "" => "true"
```

# Update
```js
c.querySelector(".act").click();
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
  class="act"
>
  act
</button>
<div
  class="state"
>
  true:1
</div>
<div
  class="log"
>
  (1)(1)
</div>
```
## Change
```
UPDATE: .log::text "(1)" => "(1)(1)"
```
