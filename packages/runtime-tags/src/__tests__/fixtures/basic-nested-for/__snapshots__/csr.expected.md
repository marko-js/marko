# Render {}
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
inserted button0, #comment1, div2, div3, #comment4, #comment5, div6, div7, #comment8, #comment9
```


# Render 
container.querySelector("button").click()

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
inserted #comment11
inserted #text
inserted #comment15
inserted div12
inserted div13
inserted div14
removed #text after #comment11
inserted div4
inserted div9
div4/#text0: " " => "0.2"
div9/#text0: " " => "1.2"
div12/#text0: " " => "2.0"
div13/#text0: " " => "2.1"
div14/#text0: " " => "2.2"
```