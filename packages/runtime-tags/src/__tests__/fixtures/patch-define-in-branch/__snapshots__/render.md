# Render `{"show":false,"suffix":"1"}`
```html
<ul />
```

# Update `{"show":true,"suffix":"1"}`
```html
<ul>
  <li>
    a: 1
  </li>
  <li>
    b: 1
  </li>
</ul>
```
## Change
```
INSERT: ul > :is(li, li)
```

# Update `{"show":true,"suffix":"2"}`
```html
<ul>
  <li>
    a: 2
  </li>
  <li>
    b: 2
  </li>
</ul>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@0 "a" => "a"
UPDATE: ul > li:nth-of-type(1)::text@3 "1" => "2"
UPDATE: ul > li:nth-of-type(2)::text@0 "b" => "b"
UPDATE: ul > li:nth-of-type(2)::text@3 "1" => "2"
```

# Update `{"show":false,"suffix":"2"}`
```html
<ul />
```
## Change
```
REMOVE: ul > li
REMOVE: ul > li
```
