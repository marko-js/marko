# Render `{"page":0}`
```html
<header>
  site
</header>
<main>
  <p>
    home
  </p>
</main>
```

# Update `{"page":1}`
```html
<header>
  site
</header>
<main>
  <nav>
    docs
  </nav>
  <article>
    <h1>
      A
    </h1>
  </article>
</main>
```
## Change
```
INSERT: main > :is(nav, article)
REMOVE: main > article + p
```

# Update `{"page":2}`
```html
<header>
  site
</header>
<main>
  <nav>
    docs
  </nav>
  <article>
    <h1>
      B
    </h1>
  </article>
</main>
```
## Change
```
INSERT: main > article > h1
REMOVE: main > article > h1 + h1
```

# Update `{"page":0}`
```html
<header>
  site
</header>
<main>
  <p>
    home
  </p>
</main>
```
## Change
```
INSERT: main > p
REMOVE: main > p + nav
REMOVE: main > p + article
```
