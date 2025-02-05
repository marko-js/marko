# Render
```html
<!---->
<button
  class="once"
>
  0
</button>
<button
  class="twice"
>
  0
</button>
```

# Mutations
```
INSERT #comment, #text0, button0, #text1, button1
```

# Render
```js
container.querySelector("button.once").click();
```
```html
<!---->
<button
  class="once"
>
  1
</button>
<button
  class="twice"
>
  0
</button>
```

# Mutations
```
UPDATE button0/#text "0" => "1"
```

# Render
```js
container.querySelector("button.once").click();
```
```html
<!---->
<button
  class="once"
>
  1
</button>
<button
  class="twice"
>
  0
</button>
```


# Render
```js
container.querySelector("button.twice").click();
```
```html
<!---->
<button
  class="once"
>
  1
</button>
<button
  class="twice"
>
  1
</button>
```

# Mutations
```
UPDATE button1/#text "0" => "1"
```

# Render
```js
container.querySelector("button.twice").click();
```
```html
<!---->
<button
  class="once"
>
  1
</button>
<button
  class="twice"
>
  2
</button>
```

# Mutations
```
UPDATE button1/#text "1" => "2"
```

# Render
```js
container.querySelector("button.twice").click();
```
```html
<!---->
<button
  class="once"
>
  1
</button>
<button
  class="twice"
>
  2
</button>
```
