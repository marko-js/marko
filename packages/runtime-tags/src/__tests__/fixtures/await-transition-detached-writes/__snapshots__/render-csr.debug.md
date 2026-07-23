# Render
```html
<button>
  inc
</button>
<b>
  outside 0
</b>
<div />
```

# Update
```html
<button>
  inc
</button>
<b>
  outside 0
</b>
<div>
  <span>
    #0
  </span>
  <p>
    R0
  </p>
</div>
```
## Change
```
INSERT: div > :is(span, p)
UPDATE: div > p::text " " => "R0"
UPDATE: div > span::text@1 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<b>
  outside 1
</b>
<div>
  <span>
    #0
  </span>
  <p>
    R0
  </p>
</div>
```
## Change
```
UPDATE: b::text@8 "0" => "1"
```

# Update
```html
<button>
  inc
</button>
<b>
  outside 1
</b>
<div />
```
## Change
```
REMOVE: div > span
REMOVE: div > p
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<b>
  outside 2
</b>
<div />
```
## Change
```
UPDATE: b::text@8 "1" => "2"
```

# Update
```html
<button>
  inc
</button>
<b>
  outside 2
</b>
<div>
  <span>
    #2
  </span>
  <p>
    R2
  </p>
</div>
```
## Change
```
INSERT: div > :is(span, p)
```
