# Render `{"items":["a","b","c"]}`
```html
<ul />
<button>
  inc
</button>
```

# Update
```html
<ul>
  <li>
    0: a (0)
  </li>
</ul>
<button>
  inc
</button>
```
## Change
```
INSERT: ul > li
UPDATE: ul > li::text@3 "" => "a"
UPDATE: ul > li::text@6 "" => "0"
UPDATE: ul > li::text@0 "" => "0"
```

# Update
```html
<ul>
  <li>
    0: a (0)
  </li>
  <li>
    1: b (0)
  </li>
</ul>
<button>
  inc
</button>
```
## Change
```
INSERT: ul > li:nth-of-type(1) + li
UPDATE: ul > li:nth-of-type(2)::text@3 "" => "b"
UPDATE: ul > li:nth-of-type(2)::text@6 "" => "0"
UPDATE: ul > li:nth-of-type(2)::text@0 "" => "1"
```

# Update
```html
<ul>
  <li>
    0: a (0)
  </li>
  <li>
    1: b (0)
  </li>
  <li>
    2: c (0)
  </li>
</ul>
<button>
  inc
</button>
```
## Change
```
INSERT: ul > li:nth-of-type(2) + li
UPDATE: ul > li:nth-of-type(3)::text@3 "" => "c"
UPDATE: ul > li:nth-of-type(3)::text@6 "" => "0"
UPDATE: ul > li:nth-of-type(3)::text@0 "" => "2"
```

# Update `{"items":["c","a"]}`

# Update
```html
<ul>
  <li>
    0: c (0)
  </li>
  <li>
    1: b (0)
  </li>
  <li>
    2: c (0)
  </li>
</ul>
<button>
  inc
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@3 "a" => "c"
```

# Update
```html
<ul>
  <li>
    0: c (0)
  </li>
  <li>
    1: a (0)
  </li>
  <li>
    2: c (0)
  </li>
</ul>
<button>
  inc
</button>
```
## Change
```
UPDATE: ul > li:nth-of-type(2)::text@3 "b" => "a"
```

# Update
```html
<ul>
  <li>
    0: c (0)
  </li>
  <li>
    1: a (0)
  </li>
</ul>
<button>
  inc
</button>
```
## Change
```
REMOVE: ul > li:nth-of-type(2) + li
```
