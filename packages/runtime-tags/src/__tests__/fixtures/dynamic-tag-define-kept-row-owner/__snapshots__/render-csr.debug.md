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

# Update `{"card":true,"label":"c","tags":["y","z"]}`
```html
<button>
  1
</button>
<p>
  y
  <em>
    c 1
  </em>
</p>
<p>
  z
  <em>
    c 1
  </em>
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "x" => "y"
UPDATE: p:nth-of-type(1) > em::text@0 "a" => "c"
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text "" => "z"
INSERT: p:nth-of-type(2)::text + em
UPDATE: p:nth-of-type(2) > em::text@0 "" => "c"
UPDATE: p:nth-of-type(2) > em::text@2 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<p>
  y
  <em>
    c 2
  </em>
</p>
<p>
  z
  <em>
    c 2
  </em>
</p>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: p:nth-of-type(1) > em::text@2 "1" => "2"
UPDATE: p:nth-of-type(2) > em::text@2 "1" => "2"
```

# Update `{"card":false,"label":"d","tags":["z"]}`
```html
<button>
  2
</button>
<span
  label="z"
>
  <em>
    d 2
  </em>
</span>
```
## Change
```
REMOVE: span + p
INSERT: button + span
REMOVE: span + p
UPDATE: span[label] null => "z"
INSERT: span > em
UPDATE: span > em::text@0 "" => "d"
UPDATE: span > em::text@2 "" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  3
</button>
<span
  label="z"
>
  <em>
    d 3
  </em>
</span>
```
## Change
```
UPDATE: button::text "2" => "3"
UPDATE: span > em::text@2 "2" => "3"
```
