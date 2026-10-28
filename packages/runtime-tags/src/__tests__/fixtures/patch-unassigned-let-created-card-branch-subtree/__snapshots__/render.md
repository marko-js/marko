# Render `{"on":false,"n":1,"w":"a"}`
```html
<main>
  <div
    n="1"
    w="a"
  />
</main>
```

# Update `{"on":true,"n":1,"w":"b"}`
```html
<main>
  <section>
    <h3>
      Branch heading
    </h3>
    <p>
      Static paragraph text that only the branch renders.
    </p>
  </section>
  <div>
    <header>
      <h2>
        Section title
      </h2>
      <p>
        Some static introduction text for this wrapper.
      </p>
    </header>
    <b>
      1
    </b>
     
    <i>
      b
    </i>
    <footer>
      <a
        href="/more"
      >
        Read more
      </a>
    </footer>
    <aside>
      <h3>
        Related
      </h3>
      <ul>
        <li>
          First related item
        </li>
        <li>
          Second related item
        </li>
        <li>
          Third related item
        </li>
      </ul>
    </aside>
  </div>
  <em>
    b
  </em>
</main>
```
## Change
```
REMOVE: main > em + div
INSERT: main > :is(section, div, em)
UPDATE: main > em::text " " => "b"
UPDATE: main > div > b::text " " => "1"
UPDATE: main > div > i::text " " => "b"
```

# Update `{"on":true,"n":0,"w":"c"}`
```html
<main>
  <section>
    <h3>
      Branch heading
    </h3>
    <p>
      Static paragraph text that only the branch renders.
    </p>
  </section>
  <div>
    <header>
      <h2>
        Section title
      </h2>
      <p>
        Some static introduction text for this wrapper.
      </p>
    </header>
    <b>
      1
    </b>
     
    <i>
      c
    </i>
    <footer>
      <a
        href="/more"
      >
        Read more
      </a>
    </footer>
    <aside>
      <h3>
        Related
      </h3>
      <ul>
        <li>
          First related item
        </li>
        <li>
          Second related item
        </li>
        <li>
          Third related item
        </li>
      </ul>
    </aside>
  </div>
  <em>
    c
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "b" => "c"
UPDATE: main > div > i::text "b" => "c"
```
