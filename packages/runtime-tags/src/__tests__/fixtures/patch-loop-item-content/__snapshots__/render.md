# Render `{"items":[{"t":"a","n":"1"},{"t":"b","n":"2"}]}`
```html
<ul>
  <li>
    <b>
      a
    </b>
    <em>
      1
    </em>
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

# Update `{"items":[{"t":"c","n":"3"},{"t":"b","n":"4"}]}`
```html
<ul>
  <li>
    <b>
      c
    </b>
    <em>
      3
    </em>
  </li>
  <li>
    <b>
      b
    </b>
    <em>
      4
    </em>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > b::text "a" => "c"
UPDATE: ul > li:nth-of-type(1) > em::text "1" => "3"
UPDATE: ul > li:nth-of-type(2) > b::text "b" => "b"
UPDATE: ul > li:nth-of-type(2) > em::text "2" => "4"
```

# Update `{"items":[{"t":"f","n":"6"}]}`
```html
<ul>
  <li>
    <b>
      f
    </b>
    <em>
      6
    </em>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li > b::text "c" => "f"
UPDATE: ul > li > em::text "3" => "6"
REMOVE: ul > li + li
```

# Update `{"items":[{"t":"c","n":"3"},{"t":"b","n":"4"},{"t":"e","n":"5"}]}`
```html
<ul>
  <li>
    <b>
      c
    </b>
    <em>
      3
    </em>
  </li>
  <li>
    <b>
      b
    </b>
    <em>
      4
    </em>
  </li>
  <li>
    <b>
      e
    </b>
    <em>
      5
    </em>
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > b::text "f" => "c"
UPDATE: ul > li:nth-of-type(1) > em::text "6" => "3"
INSERT: ul > li:nth-of-type(1) + li
INSERT: ul > li:nth-of-type(2) + li
```
