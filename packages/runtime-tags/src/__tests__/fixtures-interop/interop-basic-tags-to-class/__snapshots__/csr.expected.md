# Render
```html
<button
  id="tags"
>
  0
</button>
<button
  data-parent="0"
  id="class"
>
  0
</button>
<!---->
```

# Mutations
```
INSERT button0, #text0, #text1, #comment
INSERT button1
INSERT button1/#text
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  1
</button>
<button
  data-parent="1"
  id="class"
>
  0
</button>
<!---->
```

# Mutations
```
UPDATE button0/#text "0" => "1"
UPDATE button1[data-parent] "0" => "1"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<button
  id="tags"
>
  1
</button>
<button
  data-parent="1"
  id="class"
>
  1
</button>
<!---->
```

# Mutations
```
UPDATE button1/#text "0" => "1"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  2
</button>
<button
  data-parent="2"
  id="class"
>
  1
</button>
<!---->
```

# Mutations
```
UPDATE button0/#text "1" => "2"
UPDATE button1[data-parent] "1" => "2"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<button
  id="tags"
>
  2
</button>
<button
  data-parent="2"
  id="class"
>
  2
</button>
<!---->
```

# Mutations
```
UPDATE button1/#text "1" => "2"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  3
</button>
<button
  data-parent="3"
  id="class"
>
  2
</button>
<!---->
```

# Mutations
```
UPDATE button0/#text "2" => "3"
UPDATE button1[data-parent] "2" => "3"
```