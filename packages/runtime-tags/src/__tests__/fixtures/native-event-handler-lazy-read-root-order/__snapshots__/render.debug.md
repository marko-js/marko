# Render
```html
<button
  class="h0"
>
  h0
</button>
<button
  class="e"
>
  e
</button>
<button
  class="h3"
>
  h3
</button>
<div />
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="h0"
>
  h0
</button>
<button
  class="e"
>
  e
</button>
<button
  class="h3"
>
  h3
</button>
<div>
  1
</div>
```
## Change
```
UPDATE: div::text "" => "1"
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
  class="h0"
>
  h0
</button>
<button
  class="e"
>
  e
</button>
<button
  class="h3"
>
  h3
</button>
<div>
  {"flag":1,"todo":{"id":1}}
</div>
```
## Change
```
UPDATE: div::text "1" => "{\"flag\":1,\"todo\":{\"id\":1}}"
```
