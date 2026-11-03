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
    b
  </em>
</div>
<span>
  <i>
    0:b
  </i>
</span>
<button>
  +
</button>
```
## Change
```
INSERT: div, span
UPDATE: span > i::text " " => "0:b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <em>
    b
  </em>
</div>
<span>
  <i>
    1:b
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span > i::text "0:b" => "1:b"
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
REMOVE: span
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"x":"d"}`
```html
<div>
  <em>
    d
  </em>
</div>
<span>
  <i>
    2:d
  </i>
</span>
<button>
  +
</button>
```
## Change
```
INSERT: div, span
UPDATE: span > i::text " " => "2:d"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <em>
    d
  </em>
</div>
<span>
  <i>
    3:d
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span > i::text "2:d" => "3:d"
```

# Update `{"show":true,"x":"e"}`
```html
<div>
  <em>
    e
  </em>
</div>
<span>
  <i>
    3:e
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: div > em::text "d" => "e"
UPDATE: span > i::text "3:d" => "3:e"
```
