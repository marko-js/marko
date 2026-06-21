# Render
```html
<button>
  n=2
</button>
<button>
  n=3
</button>
<button>
  n=4
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  n=2
</button>
<button>
  n=3
</button>
<button>
  n=4
</button>
<button>
  n=5
</button>
```
## Change
```
INSERT: button:nth-of-type(3) + button
UPDATE: button:nth-of-type(4)::text@2 "" => "5"
```
