# Render `{"on":false,"n":0}`
```html
<button>
  0
</button>
<main>
  <div
    n="0"
  />
</main>
```

# Update `{"on":true,"n":1}`
```html
<button>
  0
</button>
<main>
  <button>
    toggle
  </button>
  <p>
    <b>
      yes
    </b>
     1
  </p>
</main>
```
## Change
```
INSERT: main > button
REMOVE: main > p + div
INSERT: main > button + p
UPDATE: main > p::text@1 "" => "1"
```

# Update `{"on":true,"n":2}`
```html
<button>
  0
</button>
<main>
  <button>
    toggle
  </button>
  <p>
    <b>
      yes
    </b>
     2
  </p>
</main>
```
## Change
```
UPDATE: main > p::text@1 "1" => "2"
```

# Update
```js
d.querySelectorAll("button")[1].click();
```
```html
<button>
  0
</button>
<main>
  <button>
    toggle
  </button>
</main>
```
## Change
```
REMOVE: main > button + p
```

# Update `{"on":true,"n":3}`
