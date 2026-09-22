# Render `{"promise":{}}`
```html
<button>
  drop
</button>
<div>
  <em>
    1:a
  </em>
</div>
<div>
  <em>
    2:a
  </em>
</div>
```

# Update `{"promise":{"value":"b"}}`
```html
<button>
  drop
</button>
<div />
<div />
```
## Change
```
REMOVE: div:nth-of-type(1) > em
REMOVE: div:nth-of-type(2) > em
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  drop
</button>
<div />
```
## Change
```
REMOVE: button + div
```

# Update `{"promise":{"value":"b"}}`
```html
<button>
  drop
</button>
<div>
  <em>
    2:b
  </em>
</div>
```
## Change
```
INSERT: div > em
```
