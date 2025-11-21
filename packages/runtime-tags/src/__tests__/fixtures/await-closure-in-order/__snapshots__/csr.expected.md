# Render
```html
<button>
  1
</button>
<span>
  1
</span>
<!---->
```

# Mutations
```
INSERT button, #text, span, #comment
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<span>
  2
</span>
<!---->
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE span/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  3
</button>
<span>
  3
</span>
<!---->
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE span/#text "2" => "3"
```

# Render ASYNC
```html
<button>
  3
</button>
<span>
  Hello
</span>
<span>
  3
</span>
<!---->
```

# Mutations
```
INSERT span0
REMOVE #text after span0
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
<span>
  Hello
</span>
<span>
  4
</span>
<!---->
```

# Mutations
```
UPDATE button/#text "3" => "4"
UPDATE span1/#text "3" => "4"
```