# Render `{"label":"x","show":false}`
```html
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
```

# Update
```js
d.querySelector("button.a").click();
```

# Update
```js
d.querySelector("button.b").click();
```

# Update `{"label":"y","show":true}`
```html
<main>
  <section>
    <p
      class="a"
    >
      y:1
    </p>
  </section>
  <section>
    <p
      class="b"
    >
      10 y:10
    </p>
  </section>
</main>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
```
## Change
```
INSERT: main
UPDATE: main > section:nth-of-type(1) > p::text " " => "y:1"
UPDATE: main > section:nth-of-type(2) > p::text@0 "" => "10"
UPDATE: main > section:nth-of-type(2) > p::text@3 "" => "y:10"
```

# Update `{"label":"z","show":true}`
```html
<main>
  <section>
    <p
      class="a"
    >
      z:1
    </p>
  </section>
  <section>
    <p
      class="b"
    >
      10 z:10
    </p>
  </section>
</main>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > p::text "y:1" => "z:1"
UPDATE: main > section:nth-of-type(2) > p::text@3 "y:10" => "z:10"
```

# Update
```js
d.querySelector("button.b").click();
```
```html
<main>
  <section>
    <p
      class="a"
    >
      z:1
    </p>
  </section>
  <section>
    <p
      class="b"
    >
      20 z:20
    </p>
  </section>
</main>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
```
## Change
```
UPDATE: main > section:nth-of-type(2) > p::text@0 "10" => "20"
UPDATE: main > section:nth-of-type(2) > p::text@3 "z:10" => "z:20"
```

# Update `{"label":"w","show":true}`
```html
<main>
  <section>
    <p
      class="a"
    >
      w:1
    </p>
  </section>
  <section>
    <p
      class="b"
    >
      20 w:20
    </p>
  </section>
</main>
<button
  class="a"
>
  a
</button>
<button
  class="b"
>
  b
</button>
```
## Change
```
UPDATE: main > section:nth-of-type(1) > p::text "z:1" => "w:1"
UPDATE: main > section:nth-of-type(2) > p::text@3 "z:20" => "w:20"
```
