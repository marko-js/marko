# Render `{"show":false,"note":"x","inner":"div"}`
```html
<main />
```

# Update `{"show":true,"note":"x","inner":"div"}`
```html
<main>
  <section>
    <p>
      x
    </p>
    <div />
  </section>
</main>
```
## Change
```
INSERT: main > section
INSERT: main > section > p
UPDATE: main > section > p::text " " => "x"
INSERT: main > section > p + div
```

# Update `{"show":true,"note":"y","inner":"div"}`
```html
<main>
  <section>
    <p>
      y
    </p>
    <div />
  </section>
</main>
```
## Change
```
UPDATE: main > section > p::text "x" => "y"
```

# Update `{"show":true,"note":"y","inner":"span"}`
```html
<main>
  <section>
    <p>
      y
    </p>
    <span />
  </section>
</main>
```
## Change
```
UPDATE: main > section > p::text "y" => "y"
INSERT: main > section > p + span
REMOVE: main > section > span + div
```

# Update `{"show":true,"note":"z","inner":"em"}`
```html
<main>
  <section>
    <p>
      z
    </p>
    <em />
  </section>
</main>
```
## Change
```
UPDATE: main > section > p::text "y" => "z"
INSERT: main > section > p + em
REMOVE: main > section > em + span
```

# Update `{"show":true,"note":"z"}`
```html
<main>
  <section>
    <p>
      z
    </p>
  </section>
</main>
```
## Change
```
UPDATE: main > section > p::text "z" => "z"
REMOVE: main > section > p + em
```
