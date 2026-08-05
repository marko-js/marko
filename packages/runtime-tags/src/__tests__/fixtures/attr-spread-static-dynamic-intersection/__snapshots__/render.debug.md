# Render
```html
<button
  class="foo"
  data-count="0"
>
  Click
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button
  class="foo"
  data-count="1"
>
  Click
</button>
```
## Change
```
UPDATE: .foo[data-count] "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button
  class="foo"
  data-count="2"
>
  Click
</button>
```
## Change
```
UPDATE: .foo[data-count] "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button
  class="foo"
  data-count="3"
>
  Click
</button>
```
## Change
```
UPDATE: .foo[data-count] "2" => "3"
```
