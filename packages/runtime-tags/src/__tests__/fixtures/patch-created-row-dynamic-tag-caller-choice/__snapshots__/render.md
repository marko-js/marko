# Render `{"show":false,"label":"a","tags":["x"]}`
```html
<button
  class="c"
>
  c
</button>
```

# Update `{"show":true,"label":"a","tags":["x","y"]}`
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
<p>
  y
  <em>
    a 0
  </em>
</p>
<button
  class="c"
>
  c
</button>
```
## Change
```
INSERT: button
INSERT: button:nth-of-type(1) + p
UPDATE: p:nth-of-type(1)::text "" => "x"
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text "" => "y"
INSERT: p:nth-of-type(1)::text + em
INSERT: p:nth-of-type(2)::text + em
UPDATE: p:nth-of-type(1) > em::text@2 "" => "0"
UPDATE: p:nth-of-type(1) > em::text@0 "" => "a"
UPDATE: p:nth-of-type(2) > em::text@0 "" => "a"
UPDATE: p:nth-of-type(2) > em::text@2 "" => "0"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<button>
  0
</button>
<span
  label="x"
>
  <em>
    a 0
  </em>
</span>
<span
  label="y"
>
  <em>
    a 0
  </em>
</span>
<button
  class="c"
>
  c
</button>
```
## Change
```
INSERT: button:nth-of-type(1) + span
REMOVE: span:nth-of-type(1) + p
UPDATE: span:nth-of-type(1)[label] null => "x"
INSERT: span:nth-of-type(1) > em
INSERT: span:nth-of-type(1) + span
REMOVE: span:nth-of-type(2) + p
UPDATE: span:nth-of-type(2)[label] null => "y"
INSERT: span:nth-of-type(2) > em
UPDATE: span:nth-of-type(1) > em::text@2 "" => "0"
UPDATE: span:nth-of-type(1) > em::text@0 "" => "a"
UPDATE: span:nth-of-type(2) > em::text@0 "" => "a"
UPDATE: span:nth-of-type(2) > em::text@2 "" => "0"
```

# Update `{"show":true,"label":"b","tags":["y","z"]}`
```html
<button>
  0
</button>
<span
  label="y"
>
  <em>
    b 0
  </em>
</span>
<span
  label="z"
>
  <em>
    b 0
  </em>
</span>
<button
  class="c"
>
  c
</button>
```
## Change
```
UPDATE: span:nth-of-type(1)[label] "x" => "y"
UPDATE: span:nth-of-type(2)[label] "y" => "z"
UPDATE: span:nth-of-type(1) > em::text@0 "a" => "b"
UPDATE: span:nth-of-type(2) > em::text@0 "a" => "b"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<button>
  0
</button>
<p>
  y
  <em>
    b 0
  </em>
</p>
<p>
  z
  <em>
    b 0
  </em>
</p>
<button
  class="c"
>
  c
</button>
```
## Change
```
INSERT: button:nth-of-type(1) + p
REMOVE: p:nth-of-type(1) + span
UPDATE: p:nth-of-type(1)::text "" => "y"
INSERT: p:nth-of-type(1) + p
REMOVE: p:nth-of-type(2) + span
UPDATE: p:nth-of-type(2)::text "" => "z"
INSERT: p:nth-of-type(1)::text + em
INSERT: p:nth-of-type(2)::text + em
UPDATE: p:nth-of-type(1) > em::text@2 "" => "0"
UPDATE: p:nth-of-type(1) > em::text@0 "" => "b"
UPDATE: p:nth-of-type(2) > em::text@0 "" => "b"
UPDATE: p:nth-of-type(2) > em::text@2 "" => "0"
```
