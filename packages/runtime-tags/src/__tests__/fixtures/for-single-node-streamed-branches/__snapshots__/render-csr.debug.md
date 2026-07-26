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
INSERT: ol > b:nth-of-type(1) + b
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
INSERT: ol:nth-of-type(2) > em:nth-of-type(1) + em
INSERT: ol:nth-of-type(2) > em:nth-of-type(2) + em
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<ul />
<ol />
<ol />
```
## Change
```
REMOVE: ul > :is(i, i)
REMOVE: ol:nth-of-type(1) > :is(b, b)
REMOVE: ol:nth-of-type(2) > :is(em, em, em)
```

# Update
```js
document.querySelector("button").click();
```
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
INSERT: ul > i
INSERT: ul > i:nth-of-type(1) + i
INSERT: ol:nth-of-type(1) > b
INSERT: ol:nth-of-type(1) > b:nth-of-type(1) + b
INSERT: ol:nth-of-type(2) > em
INSERT: ol:nth-of-type(2) > em:nth-of-type(1) + em
INSERT: ol:nth-of-type(2) > em:nth-of-type(2) + em
```
