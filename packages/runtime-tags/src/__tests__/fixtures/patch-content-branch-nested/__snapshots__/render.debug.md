# Render `{"a":false,"b":false,"label":"l","text":"x"}`
```html
<main />
```

# Update `{"a":true,"b":false,"label":"l","text":"x"}`
```html
<main>
  <div />
</main>
```
## Change
```
INSERT: main > div
```

# Update `{"a":true,"b":true,"label":"l","text":"x"}`
```html
<main>
  <div>
    <p>
      l
    </p>
    <em>
      x
    </em>
  </div>
</main>
```
## Change
```
INSERT: main > div > :is(p, em)
```

# Update `{"a":true,"b":true,"label":"m","text":"y"}`
```html
<main>
  <div>
    <p>
      m
    </p>
    <em>
      y
    </em>
  </div>
</main>
```
## Change
```
UPDATE: main > div > p::text "l" => "m"
UPDATE: main > div > em::text "x" => "y"
```

# Update `{"a":false,"b":true,"label":"m","text":"y"}`
```html
<main />
```
## Change
```
REMOVE: main > div
```

# Update `{"a":true,"b":true,"label":"n","text":"z"}`
```html
<main>
  <div>
    <p>
      n
    </p>
    <em>
      z
    </em>
  </div>
</main>
```
## Change
```
INSERT: main > div
```
