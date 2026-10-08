# Render `{"a":{}}`
```html
<main>
  <div>
    <b>
      a1
    </b>
  </div>
  <button>
    x
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"a":{"value":{}}}`
```html
<main>
  <i>
    loading
  </i>
  <button>
    x
  </button>
</main>
```
## Change
```
INSERT: main > i
REMOVE: main > i + div
```

# Update
```js
;
```

# Update `{"a":{"value":{}}}`

# Update
```js
(document.defaultView).__resolve("c");
```
```html
<main>
  <div>
    <s>
      boom
    </s>
    <em>
      c
    </em>
  </div>
  <button>
    x
  </button>
</main>
```
## Change
```
INSERT: main > div
REMOVE: main > div + i
```
