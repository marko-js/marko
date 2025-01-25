# Render
```html
<div>
  <button
    class="a"
  >
    0
  </button>
   + 
  <button
    class="b"
  >
    0
  </button>
   = 0
</div>
```

# Mutations
```
INSERT div
```

# Render
```js
container.querySelector("button.a").click();
```
```html
<div>
  <button
    class="a"
  >
    10
  </button>
   + 
  <button
    class="b"
  >
    0
  </button>
   = 10
</div>
```

# Mutations
```
UPDATE div/button0/#text "0" => "10"
UPDATE div/#text2 "0" => "10"
```

# Render
```js
container.querySelector("button.b").click();
```
```html
<div>
  <button
    class="a"
  >
    10
  </button>
   + 
  <button
    class="b"
  >
    5
  </button>
   = 15
</div>
```

# Mutations
```
UPDATE div/button1/#text "0" => "5"
UPDATE div/#text2 "10" => "15"
```