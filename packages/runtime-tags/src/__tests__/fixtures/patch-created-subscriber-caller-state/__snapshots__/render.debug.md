# Render `{"show":false}`
```html
<button>
  +
</button>
```

# Update `{"show":true}`
```html
<div>
  <em>
    0
  </em>
</div>
<button>
  +
</button>
```
## Change
```
INSERT: div
UPDATE: div > em::text " " => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <em>
    1
  </em>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div > em::text "0" => "1"
```

# Update `{"show":false}`
```html
<button>
  +
</button>
```
## Change
```
REMOVE: div
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true}`
```html
<div>
  <em>
    2
  </em>
</div>
<button>
  +
</button>
```
## Change
```
INSERT: div
UPDATE: div > em::text " " => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <em>
    3
  </em>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div > em::text "2" => "3"
```
