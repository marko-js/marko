# Render {}
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      Mount 0
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M#0 #button/0-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{x:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/#text0
```


# Render 
container.querySelector("#increment")?.click()

```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      Update 1
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M#0 #button/0-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{x:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #text in #document/html0/body1/div0
inserted #document/html0/body1/div0/#text0
```


# Render 
container.querySelector("#increment")?.click()

```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      Update 2
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M#0 #button/0-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{x:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #text in #document/html0/body1/div0
inserted #document/html0/body1/div0/#text0
```