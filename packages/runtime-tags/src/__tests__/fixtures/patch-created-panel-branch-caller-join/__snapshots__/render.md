# Render `{"outer":false,"show":true,"x":"a"}`
```html
<button>
  +
</button>
```

# Update `{"outer":true,"show":true,"x":"b"}`
```html
<em>
  0:b
</em>
<button>
  +
</button>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "0:b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  1:b
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em::text "0:b" => "1:b"
```

# Update `{"outer":true,"show":true,"x":"c"}`
```html
<em>
  1:c
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em::text "1:b" => "1:c"
```

# Update `{"outer":false,"show":true,"x":"c"}`
```html
<button>
  +
</button>
```
## Change
```
REMOVE: em
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"outer":true,"show":true,"x":"d"}`
```html
<em>
  2:d
</em>
<button>
  +
</button>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "2:d"
```
