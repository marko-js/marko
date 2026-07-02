# Render
```html
<header>
  <div>
    <a
      href="/something"
    >
      Something
    </a>
     Test 
    <a
      href="/go-to"
    >
      Go
    </a>
  </div>
</header>
```

# Update
```html
<header>
  <div>
    <a
      href="/something"
    >
      Something
    </a>
     Test 
    <button>
      Go to
    </button>
  </div>
</header>
```
## Change
```
INSERT: header > div::text + button
REMOVE: header > div > button + a
```

# Update
```html
<header>
  <div>
    <a
      href="/something/1"
    >
      1
    </a>
    <a
      href="/something/2"
    >
      2
    </a>
    <a
      href="/something/3"
    >
      3
    </a>
    <a
      href="/something"
    >
      Something
    </a>
     Test 
    <button>
      Go to
    </button>
  </div>
</header>
```
## Change
```
INSERT: header > div > a
INSERT: header > div > a:nth-of-type(1) + a
INSERT: header > div > a:nth-of-type(2) + a
```
