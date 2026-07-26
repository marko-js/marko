# Render `{"head":["h1","h2"],"mid":["m1","m2"],"tail":["t1","t2","t3"]}`
```html
<button>
  toggle
</button>
<ul>
  <i>
    h1
  </i>
  <i>
    h2
  </i>
</ul>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button>
  toggle
</button>
<ul>
  <i>
    h1
  </i>
  <i>
    h2
  </i>
</ul>
<ol>
  <b>
    m1
  </b>
  <b>
    m2
  </b>
</ol>
```
## Change
```
INSERT: ul + ol
INSERT: ol > b
INSERT: ol > b:nth-of-type(1)::text("m1")
INSERT: ol > b:nth-of-type(1) + b
INSERT: ol > b:nth-of-type(2)::text("m2")
```

# Update
```html
<button>
  toggle
</button>
<ul>
  <i>
    h1
  </i>
  <i>
    h2
  </i>
</ul>
<ol>
  <b>
    m1
  </b>
  <b>
    m2
  </b>
</ol>
<ol>
  <em>
    t1
  </em>
  <em>
    t2
  </em>
  <em>
    t3
  </em>
</ol>
```
## Change
```
INSERT: ol:nth-of-type(1) + ol
INSERT: ol:nth-of-type(2) > em
INSERT: ol:nth-of-type(2) > em:nth-of-type(1)::text("t1")
INSERT: ol:nth-of-type(2) > em:nth-of-type(1) + em
INSERT: ol:nth-of-type(2) > em:nth-of-type(2)::text("t2")
INSERT: ol:nth-of-type(2) > em:nth-of-type(2) + em
INSERT: ol:nth-of-type(2) > em:nth-of-type(3)::text("t3")
```
