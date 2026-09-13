# Render `{"show":false}`
```html
<main />
```

# Update `{"show":true,"tree":{"name":"a","children":[{"name":"b"}]}}`
```html
<main>
  <li>
    a
    <ul>
      <li>
        b
      </li>
    </ul>
  </li>
</main>
```
## Change
```
INSERT: main > li
```

# Update `{"show":true,"tree":{"name":"a","children":[{"name":"c"}]}}`
```html
<main>
  <li>
    a
    <ul>
      <li>
        c
      </li>
    </ul>
  </li>
</main>
```
## Change
```
UPDATE: main > li::text "a" => "a"
UPDATE: main > li > ul > li::text "b" => "c"
```
