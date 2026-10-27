# Render `{"show":false}`
```html
<button>
  +
</button>
```

# Update `{"show":true}`
```html
<section>
  <em>
    0
  </em>
</section>
<button>
  +
</button>
```
## Change
```
INSERT: section
UPDATE: section > em::text " " => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <em>
    1
  </em>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "0" => "1"
```

# Update `{"show":false}`
```html
<button>
  +
</button>
```
## Change
```
REMOVE: section
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true}`
```html
<section>
  <em>
    2
  </em>
</section>
<button>
  +
</button>
```
## Change
```
INSERT: section
UPDATE: section > em::text " " => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <em>
    3
  </em>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > em::text "2" => "3"
```
