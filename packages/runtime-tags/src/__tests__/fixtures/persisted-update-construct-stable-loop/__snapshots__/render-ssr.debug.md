# Render `{"$global":{"persisted":true,"groups":[{"id":"group","views":{"one":"a","two":"a"}}]}}`
```html
<button>
  0
</button>
<ul>
  <li>
    one: 
    <strong>
      A
    </strong>
  </li>
  <li>
    two: 
    <strong>
      A
    </strong>
  </li>
</ul>
```

# Update `{"$global":{"persisted":true,"groups":[{"id":"group","views":{"one":"b","two":"a"}}]}}`
```html
<button>
  0
</button>
<ul>
  <li>
    one: 
    <strong>
      B
    </strong>
  </li>
  <li>
    two: 
    <strong>
      A
    </strong>
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(1) > strong
REMOVE: ul > li:nth-of-type(1)::text@3 + strong
INSERT: ul > li:nth-of-type(2) > strong
REMOVE: ul > li:nth-of-type(2)::text@3 + strong
```

# Update `{"$global":{"persisted":true,"groups":[{"id":"group","views":{"one":"b","two":"b"}}]}}`
```html
<button>
  0
</button>
<ul>
  <li>
    one: 
    <strong>
      B
    </strong>
  </li>
  <li>
    two: 
    <strong>
      B
    </strong>
  </li>
</ul>
```
## Change
```
INSERT: strong + strong
REMOVE: ul > li:nth-of-type(1)::text@3 + strong
INSERT: strong + strong
REMOVE: ul > li:nth-of-type(2)::text@3 + strong
```
