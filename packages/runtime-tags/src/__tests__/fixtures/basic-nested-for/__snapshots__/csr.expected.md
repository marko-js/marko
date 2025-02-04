# Render
```html
<button>
  Push
</button>
<!---->
<div>
  0.0
</div>
<div>
  0.1
</div>
<!---->
<!---->
<div>
  1.0
</div>
<div>
  1.1
</div>
<!---->
<!---->
```

# Mutations
```
INSERT button, #comment0, div0, div1, #comment1, #comment2, div2, div3, #comment3, #comment4
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Push
</button>
<!---->
<div>
  0.0
</div>
<div>
  0.1
</div>
<div>
  0.2
</div>
<!---->
<!---->
<div>
  1.0
</div>
<div>
  1.1
</div>
<div>
  1.2
</div>
<!---->
<!---->
<div>
  2.0
</div>
<div>
  2.1
</div>
<div>
  2.2
</div>
<!---->
<!---->
```

# Mutations
```
INSERT #comment4, #text, #comment5
INSERT div6
INSERT div7
INSERT div8
REMOVE #text after #comment4
INSERT div2
INSERT div5
UPDATE div6/#text " " => "2.0"
UPDATE div7/#text " " => "2.1"
UPDATE div8/#text " " => "2.2"
UPDATE div2/#text " " => "0.2"
UPDATE div5/#text " " => "1.2"
```