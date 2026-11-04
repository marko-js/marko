# Render `{"label":"one","on":true}`
```html
<!--one 0-->
<p>
  one
</p>
<button>
  +
</button>
```

# Update `{"label":"two","on":true}`
```html
<!--two 0-->
<p>
  two
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "one" => "two"
UPDATE: #comment "one 0" => "two 0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<!--two 1-->
<p>
  two
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: #comment "two 0" => "two 1"
```

# Update `{"label":"three","on":false}`
```html
<!--three 1-->
<button>
  +
</button>
```
## Change
```
UPDATE: #document-fragment > p::text "two" => "three"
REMOVE: #comment + p
UPDATE: #comment "two 1" => "three 1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<!--three 2-->
<button>
  +
</button>
```
## Change
```
UPDATE: #comment "three 1" => "three 2"
```

# Update `{"label":"four","on":true}`
```html
<!--four 2-->
<p>
  four
</p>
<button>
  +
</button>
```
## Change
```
INSERT: #comment + p
UPDATE: #comment "three 2" => "four 2"
```
