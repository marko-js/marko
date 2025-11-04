# Render
```html
<!---->
<span
  class="A"
>
  body content
</span>
<!---->
```

# Mutations
```
INSERT #comment0, span, #comment1
```

# Render
```js
container.querySelector(".A").click();
```
```html
<!---->
<div
  class="A"
>
  body content
</div>
<!---->
```

# Mutations
```
INSERT div
REMOVE span after div
INSERT div/#text
UPDATE div[class] null => "A"
```

# Render
```js
container.querySelector(".A").click();
```
```html
<!---->
<span
  class="A"
>
  body content
</span>
<!---->
```

# Mutations
```
INSERT span
REMOVE div after span
INSERT span/#text
UPDATE span[class] null => "A"
```