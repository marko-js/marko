# Render
```html
<div>
  <button>
    0
  </button>
  <div />
  <div />
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
  <div>
    0
  </div>
  <div>
    1
  </div>
</div>
```

# Mutations
```
INSERT div/div0/#text
INSERT div/div1/#text
UPDATE div/button/#text "0" => "1"
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
  <div>
    1
  </div>
  <div>
    2
  </div>
</div>
```

# Mutations
```
REMOVE #text in div/div0
INSERT div/div0/#text
REMOVE #text in div/div1
INSERT div/div1/#text
UPDATE div/button/#text "1" => "2"
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
  <div>
    2
  </div>
  <div>
    3
  </div>
</div>
```

# Mutations
```
REMOVE #text in div/div0
INSERT div/div0/#text
REMOVE #text in div/div1
INSERT div/div1/#text
UPDATE div/button/#text "2" => "3"
```