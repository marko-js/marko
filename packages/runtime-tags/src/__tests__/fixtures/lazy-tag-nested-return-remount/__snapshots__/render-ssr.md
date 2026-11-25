# Render
```html
<button
  class="toggle"
>
  toggle
</button>
```

# Update
```js
document.querySelector(".toggle").click();
```

# Update
```js
document.querySelector(".toggle").click();
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<p>
  focused 0
</p>
<span>
  x
</span>
<button
  class="focus"
>
  focus
</button>
```
## Change
```
INSERT: p, span, .focus
```

# Update
```js
document.querySelector(".focus").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<p>
  focused 1
</p>
<span>
  x
</span>
<button
  class="focus"
>
  focus
</button>
```
## Change
```
UPDATE: p::text@8 "0" => "1"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: button
REMOVE: p
REMOVE: span
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<p>
  focused 0
</p>
<span>
  x
</span>
<button
  class="focus"
>
  focus
</button>
```
## Change
```
INSERT: p, span, .focus
```

# Update
```js
document.querySelector(".focus").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<p>
  focused 1
</p>
<span>
  x
</span>
<button
  class="focus"
>
  focus
</button>
```
## Change
```
UPDATE: p::text@8 "0" => "1"
```
