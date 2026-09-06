# Render `{"t1":"a","t2":"b","note":"x","show":false}`
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <em>
      x
    </em>
  </section>
</main>
```

# Update `{"t1":"a","t2":"b","note":"x","show":true}`
```html
<main>
  <section>
    <h2>
      a
    </h2>
    <em>
      x
    </em>
  </section>
  <section>
    <h2>
      b
    </h2>
    <em>
      x
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > h2::text "a" => "a"
UPDATE: main > section:nth-of-type(1) > em::text "x" => "x"
INSERT: main > section:nth-of-type(1) + section
UPDATE: main > section:nth-of-type(2) > h2::text " " => "b"
INSERT: main > section:nth-of-type(2) > h2 + em
UPDATE: main > section:nth-of-type(2) > em::text " " => "x"
```

# Update `{"t1":"c","t2":"d","note":"y","show":true}`
```html
<main>
  <section>
    <h2>
      c
    </h2>
    <em>
      y
    </em>
  </section>
  <section>
    <h2>
      d
    </h2>
    <em>
      y
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > h2::text "a" => "c"
UPDATE: main > section:nth-of-type(1) > em::text "x" => "y"
UPDATE: main > section:nth-of-type(2) > h2::text "b" => "d"
UPDATE: main > section:nth-of-type(2) > em::text "x" => "y"
```

# Update `{"t1":"c","t2":"d","note":"z","show":false}`
```html
<main>
  <section>
    <h2>
      c
    </h2>
    <em>
      z
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section > h2::text "c" => "c"
UPDATE: main > section > em::text "y" => "z"
REMOVE: main > section + section
```

# Update `{"t1":"e","t2":"f","note":"w","show":true}`
```html
<main>
  <section>
    <h2>
      e
    </h2>
    <em>
      w
    </em>
  </section>
  <section>
    <h2>
      f
    </h2>
    <em>
      w
    </em>
  </section>
</main>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > h2::text "c" => "e"
UPDATE: main > section:nth-of-type(1) > em::text "z" => "w"
INSERT: main > section:nth-of-type(1) + section
UPDATE: main > section:nth-of-type(2) > h2::text " " => "f"
INSERT: main > section:nth-of-type(2) > h2 + em
UPDATE: main > section:nth-of-type(2) > em::text " " => "w"
```
