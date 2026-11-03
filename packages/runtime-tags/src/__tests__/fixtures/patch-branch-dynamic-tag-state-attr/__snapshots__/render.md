# Render `{"show":false,"on":true}`
```html
<button>
  +
</button>
```

# Update `{"show":true,"on":true}`
```html
<section>
  <p
    data-n="0"
  >
    x
  </p>
</section>
<button>
  +
</button>
```
## Change
```
INSERT: section
INSERT: section > p
UPDATE: section > p[data-n] null => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<section>
  <p
    data-n="1"
  >
    x
  </p>
</section>
<button>
  +
</button>
```
## Change
```
UPDATE: section > p[data-n] "0" => "1"
```

# Update `{"show":true,"on":false}`
```html
<section>
  <div
    data-n="1"
  >
    x
  </div>
</section>
<button>
  +
</button>
```
## Change
```
INSERT: section > div
REMOVE: section > div + p
UPDATE: section > div[data-n] null => "1"
```

# Update `{"show":false,"on":false}`
```html
<button>
  +
</button>
```
## Change
```
REMOVE: section
```

# Update `{"show":true,"on":true}`
```html
<section>
  <p
    data-n="1"
  >
    x
  </p>
</section>
<button>
  +
</button>
```
## Change
```
INSERT: section
INSERT: section > p
UPDATE: section > p[data-n] null => "1"
```
