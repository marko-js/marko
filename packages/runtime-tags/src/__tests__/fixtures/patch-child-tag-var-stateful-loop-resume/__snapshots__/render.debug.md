# Render
```html
<button>
  0
</button>
<p>
  r:0!
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  r:1!
</p>
<p>
  r:2!
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(1)::text@2 "0!" => "1!"
UPDATE: p:nth-of-type(2)::text@2 "" => "2!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<p>
  r:2!
</p>
<p>
  r:3!
</p>
<p>
  r:4!
</p>
```
## Change
```
UPDATE: button::text "1" => "2"
INSERT: p:nth-of-type(2) + p
UPDATE: p:nth-of-type(1)::text@2 "1!" => "2!"
UPDATE: p:nth-of-type(2)::text@2 "2!" => "3!"
UPDATE: p:nth-of-type(3)::text@2 "" => "4!"
```
