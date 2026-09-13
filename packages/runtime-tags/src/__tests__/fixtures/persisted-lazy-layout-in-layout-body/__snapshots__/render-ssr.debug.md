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
REMOVE: main > p
INSERT: main > :is(nav, article)
INSERT: main > article > h1
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
REMOVE: main > article > h1
INSERT: main > article > h1
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
REMOVE: main > nav
REMOVE: main > article
INSERT: main > p
```
