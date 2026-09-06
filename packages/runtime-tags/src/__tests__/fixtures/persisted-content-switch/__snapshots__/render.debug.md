# Render `{"kind":"a","inner":"b"}`
```html
<main>
  <section>
    <b>
      A
    </b>
  </section>
  <section>
    <i>
      B:b
    </i>
  </section>
  <button>
    +
  </button>
</main>
```

# Update `{"kind":"b","inner":"b"}`
```html
<main>
  <section>
    <i>
      B:b
    </i>
  </section>
  <section>
    <i>
      B:b
    </i>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > section:nth-of-type(1) > b
INSERT: main > section:nth-of-type(1) > i
UPDATE: main > section:nth-of-type(1) > i::text@2 "" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <i>
      B:b
    </i>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > section + section
```

# Update `{"inner":"a"}`
```html
<main>
  <section />
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > section > i
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section />
  <section>
    <b>
      A
    </b>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > section:nth-of-type(1) + section
INSERT: main > section:nth-of-type(2) > b
```

# Update `{"kind":"b"}`
```html
<main>
  <section>
    <i>
      B:b
    </i>
  </section>
  <section />
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > section:nth-of-type(1) > i
UPDATE: main > section:nth-of-type(1) > i::text@2 "" => "b"
REMOVE: main > section:nth-of-type(2) > b
```

# Update `{"kind":"a","inner":"a"}`
```html
<main>
  <section>
    <b>
      A
    </b>
  </section>
  <section>
    <b>
      A
    </b>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > section:nth-of-type(1) > i
INSERT: main > section:nth-of-type(1) > b
INSERT: main > section:nth-of-type(2) > b
```
