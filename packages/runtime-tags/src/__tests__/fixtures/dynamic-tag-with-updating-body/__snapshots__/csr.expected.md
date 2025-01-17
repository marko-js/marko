# Render {}
```html
<!---->
<div>
  <button
    id="count"
  >
    0
  </button>
</div>
<button
  id="changeTag"
/>
```

# Mutations
```
inserted #comment0, div1, button2
```


# Render 
container.querySelector("#count").click()

```html
<!---->
<div>
  <button
    id="count"
  >
    1
  </button>
</div>
<button
  id="changeTag"
/>
```

# Mutations
```
div1/button0/#text0: "0" => "1"
```


# Render 
container.querySelector("#changeTag").click()

```html
<!---->
<span>
  <button
    id="count"
  >
    0
  </button>
</span>
<button
  id="changeTag"
/>
```

# Mutations
```
inserted span1
removed div after span1
inserted span1/button0
span1/button0/#text0: " " => "0"
```


# Render 
container.querySelector("#count").click()

```html
<!---->
<span>
  <button
    id="count"
  >
    1
  </button>
</span>
<button
  id="changeTag"
/>
```

# Mutations
```
span1/button0/#text0: "0" => "1"
```