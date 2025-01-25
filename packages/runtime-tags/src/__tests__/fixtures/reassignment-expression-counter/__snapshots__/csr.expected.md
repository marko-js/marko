# Render
```html
<button
  id="addTwo"
>
  0
</button>
<button
  id="triple"
>
  0
</button>
<button
  id="cube"
>
  0
</button>
```

# Mutations
```
INSERT button0, button1, button2
```

# Render
```js
container.querySelector("#addTwo").click();
```
```html
<button
  id="addTwo"
>
  2
</button>
<button
  id="triple"
>
  2
</button>
<button
  id="cube"
>
  2
</button>
```

# Mutations
```
UPDATE button0/#text "0" => "2"
UPDATE button1/#text "0" => "2"
UPDATE button2/#text "0" => "2"
```

# Render
```js
container.querySelector("#triple").click();
```
```html
<button
  id="addTwo"
>
  6
</button>
<button
  id="triple"
>
  6
</button>
<button
  id="cube"
>
  6
</button>
```

# Mutations
```
UPDATE button0/#text "2" => "6"
UPDATE button1/#text "2" => "6"
UPDATE button2/#text "2" => "6"
```

# Render
```js
container.querySelector("#cube").click();
```
```html
<button
  id="addTwo"
>
  216
</button>
<button
  id="triple"
>
  216
</button>
<button
  id="cube"
>
  216
</button>
```

# Mutations
```
UPDATE button0/#text "6" => "216"
UPDATE button1/#text "6" => "216"
UPDATE button2/#text "6" => "216"
```