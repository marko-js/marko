# Render
```html
<div>
  <button>
    0
  </button>
  <!--0 + 0 = 0-->
</div>
```

# Mutations
```
INSERT div
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    1
  </button>
  <!--1 + 1 = 2-->
</div>
```

# Mutations
```
UPDATE div/button/#text "0" => "1"
UPDATE div/#comment "0 + 0 = 0" => "1 + 1 = 2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    2
  </button>
  <!--2 + 2 = 4-->
</div>
```

# Mutations
```
UPDATE div/button/#text "1" => "2"
UPDATE div/#comment "1 + 1 = 2" => "2 + 2 = 4"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    3
  </button>
  <!--3 + 3 = 6-->
</div>
```

# Mutations
```
UPDATE div/button/#text "2" => "3"
UPDATE div/#comment "2 + 2 = 4" => "3 + 3 = 6"
```