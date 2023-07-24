# Render {}
```html
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
inserted div0, button1
```


# Render 
container.querySelector("#count").click()

```html
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
div0/button0/#text0: "0" => "1"
```


# Render 
container.querySelector("#changeTag").click()

```html
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
inserted span0
removed div after span0
inserted span0/button0
```


# Render 
container.querySelector("#count").click()

```html
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
span0/button0/#text0: "0" => "1"
```