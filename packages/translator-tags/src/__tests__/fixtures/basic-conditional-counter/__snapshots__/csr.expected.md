# Render {}
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
<span>
  0
</span>
<!---->
```

# Mutations
```
inserted button0, button1, span2, #comment3
```


# Render 
container.querySelector("button.inc").click()

```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
<span>
  1
</span>
<!---->
```

# Mutations
```
span2/#text0: "0" => "1"
```


# Render 
container.querySelector("button.toggle").click()

```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
<!---->
```

# Mutations
```
inserted #text2
removed span after #text2
```


# Render 
container.querySelector("button.inc").click()

```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
<!---->
```

# Mutations
```

```


# Render 
container.querySelector("button.toggle").click()

```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
<span>
  2
</span>
<!---->
```

# Mutations
```
inserted span2
removed #text after span2
span2/#text0: " " => "2"
```


# Render 
container.querySelector("button.inc").click()

```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
<span>
  3
</span>
<!---->
```

# Mutations
```
span2/#text0: "2" => "3"
```