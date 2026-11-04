# Render `{"label":"a","tags":["x","y"]}`
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

# Update `{"label":"b","tags":["y","z"]}`
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
UPDATE: p:nth-of-type(1)::text "x" => "y"
UPDATE: p:nth-of-type(1) > em::text@0 "a" => "b"
UPDATE: p:nth-of-type(2)::text "y" => "z"
UPDATE: p:nth-of-type(2) > em::text@0 "a" => "b"
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
INSERT: button:nth-of-type(1) + span
REMOVE: span:nth-of-type(1) + p
UPDATE: span:nth-of-type(1)[label] null => "y"
INSERT: span:nth-of-type(1) > em
INSERT: span:nth-of-type(1) + span
REMOVE: span:nth-of-type(2) + p
UPDATE: span:nth-of-type(2)[label] null => "z"
INSERT: span:nth-of-type(2) > em
UPDATE: span:nth-of-type(1) > em::text@2 "" => "0"
UPDATE: span:nth-of-type(1) > em::text@0 "" => "b"
UPDATE: span:nth-of-type(2) > em::text@0 "" => "b"
UPDATE: span:nth-of-type(2) > em::text@2 "" => "0"
```

# Update `{"label":"b","tags":["z","w"]}`
```html
<button>
  0
</button>
<span
  label="z"
>
  <em>
    b 0
  </em>
</span>
<span
  label="w"
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
UPDATE: span:nth-of-type(1)[label] "y" => "z"
UPDATE: span:nth-of-type(2)[label] "z" => "w"
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
  z
  <em>
    b 0
  </em>
</p>
<p>
  w
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
UPDATE: p:nth-of-type(1)::text "" => "z"
INSERT: p:nth-of-type(1) + p
REMOVE: p:nth-of-type(2) + span
UPDATE: p:nth-of-type(2)::text "" => "w"
INSERT: p:nth-of-type(1)::text + em
INSERT: p:nth-of-type(2)::text + em
UPDATE: p:nth-of-type(1) > em::text@2 "" => "0"
UPDATE: p:nth-of-type(1) > em::text@0 "" => "b"
UPDATE: p:nth-of-type(2) > em::text@0 "" => "b"
UPDATE: p:nth-of-type(2) > em::text@2 "" => "0"
```
