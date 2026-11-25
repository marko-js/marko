# Render
```html
<span>
  first 1 
</span>
<span>
  first {"n":1}
</span>
<span>
  first 
</span>
<span>
  second 
</span>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  first 2 2
</span>
<span>
  first {"n":2}
</span>
<span>
  first 2
</span>
<span>
  second 2
</span>
<button>
  inc
</button>
```
## Change
```
UPDATE: span:nth-of-type(1)::text@6 "1" => "2"
UPDATE: span:nth-of-type(1)::text@8 "" => "2"
UPDATE: span:nth-of-type(2)::text@6 "{\"n\":1}" => "{\"n\":2}"
UPDATE: span:nth-of-type(3)::text@6 "" => "2"
UPDATE: span:nth-of-type(4)::text@7 "" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  first 3 3
</span>
<span>
  first {"n":3}
</span>
<span>
  first 3
</span>
<span>
  second 3
</span>
<button>
  inc
</button>
```
## Change
```
UPDATE: span:nth-of-type(1)::text@6 "2" => "3"
UPDATE: span:nth-of-type(1)::text@8 "2" => "3"
UPDATE: span:nth-of-type(2)::text@6 "{\"n\":2}" => "{\"n\":3}"
UPDATE: span:nth-of-type(3)::text@6 "2" => "3"
UPDATE: span:nth-of-type(4)::text@7 "2" => "3"
```
