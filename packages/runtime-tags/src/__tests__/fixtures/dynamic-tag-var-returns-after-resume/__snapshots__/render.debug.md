# Render
```html
<button
  class="counter"
>
  0
</button>
<button
  class="doubled"
>
  2
</button>
```

# Update
```js
document.querySelector("button.counter").click();
```
```html
<button
  class="counter"
>
  1
</button>
<button
  class="doubled"
>
  2
</button>
```
## Change
```
UPDATE: .counter::text "0" => "1"
```

# Update
```js
document.querySelector("button.doubled").click();
```
```html
<button
  class="counter"
>
  1
</button>
<button
  class="doubled"
>
  4
</button>
```
## Change
```
UPDATE: .doubled::text "2" => "4"
```
