# Render `{"show":true,"p":"x"}`
```html
<span>
  a
</span>
<button
  class="mode"
>
  b
</button>
<button
  class="go"
>
  go
</button>
<button
  class="set"
>
  set
</button>
<p>
  none
</p>
```

# Update
```js
document.querySelector(".mode").click();
```
```html
<span>
  b
</span>
<button
  class="mode"
>
  b
</button>
<button
  class="go"
>
  go
</button>
<button
  class="set"
>
  set
</button>
<p>
  none
</p>
```
## Change
```
UPDATE: span::text "a" => "b"
```

# Update `{"show":true,"p":"y"}`

# Update
```js
document.querySelector(".set").click();
```
```html
<span>
  b
</span>
<button
  class="mode"
>
  b
</button>
<button
  class="go"
>
  go
</button>
<button
  class="set"
>
  set
</button>
<p>
  yb5
</p>
```
## Change
```
UPDATE: p::text "none" => "yb5"
```

# Update `{"show":false,"p":"z"}`
```html
<p>
  yb5
</p>
```
## Change
```
REMOVE: span
REMOVE: button
REMOVE: button
REMOVE: button
```

# Update `{"show":true,"p":"z"}`
```html
<span>
  a
</span>
<button
  class="mode"
>
  b
</button>
<button
  class="go"
>
  go
</button>
<button
  class="set"
>
  set
</button>
<p>
  yb5
</p>
```
## Change
```
INSERT: span, .mode, .go, .set
```

# Update
```js
document.querySelector(".go").click();
```
```html
<span>
  a
</span>
<button
  class="mode"
>
  b
</button>
<button
  class="go"
>
  go
</button>
<button
  class="set"
>
  set
</button>
<p>
  za[object PointerEvent]
</p>
```
## Change
```
UPDATE: p::text "yb5" => "za[object PointerEvent]"
```

# Update
```js
document.querySelector(".mode").click();
```
```html
<span>
  b
</span>
<button
  class="mode"
>
  b
</button>
<button
  class="go"
>
  go
</button>
<button
  class="set"
>
  set
</button>
<p>
  za[object PointerEvent]
</p>
```
## Change
```
UPDATE: span::text "a" => "b"
```

# Update
```js
document.querySelector(".set").click();
```
```html
<span>
  b
</span>
<button
  class="mode"
>
  b
</button>
<button
  class="go"
>
  go
</button>
<button
  class="set"
>
  set
</button>
<p>
  zb5
</p>
```
## Change
```
UPDATE: p::text "za[object PointerEvent]" => "zb5"
```
