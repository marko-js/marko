# Render `{"title":"a","items":[{"id":1,"upper":true},{"id":2,"upper":false}]}`
```html
<output>
  Ua
</output>
<output>
  la
</output>
<button>
  noop
</button>
```
## Console
```
LOG "run" "Ua"
LOG "run" "la"
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"title":"b","items":[{"id":1,"upper":false},{"id":2,"upper":false}]}`
```html
<output>
  lb
</output>
<output>
  lb
</output>
<button>
  noop
</button>
```
## Change
```
REMOVE: output:nth-of-type(1)::text("Ua")
INSERT: output:nth-of-type(1)::text("lb")
REMOVE: output:nth-of-type(2)::text("la")
INSERT: output:nth-of-type(2)::text("lb")
```
## Console
```
LOG "run" "lb"
LOG "run" "lb"
```

# Update `{"title":"b","items":[{"id":2,"upper":true},{"id":3,"upper":false}]}`
```html
<output>
  Ub
</output>
<output>
  lb
</output>
<button>
  noop
</button>
```
## Change
```
REMOVE: output
INSERT: output:nth-of-type(1) + output
REMOVE: output:nth-of-type(1)::text("lb")
INSERT: output:nth-of-type(1)::text("Ub")
INSERT: output:nth-of-type(2)::text("lb")
```
## Console
```
LOG "run" "Ub"
LOG "run" "lb"
```
