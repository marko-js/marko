# Render `{"card":true,"label":"a","tags":["x"]}`
```html
<button>
  0
</button>
<p>
  x
  <em>
    a 0
  </em>
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  x
  <em>
    a 1
  </em>
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: p > em::text@2 "0" => "1"
```

# Update `{"card":false,"label":"b","tags":["x","y"]}`
```html
<button>
  1
</button>
<span
  label="x"
>
  <em>
    b 1
  </em>
</span>
<span
  label="y"
>
  <em>
    b 1
  </em>
</span>
```
## Change
```
INSERT: button + span
REMOVE: span:nth-of-type(1) + p
UPDATE: span:nth-of-type(1)[label] null => "x"
INSERT: span:nth-of-type(1) > em
UPDATE: span:nth-of-type(1) > em::text@0 "" => "b"
INSERT: span:nth-of-type(1) + span
UPDATE: span:nth-of-type(1) > em::text@2 "" => "1"
UPDATE: span:nth-of-type(2) > em::text@2 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<span
  label="x"
>
  <em>
    b 2
  </em>
</span>
<span
  label="y"
>
  <em>
    b 2
  </em>
</span>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: span:nth-of-type(1) > em::text@2 "1" => "2"
UPDATE: span:nth-of-type(2) > em::text@2 "1" => "2"
```

# Update `{"card":false,"label":"c","tags":["y"]}`
```html
<button>
  2
</button>
<span
  label="y"
>
  <em>
    c 2
  </em>
</span>
```
## Change
```
UPDATE: span[label] "x" => "y"
UPDATE: span > em::text@0 "b" => "c"
REMOVE: span + span
```
