# Render
```html
<!---->
<!---->
<!---->
<button>
  click
</button>
<span>
  0
</span>
<!---->
<!---->
<!---->
<button
  id="increment"
>
  click
</button>
```

# Mutations
```
INSERT #comment0, #comment1, #comment2, button0, span, #comment3, #comment4, #comment5, button1
```

# Render
```js
container.querySelector("#increment").click();
```
```html
<!---->
<!---->
<!---->
<button>
  click
</button>
<span>
  1
</span>
<!---->
<!---->
<!---->
<button
  id="increment"
>
  click
</button>
```

# Mutations
```
UPDATE span/#text "0" => "1"
```

# Render
```js
container.querySelector("#increment").click();
```
```html
<!---->
<!---->
<!---->
<button>
  click
</button>
<span>
  2
</span>
<!---->
<!---->
<!---->
<button
  id="increment"
>
  click
</button>
```

# Mutations
```
UPDATE span/#text "1" => "2"
```

# Render
```js
container.querySelector("#increment").click();
```
```html
<!---->
<!---->
<!---->
<button>
  click
</button>
<span>
  3
</span>
<!---->
<!---->
<!---->
<button
  id="increment"
>
  click
</button>
```

# Mutations
```
UPDATE span/#text "2" => "3"
```