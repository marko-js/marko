# Render `{"show":false,"tag":"div"}`
```html
<main />
```

# Update `{"show":true,"tag":"div"}`
```html
<main>
  <section>
    <div />
  </section>
</main>
```
## Change
```
INSERT: main > section
INSERT: main > section > div
```

# Update `{"show":true,"tag":"span"}`
```html
<main>
  <section>
    <span />
  </section>
</main>
```
## Change
```
INSERT: main > section > span
REMOVE: main > section > span + div
```

# Update `{"show":false,"tag":"span"}`
```html
<main />
```
## Change
```
REMOVE: main > section
```

# Update `{"show":true}`
```html
<main>
  <section />
</main>
```
## Change
```
INSERT: main > section
```

# Update `{"show":true,"tag":"em"}`
```html
<main>
  <section>
    <em />
  </section>
</main>
```
## Change
```
INSERT: main > section > em
```
