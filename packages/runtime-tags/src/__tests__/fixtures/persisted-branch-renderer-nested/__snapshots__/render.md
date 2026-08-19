# Render `{"a":false,"b":false,"tag":"span"}`
```html
<main />
```

# Update `{"a":true,"b":false,"tag":"span"}`
```html
<main>
  <div />
</main>
```
## Change
```
INSERT: main > div
```

# Update `{"a":true,"b":true,"tag":"span"}`
```html
<main>
  <div>
    <p />
    <span />
  </div>
</main>
```
## Change
```
INSERT: main > div > p
UPDATE: main > div > p::text " " => ""
INSERT: main > div > p + span
```

# Update `{"a":true,"b":true,"tag":"em"}`
```html
<main>
  <div>
    <p />
    <em />
  </div>
</main>
```
## Change
```
UPDATE: main > div > p::text "" => ""
INSERT: main > div > p + em
REMOVE: main > div > em + span
```

# Update `{"a":false,"b":true,"tag":"em"}`
```html
<main />
```
## Change
```
REMOVE: main > div
```

# Update `{"a":true,"b":true,"tag":"b"}`
```html
<main>
  <div>
    <p />
    <b />
  </div>
</main>
```
## Change
```
INSERT: main > div
INSERT: main > div > p
UPDATE: main > div > p::text " " => ""
INSERT: main > div > p + b
```
