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
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="focus"
>
  focus
</button>
```
## Change
```
INSERT: .toggle + .focus
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
REMOVE: .toggle + button
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
INSERT: .toggle + .focus
INSERT: .toggle + :is(p, span)
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
REMOVE: .toggle + p
REMOVE: .toggle + span
REMOVE: .toggle + button
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
INSERT: .toggle + .focus
INSERT: .toggle + :is(p, span)
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
