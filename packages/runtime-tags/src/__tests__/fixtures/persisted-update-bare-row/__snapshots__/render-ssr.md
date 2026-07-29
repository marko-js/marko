# Render `{"$global":{"persisted":true,"groups":[{"id":"g","views":{"a":"a","b":"a"}}]}}`
```html
<button>
  0
</button>
<ul>
  <li>
    a: 
    <strong>
      A
    </strong>
  </li>
  <li>
    b: 
    <strong>
      A
    </strong>
  </li>
</ul>
```

# Update `{"$global":{"persisted":true,"groups":[{"id":"g","views":{"a":"b","b":"a"}}]}}`
```html
<button>
  0
</button>
<ul>
  <li>
    a: 
    <strong>
      B
    </strong>
  </li>
  <li>
    b: 
    <strong>
      A
    </strong>
  </li>
</ul>
```
## Change
```
INSERT: ul > li:nth-of-type(1) > strong
REMOVE: ul > li:nth-of-type(1)::text@1 + strong
INSERT: ul > li:nth-of-type(2) > strong
REMOVE: ul > li:nth-of-type(2)::text@1 + strong
```

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"groups":[{"id":"g","views":{"a":"b","b":"b"}}]}}`
```html
<button>
  0
</button>
<ul>
  <li>
    a: 
    <strong>
      B
    </strong>
  </li>
  <li>
    b: 
    <strong>
      B
    </strong>
  </li>
</ul>
```
## Change
```
INSERT: strong + strong
REMOVE: ul > li:nth-of-type(2)::text@1 + strong
```
