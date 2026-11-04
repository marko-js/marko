# Render `{"label":"a"}`
```html
<button>
  B
</button>
<p>
  ok
</p>
<i>
  B a
</i>
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  A
</button>
<p>
  ok
</p>
<em>
  A a
</em>
```
## Change
```
UPDATE: button::text "B" => "A"
INSERT: p + em
REMOVE: em + i
UPDATE: em::text@2 "" => "a"
```
