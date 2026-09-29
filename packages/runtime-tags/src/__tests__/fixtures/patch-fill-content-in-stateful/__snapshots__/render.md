# Render `{"msg":"a"}`
```html
<button>
  inc
</button>
<div>
  <span>
    a:0
  </span>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div>
  <span>
    a:1
  </span>
</div>
```
## Change
```
UPDATE: div > span::text "a:0" => "a:1"
```

# Update `{"msg":"b"}`
```html
<button>
  inc
</button>
<div>
  <span>
    b:1
  </span>
</div>
```
## Change
```
UPDATE: div > span::text "a:1" => "b:1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
```
## Change
```
REMOVE: button + div
```

# Update `{"msg":"c"}`
