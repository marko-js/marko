# Render
```html
<button
  id="inc"
>
  1|1
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
INSERT button0, button1
```

# Render
```js
container.querySelector("#inc").click();
```
```html
<button
  id="inc"
>
  3|3
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
UPDATE button0/#text0 "1" => "3"
UPDATE button0/#text2 "1" => "3"
```

# Render
```js
container.querySelector("#inc").click();
```
```html
<button
  id="inc"
>
  5|5
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
UPDATE button0/#text0 "3" => "5"
UPDATE button0/#text2 "3" => "5"
```

# Render
```js
container.querySelector("#toggle").click();
```
```html
<button
  id="inc"
>
  5|5
</button>
<button
  id="toggle"
>
  toggle
</button>
```


# Render
```js
container.querySelector("#inc").click();
```
```html
<button
  id="inc"
>
  5|6
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
UPDATE button0/#text2 "5" => "6"
```

# Render
```js
container.querySelector("#inc").click();
```
```html
<button
  id="inc"
>
  5|7
</button>
<button
  id="toggle"
>
  toggle
</button>
```

# Mutations
```
UPDATE button0/#text2 "6" => "7"
```