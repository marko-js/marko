# Render `{"label":"one","on":true}`
```html
<div>
  one:0
</div>
<button>
  +
</button>
```

# Update `{"label":"two","on":true}`
```html
<div>
  two:0
</div>
<button>
  +
</button>
```
## Change
```
REMOVE: div::text("one:0")
INSERT: div::text("two:0")
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  two:1
</div>
<button>
  +
</button>
```
## Change
```
REMOVE: div::text("two:0")
INSERT: div::text("two:1")
```

# Update `{"label":"three","on":false}`
```html
<div>
  three:1
</div>
<button>
  +
</button>
```
## Change
```
REMOVE: div::text("two:1")
INSERT: div::text("three:1")
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  three:2
</div>
<button>
  +
</button>
```
## Change
```
REMOVE: div::text("three:1")
INSERT: div::text("three:2")
```

# Update `{"label":"four","on":true}`
```html
<div>
  four:2
</div>
<button>
  +
</button>
```
## Change
```
REMOVE: div::text("three:2")
INSERT: div::text("four:2")
```
