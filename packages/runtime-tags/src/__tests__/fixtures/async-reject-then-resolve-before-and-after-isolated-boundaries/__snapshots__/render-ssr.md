# Render

# Update
```html
<div>
  Resolved A: A Value
</div>
Rejected B
<div>
  Resolved C: C Value
</div>
<button>
  Before
</button>
```
## Change
```
INSERT: div:nth-of-type(1)
INSERT: div:nth-of-type(1)::text("Resolved A: A Value")
INSERT: ::text("Rejected B")
INSERT: div:nth-of-type(2)
INSERT: div:nth-of-type(2)::text("Resolved C: C Value")
INSERT: button
INSERT: button::text("Before")
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  Resolved A: A Value
</div>
Rejected B
<div>
  Resolved C: C Value
</div>
<button>
  After
</button>
```
## Change
```
REMOVE: button::text("Before")
INSERT: button::text("After")
```
