# Render `{"on":false,"note":"a","p":{"value":"x"}}`
```html
<main>
  <div>
    <em>
      a
    </em>
  </div>
</main>
```

# Update
```html
<main>
  <div>
    <em>
      a
    </em>
  </div>
  <i>
    x
  </i>
</main>
```
## Change
```
INSERT: main > div + i
INSERT: main > i::text("x")
```

# Update `{"on":false,"note":"b","p":{"value":"y"}}`
```html
<main>
  <div>
    <em>
      b
    </em>
  </div>
  <i>
    y
  </i>
</main>
```
## Change
```
UPDATE: main > div > em::text "a" => "b"
UPDATE: main > i::text "x" => "y"
```

# Update `{"on":false,"note":"c","p":"z"}`
```html
<main>
  <div>
    <em>
      c
    </em>
  </div>
  <i>
    z
  </i>
</main>
```
## Change
```
UPDATE: main > div > em::text "b" => "c"
UPDATE: main > i::text "y" => "z"
```
