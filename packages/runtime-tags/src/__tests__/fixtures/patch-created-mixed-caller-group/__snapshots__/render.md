# Render `{"show":false,"x":"a"}`
```html
<button>
  +
</button>
```

# Update `{"show":true,"x":"b"}`
```html
<p>
  0b
</p>
<div>
  <em>
    0b
  </em>
</div>
<button>
  +
</button>
```
## Change
```
INSERT: p, div
UPDATE: p::text " " => "0b"
UPDATE: div > em::text " " => "0b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  1b
</p>
<div>
  <em>
    1b
  </em>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0b" => "1b"
UPDATE: div > em::text "0b" => "1b"
```

# Update `{"show":false,"x":"c"}`
```html
<button>
  +
</button>
```
## Change
```
REMOVE: p
REMOVE: div
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"x":"d"}`
```html
<p>
  2d
</p>
<div>
  <em>
    2d
  </em>
</div>
<button>
  +
</button>
```
## Change
```
INSERT: p, div
UPDATE: p::text " " => "2d"
UPDATE: div > em::text " " => "2d"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  3d
</p>
<div>
  <em>
    3d
  </em>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "2d" => "3d"
UPDATE: div > em::text "2d" => "3d"
```

# Update `{"show":true,"x":"e"}`
```html
<p>
  3e
</p>
<div>
  <em>
    3e
  </em>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "3d" => "3e"
UPDATE: div > em::text "3d" => "3e"
```
