# Render
```html
<main />
```

# Update `{"show":1,"note":"a"}`
```html
<main>
  <pre>
    line 1
line 2
line 3
  </pre>
  <p>
    a
  </p>
</main>
```
## Change
```
INSERT: main > :is(pre, p)
```

# Update `{"show":1,"note":"b"}`
```html
<main>
  <pre>
    line 1
line 2
line 3
  </pre>
  <p>
    b
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "a" => "b"
```

# Update
```html
<main />
```
## Change
```
REMOVE: main > pre
REMOVE: main > p
```
