# Render {}
```html
<button />
<div>
  1 2 3
</div>
<div>
  <!---->
  1 2 3
  <!---->
</div>
```

# Mutations
```
inserted button0, div1, div2
```


# Render 
container.querySelector("button").click()

```html
<button />
<div>
  1 2 4
</div>
<div>
  <!---->
  1 2 4
  <!---->
</div>
```

# Mutations
```
div1/#text4: "3" => "4"
div2/#text5: "3" => "4"
```