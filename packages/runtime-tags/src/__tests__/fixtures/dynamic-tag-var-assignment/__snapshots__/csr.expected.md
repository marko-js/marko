# Render
```html
<!---->
<button
  class="inc"
>
  1
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
INSERT #comment, button0, button1
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<!---->
<button
  class="inc"
>
  2
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
UPDATE button0/#text "1" => "2"
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<!---->
<button
  class="inc"
>
  3
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
UPDATE button0/#text "2" => "3"
```

# Render
```js
container.querySelector("button.reset").click();
```
```html
<!---->
<button
  class="inc"
>
  0
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
UPDATE button0/#text "3" => "0"
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<!---->
<button
  class="inc"
>
  1
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
UPDATE button0/#text "0" => "1"
```