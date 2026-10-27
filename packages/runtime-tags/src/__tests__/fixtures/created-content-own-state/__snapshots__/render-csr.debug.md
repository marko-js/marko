# Render `{"show":false,"id":"a"}`

# Update `{"show":true,"id":"b"}`
```html
<section>
  <button>
    0 b
  </button>
</section>
```
## Change
```
INSERT: section
INSERT: section > button
UPDATE: section > button::text@2 "" => "b"
```

# Update
```js
d.querySelector("button").click();
```
```html
<section>
  <button>
    1 b
  </button>
</section>
```
## Change
```
UPDATE: section > button::text@0 "0" => "1"
```

# Update `{"show":true,"id":"c"}`
```html
<section>
  <button>
    1 c
  </button>
</section>
```
## Change
```
UPDATE: section > button::text@2 "b" => "c"
```

# Update
```js
d.querySelector("button").click();
```
```html
<section>
  <button>
    2 c
  </button>
</section>
```
## Change
```
UPDATE: section > button::text@0 "1" => "2"
```

# Update `{"show":false,"id":"d"}`
## Change
```
REMOVE: section
```

# Update `{"show":true,"id":"e"}`
```html
<section>
  <button>
    0 e
  </button>
</section>
```
## Change
```
INSERT: section
INSERT: section > button
UPDATE: section > button::text@2 "" => "e"
```

# Update
```js
d.querySelector("button").click();
```
```html
<section>
  <button>
    1 e
  </button>
</section>
```
## Change
```
UPDATE: section > button::text@0 "0" => "1"
```
