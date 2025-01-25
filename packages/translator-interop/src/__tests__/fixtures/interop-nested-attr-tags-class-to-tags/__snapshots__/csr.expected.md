# Render
```html
<button
  id="tags"
>
  0
</button>
<div>
  <button
    id="class"
  >
    0
  </button>
</div>
```

# Mutations
```
INSERT #text0, #text1, #text2, button, div, #text3, #text4, #text5
INSERT div/#text1
INSERT div/#text2
INSERT div/button
INSERT div/button/#text
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
<div>
  <button
    id="class"
  >
    0
  </button>
</div>
```

# Mutations
```
UPDATE button/#text "0" => "1"
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
<div>
  <button
    id="class"
  >
    1
  </button>
</div>
```

# Mutations
```
INSERT div/#text0
INSERT div/#text3
REMOVE #text after div/#text3
REMOVE #text after div/#text3
REMOVE button after div/#text3
REMOVE #text after div/#text3
REMOVE #text after div/#text3
INSERT div/#text1
INSERT div/#text2
INSERT div/button
INSERT div/button/#text
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
<div>
  <button
    id="class"
  >
    1
  </button>
</div>
```

# Mutations
```
UPDATE button/#text "1" => "2"
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
<div>
  <button
    id="class"
  >
    2
  </button>
</div>
```

# Mutations
```
INSERT div/#text0
INSERT div/#text3
REMOVE #text after div/#text3
REMOVE #text after div/#text3
REMOVE button after div/#text3
REMOVE #text after div/#text3
REMOVE #text after div/#text3
INSERT div/#text1
INSERT div/#text2
INSERT div/button
INSERT div/button/#text
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
<div>
  <button
    id="class"
  >
    2
  </button>
</div>
```

# Mutations
```
UPDATE button/#text "2" => "3"
```