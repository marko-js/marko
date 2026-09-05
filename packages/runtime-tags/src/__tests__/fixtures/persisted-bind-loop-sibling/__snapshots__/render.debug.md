# Render `{"title":"a","show":false}`
```html
<p>
  x:0
</p>
<p>
  y:0
</p>
```

# Update `{"title":"b","show":true}`
```html
<p>
  x:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<p>
  y:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@0 "x" => "x"
INSERT: p:nth-of-type(1) + :is(span, button)
UPDATE: p:nth-of-type(2)::text@0 "y" => "y"
INSERT: p:nth-of-type(2) + :is(span, button)
UPDATE: span:nth-of-type(1)::text@5 "" => "0"
UPDATE: span:nth-of-type(2)::text@5 "" => "0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  x:1
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
<p>
  y:0
</p>
<span>
  Seen 0
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@2 "0" => "1"
```
