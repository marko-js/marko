# Render `{"show":false,"note":"x"}`
```html
<main>
  <section>
    <h2
      class="root"
    >
      root
    </h2>
  </section>
</main>
```

# Update `{"show":true,"note":"y"}`
```html
<main>
  <section>
    <h2
      class="root"
    >
      root
    </h2>
  </section>
  <section>
    <h2
      class="branch"
    >
      branch
    </h2>
  </section>
  <p>
    y
  </p>
</main>
```
## Change
```
INSERT: main > section:nth-of-type(1) + :is(section, p)
UPDATE: .branch[class] null => "branch"
UPDATE: .branch::text " " => "branch"
UPDATE: main > p::text " " => "y"
```

# Update `{"show":true,"note":"z"}`
```html
<main>
  <section>
    <h2
      class="root"
    >
      root
    </h2>
  </section>
  <section>
    <h2
      class="branch"
    >
      branch
    </h2>
  </section>
  <p>
    z
  </p>
</main>
```
## Change
```
UPDATE: .branch::text "branch" => "branch"
UPDATE: main > p::text "y" => "z"
```

# Update `{"show":false,"note":"w"}`
```html
<main>
  <section>
    <h2
      class="root"
    >
      root
    </h2>
  </section>
</main>
```
## Change
```
REMOVE: main > section + section
REMOVE: main > section + p
```

# Update `{"show":true,"note":"v"}`
```html
<main>
  <section>
    <h2
      class="root"
    >
      root
    </h2>
  </section>
  <section>
    <h2
      class="branch"
    >
      branch
    </h2>
  </section>
  <p>
    v
  </p>
</main>
```
## Change
```
INSERT: main > section:nth-of-type(1) + :is(section, p)
UPDATE: .branch[class] null => "branch"
UPDATE: .branch::text " " => "branch"
UPDATE: main > p::text " " => "v"
```
