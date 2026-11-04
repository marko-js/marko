# Render `{"label":"a"}`
```html
<em>
  a
</em>
<em>
  a!
</em>
<button>
  toggle
</button>
<button>
  shown
</button>
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<em>
  a!
</em>
<button>
  toggle
</button>
<button>
  shown
</button>
```
## Change
```
REMOVE: em
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<em>
  a
</em>
<em>
  a!
</em>
<button>
  toggle
</button>
<button>
  shown
</button>
```
## Change
```
INSERT: em
UPDATE: em:nth-of-type(1)::text " " => "a"
```

# Update `{"label":"b"}`
```html
<em>
  b
</em>
<em>
  b!
</em>
<button>
  toggle
</button>
<button>
  shown
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text "a!" => "b!"
UPDATE: em:nth-of-type(1)::text "a" => "b"
```
