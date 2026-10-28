# Render `{"v":"a","w":"1"}`
```html
<button>
  add
</button>
<p>
  0:a 1
</p>
```

# Update `{"v":"b","w":"2"}`
```html
<button>
  add
</button>
<p>
  0:a 2
</p>
```
## Change
```
UPDATE: p::text@4 "1" => "2"
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  add
</button>
<p>
  0:a 2
</p>
<p>
  1:b 2
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + p
UPDATE: p:nth-of-type(2)::text@2 "" => "b"
UPDATE: p:nth-of-type(2)::text@4 "" => "2"
```

# Update `{"v":"c","w":"3"}`
```html
<button>
  add
</button>
<p>
  0:a 3
</p>
<p>
  1:b 3
</p>
```
## Change
```
UPDATE: p:nth-of-type(1)::text@4 "2" => "3"
UPDATE: p:nth-of-type(2)::text@4 "2" => "3"
```
