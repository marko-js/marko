# Render `{"items":[{"t":"a","n":"1","alt":false},{"t":"b","n":"2","alt":true}]}`
```html
<ul>
  <li>
    <b>
      a
    </b>
    <span>
      1
    </span>
  </li>
  <li>
    <b>
      b
    </b>
    <em>
      2
    </em>
  </li>
</ul>
```

# Update `{"items":[{"t":"a","n":"11","alt":true},{"t":"b","n":"22","alt":false},{"t":"c","n":"3","alt":false}]}`
```html
<ul>
  <li>
    <b>
      a
    </b>
    <em>
      11
    </em>
  </li>
  <li>
    <b>
      b
    </b>
    <span>
      22
    </span>
  </li>
  <li>
    <b>
      c
    </b>
    <span>
      3
    </span>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > b::text "a" => "a"
REMOVE: ul > li:nth-of-type(1) > b + span
INSERT: ul > li:nth-of-type(1) > b + em
UPDATE: ul > li:nth-of-type(1) > em::text " " => "11"
UPDATE: ul > li:nth-of-type(2) > b::text "b" => "b"
REMOVE: ul > li:nth-of-type(2) > b + em
INSERT: ul > li:nth-of-type(2) > b + span
UPDATE: ul > li:nth-of-type(2) > span::text " " => "22"
INSERT: ul > li:nth-of-type(2) + li
```

# Update `{"items":[{"t":"c","n":"33","alt":true}]}`
```html
<ul>
  <li>
    <b>
      c
    </b>
    <em>
      33
    </em>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li > b::text "a" => "c"
UPDATE: ul > li > em::text "11" => "33"
REMOVE: ul > li + li
REMOVE: ul > li + li
```

# Update `{"items":[{"t":"x","n":"9","alt":false},{"t":"y","n":"8","alt":true}]}`
```html
<ul>
  <li>
    <b>
      x
    </b>
    <span>
      9
    </span>
  </li>
  <li>
    <b>
      y
    </b>
    <em>
      8
    </em>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > b::text "c" => "x"
REMOVE: ul > li:nth-of-type(1) > b + em
INSERT: ul > li:nth-of-type(1) > b + span
UPDATE: ul > li:nth-of-type(1) > span::text " " => "9"
INSERT: ul > li:nth-of-type(1) + li
```
