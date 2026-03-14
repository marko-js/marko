# Render `{"$global":{"count":0}}`

```html
<div>
  0
</div>
<div>
  1
</div>
<button>
  0,1
</button>
```

# Mutations
```
INSERT div0, div1, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  2
</div>
<div>
  2
</div>
<button>
  2,2
</button>
```

# Mutations
```
UPDATE div1/#text "1" => "2"
UPDATE div0/#text "0" => "2"
UPDATE button/#text "0,1" => "2,2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  2
</div>
<div>
  2
</div>
<button>
  2,2
</button>
```


# Render
```js
container.querySelector("button").click();
```
```html
<div>
  2
</div>
<div>
  2
</div>
<button>
  2,2
</button>
```
