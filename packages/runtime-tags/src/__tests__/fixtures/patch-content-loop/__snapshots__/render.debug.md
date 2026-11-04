# Render `{"items":[{"text":"a"},{"text":"b"}]}`
```html
<ul>
  <li>
    <b>
      a
    </b>
  </li>
  <li>
    <b>
      b
    </b>
  </li>
</ul>
```

# Update `{"items":[{"text":"c"},{"text":"b"},{"text":"d"}]}`
```html
<ul>
  <li>
    <b>
      c
    </b>
  </li>
  <li>
    <b>
      b
    </b>
  </li>
  <li>
    <b>
      d
    </b>
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(2) + li
UPDATE: ul > li:nth-of-type(1) > b::text "a" => "c"
INSERT: ul > li:nth-of-type(3) > b
UPDATE: ul > li:nth-of-type(3) > b::text " " => "d"
```

# Update `{"items":[{"text":"e"}]}`
```html
<ul>
  <li>
    <b>
      e
    </b>
  </li>
</ul>
```
## Change
```
REMOVE: ul > li + li
REMOVE: ul > li + li
UPDATE: ul > li > b::text "c" => "e"
```

# Update `{"items":[]}`
```html
<ul />
```
## Change
```
REMOVE: ul > li
```

# Update `{"items":[{"text":"f"},{"text":"g"}]}`
```html
<ul>
  <li>
    <b>
      f
    </b>
  </li>
  <li>
    <b>
      g
    </b>
  </li>
</ul>
```
## Change
```
INSERT: ul > li
INSERT: ul > li:nth-of-type(1) + li
INSERT: ul > li:nth-of-type(1) > b
UPDATE: ul > li:nth-of-type(1) > b::text " " => "f"
INSERT: ul > li:nth-of-type(2) > b
UPDATE: ul > li:nth-of-type(2) > b::text " " => "g"
```
