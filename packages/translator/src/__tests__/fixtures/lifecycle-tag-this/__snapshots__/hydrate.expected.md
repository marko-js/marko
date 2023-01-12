# Render {}
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      x=0, was=undefined
    </div>
    <!--M#0 0-->
    <button
      id="increment"
    >
      Increment
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{1:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag-this/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/#text0
```


# Render 
container.querySelector("#increment")?.click();

```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      x=1, was=0
    </div>
    <!--M#0 0-->
    <button
      id="increment"
    >
      Increment
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{1:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag-this/template.marko_0_x",])
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
container.querySelector("#increment")?.click();

```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      x=2, was=1
    </div>
    <!--M#0 0-->
    <button
      id="increment"
    >
      Increment
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{1:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag-this/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #text in #document/html0/body1/div0
inserted #document/html0/body1/div0/#text0
```