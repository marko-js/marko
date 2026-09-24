# Render `{"rest":{"title":"x"}}`
```html
<button
  id="pick"
/>
<div
  class="off"
  id="spread"
/>
<div
  class="off"
  id="before-spread"
  title="x"
/>
<button
  id="mode"
>
  mode
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  id="pick"
>
  A
</button>
<div
  class="off"
  id="spread"
/>
<div
  class="off"
  id="before-spread"
  title="x"
/>
<button
  id="mode"
>
  mode
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: #pick::text "" => "A"
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
  id="pick"
>
  B
</button>
<div
  class="off"
  id="spread"
/>
<div
  class="off"
  id="before-spread"
  title="x"
/>
<button
  id="mode"
>
  mode
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: #pick::text "A" => "B"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  id="pick"
>
  B
</button>
<div
  class="on"
  id="spread"
/>
<div
  class="on"
  id="before-spread"
  title="x"
/>
<button
  id="mode"
>
  mode
</button>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: #spread[class] "off" => "on"
UPDATE: #before-spread[class] "off" => "on"
```
