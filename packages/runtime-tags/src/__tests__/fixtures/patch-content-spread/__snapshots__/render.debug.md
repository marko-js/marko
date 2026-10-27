# Render `{"title":"a","attrs":{"class":"c1"}}`
```html
<main>
  <div
    class="c1"
  >
    <em>
      a
    </em>
  </div>
  <section
    class="c1"
  >
    <em>
      a
    </em>
  </section>
  <button>
    0
  </button>
</main>
```

# Update `{"title":"b","attrs":{"class":"c2","data-x":1}}`
```html
<main>
  <div
    class="c2"
    data-x="1"
  >
    <em>
      b
    </em>
  </div>
  <section
    class="c2"
    data-x="1"
  >
    <em>
      b
    </em>
  </section>
  <button>
    0
  </button>
</main>
```
## Change
```
UPDATE: main > div[class] "c1" => "c2"
UPDATE: main > div[data-x] null => "1"
UPDATE: main > div > em::text "a" => "b"
UPDATE: main > section[class] "c1" => "c2"
UPDATE: main > section[data-x] null => "1"
UPDATE: main > section > em::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div
    class="c2"
    data-x="1"
  >
    <em>
      b
    </em>
  </div>
  <section
    class="c2"
    data-x="1"
  >
    <em>
      b
    </em>
  </section>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update `{"title":"c","attrs":{"class":"c3"}}`
```html
<main>
  <div
    class="c3"
  >
    <em>
      c
    </em>
  </div>
  <section
    class="c3"
  >
    <em>
      c
    </em>
  </section>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > div[data-x] "1" => null
UPDATE: main > div[class] "c2" => "c3"
UPDATE: main > div > em::text "b" => "c"
UPDATE: main > section[data-x] "1" => null
UPDATE: main > section[class] "c2" => "c3"
UPDATE: main > section > em::text "b" => "c"
```
