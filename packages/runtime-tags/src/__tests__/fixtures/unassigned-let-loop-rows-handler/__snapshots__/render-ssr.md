# Render `{"v":"a","items":[1,2]}`
```html
<button>
  1
</button>
<button>
  2
</button>
<p />
```

# Update
```js
d.querySelectorAll("button")[1]?.click();
```
```html
<button>
  1
</button>
<button>
  2
</button>
<p>
  a2
</p>
```
## Change
```
UPDATE: p::text "" => "a2"
```
