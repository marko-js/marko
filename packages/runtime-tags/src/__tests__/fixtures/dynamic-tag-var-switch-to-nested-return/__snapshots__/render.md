# Render
```html
<button
  class="inner"
>
  0
</button>
<button
  class="swap"
>
  swap
</button>
```

# Update
```js
document.querySelector("button.inner").click();
```
```html
<button
  class="inner"
>
  1
</button>
<button
  class="swap"
>
  swap
</button>
```
## Change
```
UPDATE: .inner::text "0" => "1"
```

# Update
```js
document.querySelector("button.swap").click();
```

# Update
```js
document.querySelector("button.inner").click();
```
```html
<button
  class="inner"
>
  2
</button>
<button
  class="swap"
>
  swap
</button>
```
## Change
```
UPDATE: .inner::text "1" => "2"
```

# Update
```js
document.querySelector("button.swap").click();
```
