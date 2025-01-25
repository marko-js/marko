# Render
```html
<div>
  <button>
    0
  </button>
  <div>
    <button>
      0
    </button>
    <div>
      <button>
        0
      </button>
    </div>
  </div>
</div>
<div>
  <button>
    0
  </button>
</div>
```

# Mutations
```
INSERT div0, div1
```

# Render
```js
container.querySelectorAll("button")[buttonNum++].click();
```
```html
<div>
  <button>
    1
  </button>
  <div>
    <button>
      0
    </button>
    <div>
      <button>
        0
      </button>
    </div>
  </div>
</div>
<div>
  <button>
    0
  </button>
</div>
```

# Mutations
```
UPDATE div0/button/#text "0" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonNum++].click();
```
```html
<div>
  <button>
    1
  </button>
  <div>
    <button>
      1
    </button>
    <div>
      <button>
        0
      </button>
    </div>
  </div>
</div>
<div>
  <button>
    0
  </button>
</div>
```

# Mutations
```
UPDATE div0/div/button/#text "0" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonNum++].click();
```
```html
<div>
  <button>
    1
  </button>
  <div>
    <button>
      1
    </button>
    <div>
      <button>
        1
      </button>
    </div>
  </div>
</div>
<div>
  <button>
    0
  </button>
</div>
```

# Mutations
```
UPDATE div0/div/div/button/#text "0" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonNum++].click();
```
```html
<div>
  <button>
    1
  </button>
  <div>
    <button>
      1
    </button>
    <div>
      <button>
        1
      </button>
    </div>
  </div>
</div>
<div>
  <button>
    1
  </button>
</div>
```

# Mutations
```
UPDATE div1/button/#text "0" => "1"
```

# Render
```js
buttonNum = 0;
```
```html
<div>
  <button>
    1
  </button>
  <div>
    <button>
      1
    </button>
    <div>
      <button>
        1
      </button>
    </div>
  </div>
</div>
<div>
  <button>
    1
  </button>
</div>
```
