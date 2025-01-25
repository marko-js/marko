# Render
```html
<button
  id="class"
>
  0
</button>
<button
  data-parent="0"
  id="tags"
>
  0
</button>
```

# Mutations
```
INSERT #text0, button0, #text1, #text2, button1, #text3, #text4, #text5
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="class"
>
  0
</button>
<button
  data-parent="0"
  id="tags"
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
container.querySelector("#class").click();
```
```html
<button
  id="class"
>
  1
</button>
<button
  data-parent="1"
  id="tags"
>
  1
</button>
```

# Mutations
```
UPDATE button1[data-parent] "0" => "1"
UPDATE button0/#text "0" => "1"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="class"
>
  1
</button>
<button
  data-parent="1"
  id="tags"
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
container.querySelector("#class").click();
```
```html
<button
  id="class"
>
  2
</button>
<button
  data-parent="2"
  id="tags"
>
  2
</button>
```

# Mutations
```
UPDATE button1[data-parent] "1" => "2"
UPDATE button0/#text "1" => "2"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="class"
>
  2
</button>
<button
  data-parent="2"
  id="tags"
>
  3
</button>
```

# Mutations
```
UPDATE button1/#text "2" => "3"
```