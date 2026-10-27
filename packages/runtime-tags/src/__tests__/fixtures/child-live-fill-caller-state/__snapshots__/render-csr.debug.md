# Render
```html
<button
  class="s"
>
  s
</button>
<button
  class="show"
>
  show
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
x!
<button
  class="s"
>
  s
</button>
<button
  class="show"
>
  show
</button>
```
## Change
```
INSERT: ::text("x!")
UPDATE: ::text " " => "x!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
x!!
<button
  class="s"
>
  s
</button>
<button
  class="show"
>
  show
</button>
```
## Change
```
UPDATE: ::text "x!" => "x!!"
```
