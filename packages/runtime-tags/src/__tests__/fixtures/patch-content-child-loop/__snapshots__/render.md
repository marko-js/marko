# Render `{"count":[1,2],"note":"x"}`
```html
<main>
  <ul>
    <li>
      1
      <em>
        x
      </em>
    </li>
    <li>
      2
      <em>
        x
      </em>
    </li>
  </ul>
</main>
```

# Update `{"count":[1,2],"note":"y"}`
```html
<main>
  <ul>
    <li>
      1
      <em>
        y
      </em>
    </li>
    <li>
      2
      <em>
        y
      </em>
    </li>
  </ul>
</main>
```
## Change
```
UPDATE: main > ul > li:nth-of-type(1) > em::text "x" => "y"
UPDATE: main > ul > li:nth-of-type(2) > em::text "x" => "y"
```

# Update `{"count":[1],"note":"z"}`
```html
<main>
  <ul>
    <li>
      1
      <em>
        z
      </em>
    </li>
  </ul>
</main>
```
## Change
```
REMOVE: main > ul > li + li
UPDATE: main > ul > li > em::text "y" => "z"
```

# Update `{"count":[1,2,3],"note":"w"}`
```html
<main>
  <ul>
    <li>
      1
      <em>
        w
      </em>
    </li>
    <li>
      2
      <em>
        w
      </em>
    </li>
    <li>
      3
      <em>
        w
      </em>
    </li>
  </ul>
</main>
```
## Change
```
INSERT: main > ul > li:nth-of-type(1) + li
INSERT: main > ul > li:nth-of-type(2) + li
UPDATE: main > ul > li:nth-of-type(1) > em::text "z" => "w"
UPDATE: main > ul > li:nth-of-type(2)::text "" => "2"
INSERT: main > ul > li:nth-of-type(2)::text + em
UPDATE: main > ul > li:nth-of-type(2) > em::text " " => "w"
UPDATE: main > ul > li:nth-of-type(3)::text "" => "3"
INSERT: main > ul > li:nth-of-type(3)::text + em
UPDATE: main > ul > li:nth-of-type(3) > em::text " " => "w"
```
