# Render `{"kind":"div"}`
```html
<main>
  <section>
    <div />
  </section>
  <section>
    <div />
  </section>
  <button>
    +
  </button>
</main>
```

# Update `{"kind":"banner"}`
```html
<main>
  <section>
    <b>
      banner
    </b>
  </section>
  <section>
    <b>
      banner
    </b>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > section:nth-of-type(1) > b
REMOVE: main > section:nth-of-type(1) > b + div
INSERT: main > section:nth-of-type(2) > b
REMOVE: main > section:nth-of-type(2) > b + div
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <b>
      banner
    </b>
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

# Update `{"kind":"span"}`
```html
<main>
  <section>
    <span />
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > section > span
REMOVE: main > section > span + b
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <section>
    <span />
  </section>
  <section>
    <span />
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > section:nth-of-type(1) + section
INSERT: main > section:nth-of-type(2) > span
```

# Update `{"kind":"banner"}`
```html
<main>
  <section>
    <b>
      banner
    </b>
  </section>
  <section>
    <b>
      banner
    </b>
  </section>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > section:nth-of-type(1) > b
REMOVE: main > section:nth-of-type(1) > b + span
INSERT: main > section:nth-of-type(2) > b
REMOVE: main > section:nth-of-type(2) > b + span
```

# Update `{}`
```html
<main>
  <section />
  <section />
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > section:nth-of-type(1) > b
REMOVE: main > section:nth-of-type(2) > b
```
