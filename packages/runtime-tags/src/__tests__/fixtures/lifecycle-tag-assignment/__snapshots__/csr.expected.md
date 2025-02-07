# Render
```html
<div>
  x=
  <span>
    0
  </span>
  , was=‍
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
INSERT div, button
```

# Render
```js
container.querySelector("#increment")?.click();
```
```html
<div>
  x=
  <span>
    1
  </span>
  , was=0
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
UPDATE div/span/#text "0" => "1"
UPDATE div/#text2 "‍" => "0"
```

# Render
```js
container.querySelector("#increment")?.click();
```
```html
<div>
  x=
  <span>
    2
  </span>
  , was=0
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
UPDATE div/span/#text "1" => "2"
```

# Render ASYNC
```html
<div>
  x=
  <span>
    2
  </span>
  , was=1
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
UPDATE div/#text2 "0" => "1"
```