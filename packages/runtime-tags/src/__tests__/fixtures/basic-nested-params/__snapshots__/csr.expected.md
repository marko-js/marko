# Render
```html
<button>
  Inc
</button>
<div>
  <div>
    <div>
      1.2
    </div>
  </div>
</div>
```

# Mutations
```
INSERT button, div
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<div>
  <div>
    <div>
      2.2
    </div>
  </div>
</div>
```

# Mutations
```
UPDATE div/div/div/#text0 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<div>
  <div>
    <div>
      3.2
    </div>
  </div>
</div>
```

# Mutations
```
UPDATE div/div/div/#text0 "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<div>
  <div>
    <div>
      4.2
    </div>
  </div>
</div>
```

# Mutations
```
UPDATE div/div/div/#text0 "3" => "4"
```