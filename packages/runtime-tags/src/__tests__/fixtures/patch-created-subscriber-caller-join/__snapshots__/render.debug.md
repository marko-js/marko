# Render `{"show":false,"x":"a"}`
```html
<button>
  +
</button>
```

# Update `{"show":true,"x":"b"}`
```html
<div>
  <em>
    0:b
  </em>
</div>
<button>
  +
</button>
```
## Change
```
INSERT: div
UPDATE: div > em::text " " => "0:b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <em>
    1:b
  </em>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div > em::text "0:b" => "1:b"
```

# Update `{"show":false,"x":"c"}`
```html
<button>
  +
</button>
```
## Change
```
REMOVE: div
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"x":"d"}`
```html
<div>
  <em>
    2:d
  </em>
</div>
<button>
  +
</button>
```
## Change
```
INSERT: div
UPDATE: div > em::text " " => "2:d"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <em>
    3:d
  </em>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div > em::text "2:d" => "3:d"
```

# Update `{"show":true,"x":"e"}`
```html
<div>
  <em>
    3:e
  </em>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div > em::text "3:d" => "3:e"
```
