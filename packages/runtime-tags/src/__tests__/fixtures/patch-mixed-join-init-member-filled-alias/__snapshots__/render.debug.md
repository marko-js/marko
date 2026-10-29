# Render `{"show":true,"x":"a"}`
```html
<div>
  <em>
    a
  </em>
</div>
<span>
  <i>
    0:a
  </i>
</span>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <em>
    a
  </em>
</div>
<span>
  <i>
    1:a
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span > i::text "0:a" => "1:a"
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
    1:b
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: div > em::text "a" => "b"
UPDATE: span > i::text "1:a" => "1:b"
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
    2:b
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span > i::text "1:b" => "2:b"
```

# Update `{"show":true,"x":"c"}`
```html
<div>
  <em>
    c
  </em>
</div>
<span>
  <i>
    2:c
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: div > em::text "b" => "c"
UPDATE: span > i::text "2:b" => "2:c"
```
