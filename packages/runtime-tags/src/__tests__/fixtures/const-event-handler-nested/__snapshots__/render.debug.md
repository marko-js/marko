# Render
```html
<button
  class="add"
>
  +1
</button>
<button
  class="add"
>
  +2
</button>
<button
  class="inc"
>
  inc
</button>
<button
  class="toggle"
>
  toggle
</button>
<p>
  0
</p>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="add"
>
  +1
</button>
<button
  class="add"
>
  +2
</button>
<button
  class="inc"
>
  inc
</button>
<button
  class="toggle"
>
  toggle
</button>
<p>
  1
</p>
```
## Change
```
UPDATE: p::text "0" => "1"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="add"
>
  +1
</button>
<button
  class="add"
>
  +2
</button>
<button
  class="inc"
>
  inc
</button>
<button
  class="toggle"
>
  toggle
</button>
<p>
  2
</p>
```
## Change
```
UPDATE: p::text "1" => "2"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="add"
>
  +1
</button>
<button
  class="add"
>
  +2
</button>
<button
  class="toggle"
>
  toggle
</button>
<p>
  2
</p>
```
## Change
```
REMOVE: button:nth-of-type(2) + button
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="add"
>
  +1
</button>
<button
  class="add"
>
  +2
</button>
<button
  class="inc"
>
  inc
</button>
<button
  class="toggle"
>
  toggle
</button>
<p>
  2
</p>
```
## Change
```
INSERT: button:nth-of-type(2) + .inc
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="add"
>
  +1
</button>
<button
  class="add"
>
  +2
</button>
<button
  class="inc"
>
  inc
</button>
<button
  class="toggle"
>
  toggle
</button>
<p>
  3
</p>
```
## Change
```
UPDATE: p::text "2" => "3"
```
