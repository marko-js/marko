# Render
```html
<button>
  deeper
</button>
<span>
  node1
</span>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  deeper
</button>
<span>
  node1
</span>
<span>
  node2
</span>
```
## Change
```
INSERT: span:nth-of-type(1) + span
UPDATE: span:nth-of-type(2)::text@4 "" => "2"
UPDATE: span:nth-of-type(2)::text@0 "" => "node"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  deeper
</button>
<span>
  node1
</span>
<span>
  node2
</span>
<span>
  node3
</span>
```
## Change
```
INSERT: span:nth-of-type(2) + span
UPDATE: span:nth-of-type(3)::text@4 "" => "3"
UPDATE: span:nth-of-type(3)::text@0 "" => "node"
```
