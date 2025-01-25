# Render
```html
<!---->
<p
  class="A"
>
  paragraph
</p>
<button />
```

# Mutations
```
INSERT #comment, p, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<p
  class="B"
>
  paragraph
</p>
<button />
```

# Mutations
```
UPDATE p[class] "A" => "B"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<p
  class="A"
>
  paragraph
</p>
<button />
```

# Mutations
```
UPDATE p[class] "B" => "A"
```