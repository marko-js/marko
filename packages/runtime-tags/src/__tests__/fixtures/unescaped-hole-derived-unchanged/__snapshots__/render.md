# Render
```html
<div>
  <b>
    small
  </b>
</div>
<p>
  <b>
    small
  </b>
</p>
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <i>
    big
  </i>
</div>
<p>
  <i>
    big
  </i>
</p>
<button>
  1
</button>
```
## Change
```
REMOVE: div > b
INSERT: div > i
REMOVE: p > b
INSERT: p > i
UPDATE: button::text "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <i>
    big
  </i>
</div>
<p>
  <i>
    big
  </i>
</p>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```
