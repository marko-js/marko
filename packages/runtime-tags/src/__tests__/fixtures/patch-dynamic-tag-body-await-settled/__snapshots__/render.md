# Render `{"on":false,"note":"a","v":"x"}`
```html
<main>
  <div>
    <em>
      a x
    </em>
  </div>
</main>
```

# Update `{"on":false,"note":"b","v":"y"}`
```html
<main>
  <div>
    <em>
      b y
    </em>
  </div>
</main>
```
## Change
```
UPDATE: main > div > em::text@0 "a" => "b"
UPDATE: main > div > em::text@2 "x" => "y"
```

# Update `{"on":false,"note":"c","v":"z"}`
```html
<main>
  <div>
    <em>
      c z
    </em>
  </div>
</main>
```
## Change
```
UPDATE: main > div > em::text@0 "b" => "c"
UPDATE: main > div > em::text@2 "y" => "z"
```
