# Render
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  1
</button>
```

# Mutations
```
INSERT button0, button1, button2
```

# Render
```js
container.querySelector(".change").click();
```
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  1
</button>
```


# Render
```js
container.querySelector(".up").click();
```
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  1
</button>
```


# Render
```js
container.querySelector(".change").click();
```
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  2
</button>
```

# Mutations
```
UPDATE button2/#text "1" => "2"
```

# Render
```js
container.querySelector(".change").click();
```
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  3
</button>
```

# Mutations
```
UPDATE button2/#text "2" => "3"
```

# Render
```js
container.querySelector(".down").click();
```
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  3
</button>
```


# Render
```js
container.querySelector(".change").click();
```
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  2
</button>
```

# Mutations
```
UPDATE button2/#text "3" => "2"
```

# Render
```js
container.querySelector(".change").click();
```
```html
<button
  class="up"
>
  up
</button>
<button
  class="down"
>
  down
</button>
<button
  class="change"
>
  1
</button>
```

# Mutations
```
UPDATE button2/#text "2" => "1"
```