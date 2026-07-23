# Render `{"$global":{"persisted":true,"view":"home","user":"ada"}}`
```html
<section
  class="frame"
>
  <button
    class="count"
  >
    clicked 0
  </button>
  <aside
    class="rail"
  >
    rail
  </aside>
  <main
    class="page"
  >
    <p
      class="home"
    >
      welcome home
    </p>
  </main>
</section>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<section
  class="frame"
>
  <button
    class="count"
  >
    clicked 1
  </button>
  <aside
    class="rail"
  >
    rail
  </aside>
  <main
    class="page"
  >
    <p
      class="home"
    >
      welcome home
    </p>
  </main>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"dashboard","user":"ada"}}`
```html
<section
  class="frame"
>
  <button
    class="count"
  >
    clicked 1
  </button>
  <aside
    class="rail"
  >
    rail
  </aside>
  <main
    class="page"
  >
    <button
      class="bump"
    >
      tally 0
    </button>
    <p
      class="greeting"
    >
      hello ada
    </p>
  </main>
</section>
```
## Change
```
INSERT: .page > :is(.bump, .greeting)
REMOVE: .page > p
UPDATE: .greeting::text@6 "" => "ada"
UPDATE: .bump::text@6 "" => "0"
```

# Update
```js
document.querySelector("button.bump").click();
```
```html
<section
  class="frame"
>
  <button
    class="count"
  >
    clicked 1
  </button>
  <aside
    class="rail"
  >
    rail
  </aside>
  <main
    class="page"
  >
    <button
      class="bump"
    >
      tally 1
    </button>
    <p
      class="greeting"
    >
      hello ada
    </p>
  </main>
</section>
```
## Change
```
UPDATE: .bump::text@6 "0" => "1"
```

# Update `{"$global":{"persisted":true,"view":"dashboard","user":"grace"}}`
```html
<section
  class="frame"
>
  <button
    class="count"
  >
    clicked 1
  </button>
  <aside
    class="rail"
  >
    rail
  </aside>
  <main
    class="page"
  >
    <button
      class="bump"
    >
      tally 1
    </button>
    <p
      class="greeting"
    >
      hello grace
    </p>
  </main>
</section>
```
## Change
```
UPDATE: .greeting::text@6 "ada" => "grace"
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"home","user":"grace"}}`
```html
<section
  class="frame"
>
  <button
    class="count"
  >
    clicked 1
  </button>
  <aside
    class="rail"
  >
    rail
  </aside>
  <main
    class="page"
  >
    <p
      class="home"
    >
      welcome home
    </p>
  </main>
</section>
```
## Change
```
INSERT: p + .home
REMOVE: .page > button
REMOVE: .page > p
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<section
  class="frame"
>
  <button
    class="count"
  >
    clicked 2
  </button>
  <aside
    class="rail"
  >
    rail
  </aside>
  <main
    class="page"
  >
    <p
      class="home"
    >
      welcome home
    </p>
  </main>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
