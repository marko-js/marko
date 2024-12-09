# Render {}
```html
<button
  class="inc-child"
>
  1
</button>
<button
  class="inc-parent"
>
  1
</button>
<button
  class="reset"
>
  reset
</button>
```


# Render 
container.querySelector("button.inc-child").click()

```html
<button
  class="inc-child"
>
  2
</button>
<button
  class="inc-parent"
>
  2
</button>
<button
  class="reset"
>
  reset
</button>
```


# Render 
container.querySelector("button.inc-parent").click()

```html
<button
  class="inc-child"
>
  3
</button>
<button
  class="inc-parent"
>
  3
</button>
<button
  class="reset"
>
  reset
</button>
```


# Render 
container.querySelector("button.reset").click()

```html
<button
  class="inc-child"
>
  0
</button>
<button
  class="inc-parent"
>
  0
</button>
<button
  class="reset"
>
  reset
</button>
```