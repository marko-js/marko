# Render `{"items":[{"name":"a"}]}`
```html
<button>
  inc
</button>
<span>
  a: 0
</span>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<span>
  a: 1
</span>
```
## Change
```
UPDATE: span::text@3 "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<span>
  a: 2
</span>
```
## Change
```
UPDATE: span::text@3 "1" => "2"
```
