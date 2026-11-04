# Render `{"a":"a","c":"c","d":"d"}`
```html
<button>
  b
</button>
<div>
  abc
</div>
<div>
  ad
</div>
```

# Update `{"a":"A","c":"c","d":"d"}`
```html
<button>
  b
</button>
<div>
  Abc
</div>
<div>
  Ad
</div>
```
## Change
```
UPDATE: div:nth-of-type(2)::text "ad" => "Ad"
UPDATE: div:nth-of-type(1)::text "abc" => "Abc"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b
</button>
<div>
  Ab!c
</div>
<div>
  Ad
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "Abc" => "Ab!c"
```

# Update `{"a":"A","c":"C","d":"D"}`
```html
<button>
  b
</button>
<div>
  Ab!C
</div>
<div>
  AD
</div>
```
## Change
```
UPDATE: div:nth-of-type(2)::text "Ad" => "AD"
UPDATE: div:nth-of-type(1)::text "Ab!c" => "Ab!C"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b
</button>
<div>
  Ab!!C
</div>
<div>
  AD
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "Ab!C" => "Ab!!C"
```
