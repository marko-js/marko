# Render `{"on":false,"items":[1],"w":"a"}`
```html
<main>
  <div
    items="1"
    w="a"
  />
</main>
```

# Update `{"on":true,"items":[1,2],"w":"b"}`
```html
<main>
  <p>
    1 b
  </p>
  <p>
    2 b
  </p>
</main>
```
## Change
```
REMOVE: main > p:nth-of-type(2) + div
INSERT: main > p
INSERT: main > p:nth-of-type(1) + p
UPDATE: main > p:nth-of-type(1)::text@2 "" => "b"
UPDATE: main > p:nth-of-type(2)::text@2 "" => "b"
```

# Update `{"on":true,"items":[1,2,3],"w":"c"}`
```html
<main>
  <p>
    1 c
  </p>
  <p>
    2 c
  </p>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(1)::text@2 "b" => "c"
UPDATE: main > p:nth-of-type(2)::text@2 "b" => "c"
```
