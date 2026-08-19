# Render `{"items":[{"tag":"div"},{"tag":"span"}]}`
```html
<ul>
  <li>
    <div />
  </li>
  <li>
    <span />
  </li>
</ul>
```

# Update `{"items":[{"tag":"em"},{"tag":"span"},{"tag":"b"}]}`
```html
<ul>
  <li>
    <em />
  </li>
  <li>
    <span />
  </li>
  <li>
    <b />
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(1) > em
REMOVE: ul > li:nth-of-type(1) > em + div
INSERT: ul > li:nth-of-type(2) + li
```

# Update `{"items":[{"tag":"i"}]}`
```html
<ul>
  <li>
    <i />
  </li>
</ul>
```
## Change
```
INSERT: ul > li > i
REMOVE: ul > li > i + em
REMOVE: ul > li + li
REMOVE: ul > li + li
```

# Update `{"items":[]}`
```html
<ul />
```
## Change
```
REMOVE: ul > li
```

# Update `{"items":[{"tag":"u"},{"tag":"s"}]}`
```html
<ul>
  <li>
    <u />
  </li>
  <li>
    <s />
  </li>
</ul>
```
## Change
```
INSERT: ul > li
INSERT: ul > li:nth-of-type(1) + li
```
