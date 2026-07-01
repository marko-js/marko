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
