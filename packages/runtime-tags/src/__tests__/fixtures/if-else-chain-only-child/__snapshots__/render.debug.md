# Render
```html
<button>
  0
</button>
<div>
  <p>
    a
  </p>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<div>
  <i>
    b
  </i>
</div>
```
## Change
```
UPDATE: button::text "0" => "1"
REMOVE: div > p
INSERT: div > i
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<div>
  <b>
    c
  </b>
</div>
```
## Change
```
UPDATE: button::text "1" => "2"
REMOVE: div > i
INSERT: div > b
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  3
</button>
<div>
  <p>
    a
  </p>
</div>
```
## Change
```
UPDATE: button::text "2" => "3"
REMOVE: div > b
INSERT: div > p
```
