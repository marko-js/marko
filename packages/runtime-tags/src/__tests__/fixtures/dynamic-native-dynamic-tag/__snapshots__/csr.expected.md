# Render
```html
<!---->
<span
  class="A"
>
  body content
</span>
<button />
```

# Mutations
```
INSERT #comment, span, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div
  class="A"
>
  body content
</div>
<button />
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
container.querySelector("button").click();
```
```html
<!---->
<span
  class="A"
>
  body content
</span>
<button />
```

# Mutations
```
INSERT span
REMOVE div after span
INSERT span/#text
UPDATE span[class] null => "A"
```