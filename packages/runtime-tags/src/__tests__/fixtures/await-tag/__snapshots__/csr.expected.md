# Render
```html
<div>
  <button>
    Inc
  </button>
</div>
```

# Mutations
```
INSERT div
```

# Render ASYNC
```html
<div>
  Got: a 0
  <button>
    Inc
  </button>
</div>
```

# Mutations
```
INSERT div/#text0, div/#text1, div/#text2, div/#text3
REMOVE #text after div/#text3
UPDATE div/#text1 "" => "a"
UPDATE div/#text3 "" => "0"
```

# Render ASYNC
```html
<div>
  Got: a 0Got: c 0
  <button>
    Inc
  </button>
</div>
```

# Mutations
```
INSERT div/#text5, div/#text6, div/#text7, div/#text8
REMOVE #text after div/#text8
UPDATE div/#text6 "" => "c"
UPDATE div/#text8 "" => "0"
```

# Render ASYNC
```html
<div>
  Got: a 0Got: b 0Got: c 0
  <button>
    Inc
  </button>
</div>
```

# Mutations
```
INSERT div/#text4, div/#text5, div/#text6, div/#text7
REMOVE #text after div/#text7
UPDATE div/#text5 "" => "b"
UPDATE div/#text7 "" => "0"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  Got: a 1Got: b 1Got: c 1
  <button>
    Inc
  </button>
</div>
```

# Mutations
```
UPDATE div/#text3 "0" => "1"
UPDATE div/#text11 "0" => "1"
UPDATE div/#text7 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  Got: a 2Got: b 2Got: c 2
  <button>
    Inc
  </button>
</div>
```

# Mutations
```
UPDATE div/#text3 "1" => "2"
UPDATE div/#text11 "1" => "2"
UPDATE div/#text7 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  Got: a 3Got: b 3Got: c 3
  <button>
    Inc
  </button>
</div>
```

# Mutations
```
UPDATE div/#text3 "2" => "3"
UPDATE div/#text11 "2" => "3"
UPDATE div/#text7 "2" => "3"
```