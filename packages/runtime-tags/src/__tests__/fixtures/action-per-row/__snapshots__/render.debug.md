# Render `{"items":[{"id":"a"},{"id":"b"}]}`
```html
<button>
  a idle
</button>
<button>
  b idle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  a pending
</button>
<button>
  b idle
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@2 "idle" => "pending"
```

# Update
```html
<button>
  a idle
</button>
<button>
  b idle
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@2 "pending" => "idle"
```
