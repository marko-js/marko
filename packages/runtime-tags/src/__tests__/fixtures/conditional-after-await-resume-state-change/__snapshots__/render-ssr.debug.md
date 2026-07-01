# Render
```html
<header>
  <div />
</header>
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
      href="/something/4"
    >
      4
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
INSERT: header > div > a:nth-of-type(1)::text("1")
INSERT: header > div > a:nth-of-type(1) + a
INSERT: header > div > a:nth-of-type(2)::text("2")
INSERT: header > div > a:nth-of-type(2) + a
INSERT: header > div > a:nth-of-type(3)::text("3")
INSERT: header > div > a:nth-of-type(3) + a
INSERT: header > div > a:nth-of-type(4)::text("4")
INSERT: header > div > a:nth-of-type(4) + a
INSERT: header > div > a:nth-of-type(5)::text("Something")
INSERT: header > div > a:nth-of-type(5) + ::text(" Test ")
INSERT: header > div::text + a
INSERT: a::text("Go")
INSERT: header > div::text + button
REMOVE: header > div > button + a
```
