# Render
```html
<button
  class="gated"
>
  gated
</button>
<button
  class="returned"
>
  returned
</button>
<button
  id="raise"
>
  raise
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
  class="gated"
>
  gated
</button>
<button
  class="returned"
>
  returned
</button>
<button
  id="raise"
>
  raise
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

# Update
```js
document.querySelector(selector).click();
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="gated"
>
  gated
</button>
<button
  class="returned"
>
  returned
</button>
<button
  id="raise"
>
  raise
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
  class="gated"
>
  gated
</button>
<button
  class="returned"
>
  returned
</button>
<button
  id="raise"
>
  raise
</button>
<p>
  12
</p>
```
## Change
```
UPDATE: p::text "2" => "12"
```
