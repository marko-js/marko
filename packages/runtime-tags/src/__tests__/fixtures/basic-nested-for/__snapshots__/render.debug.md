# Render
```html
<button>
  Push
</button>
<div>
  0.0
</div>
<div>
  0.1
</div>
<div>
  1.0
</div>
<div>
  1.1
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Push
</button>
<div>
  0.0
</div>
<div>
  0.1
</div>
<div>
  0.2
</div>
<div>
  1.0
</div>
<div>
  1.1
</div>
<div>
  1.2
</div>
<div>
  2.0
</div>
<div>
  2.1
</div>
<div>
  2.2
</div>
```
## Change
```
INSERT: div:nth-of-type(3)
UPDATE: div:nth-of-type(3)::text " " => "0.2"
INSERT: div:nth-of-type(6)
UPDATE: div:nth-of-type(6)::text " " => "1.2"
INSERT: div:nth-of-type(7)
UPDATE: div:nth-of-type(7)::text " " => "2.0"
INSERT: div:nth-of-type(8)
UPDATE: div:nth-of-type(8)::text " " => "2.1"
INSERT: div:nth-of-type(9)
UPDATE: div:nth-of-type(9)::text " " => "2.2"
```
