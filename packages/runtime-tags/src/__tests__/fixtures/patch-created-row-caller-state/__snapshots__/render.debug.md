# Render `{"items":[]}`
```html
<button>
  +
</button>
```

# Update `{"items":["a"]}`
```html
<em>
  a:0
</em>
<button>
  +
</button>
```
## Change
```
INSERT: em
UPDATE: em::text@2 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  a:1
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em::text@2 "0" => "1"
```

# Update `{"items":["a","b"]}`
```html
<em>
  a:1
</em>
<em>
  b:1
</em>
<button>
  +
</button>
```
## Change
```
INSERT: em:nth-of-type(1) + em
UPDATE: em:nth-of-type(2)::text@2 "" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  a:2
</em>
<em>
  b:2
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text@2 "1" => "2"
UPDATE: em:nth-of-type(2)::text@2 "1" => "2"
```

# Update `{"items":["c"]}`
```html
<em>
  c:2
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em::text@0 "a" => "c"
REMOVE: em + em
```
