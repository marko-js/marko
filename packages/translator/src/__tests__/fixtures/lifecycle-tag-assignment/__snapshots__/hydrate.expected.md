# Render {}
```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        <!--M#0 0-->
        0
      </span>
      , was=
      <!--M#0 1-->
      false
    </div>
    <!--M#0 2-->
    <button
      id="increment"
    >
      Increment
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{3:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("#increment")?.click();

```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        <!--M#0 0-->
        1
      </span>
      , was=
      <!--M#0 1-->
      0
    </div>
    <!--M#0 2-->
    <button
      id="increment"
    >
      Increment
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{3:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/span1/#text1: "0" => "1"
#document/html0/body1/div0/#text4: "false" => "0"
```


# Render 
container.querySelector("#increment")?.click();

```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        <!--M#0 0-->
        2
      </span>
      , was=
      <!--M#0 1-->
      0
    </div>
    <!--M#0 2-->
    <button
      id="increment"
    >
      Increment
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{3:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/span1/#text1: "1" => "2"
```


# Render "ASYNC"
```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        <!--M#0 0-->
        2
      </span>
      , was=
      <!--M#0 1-->
      1
    </div>
    <!--M#0 2-->
    <button
      id="increment"
    >
      Increment
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{3:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/#text4: "0" => "1"
```