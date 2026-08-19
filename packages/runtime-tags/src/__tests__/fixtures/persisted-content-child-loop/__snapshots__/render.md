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
UPDATE: main > ul > li:nth-of-type(1)::text "1" => "1"
UPDATE: main > ul > li:nth-of-type(1) > em::text "x" => "y"
UPDATE: main > ul > li:nth-of-type(2)::text "2" => "2"
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
UPDATE: main > ul > li::text "1" => "1"
UPDATE: main > ul > li > em::text "y" => "z"
REMOVE: main > ul > li + li
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
UPDATE: main > ul > li:nth-of-type(1)::text "1" => "1"
UPDATE: main > ul > li:nth-of-type(1) > em::text "z" => "w"
INSERT: main > ul > li:nth-of-type(1) + li
INSERT: main > ul > li:nth-of-type(2) + li
```
