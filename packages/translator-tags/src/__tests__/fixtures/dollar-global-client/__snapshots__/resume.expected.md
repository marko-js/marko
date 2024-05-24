# Render {"$global":{"x":1,"serializedGlobals":["x"]}}
```html
<html>
  <head />
  <body>
    <div>
      <!--M|0 #text/0 -->
      <button>
        Toggle
      </button>
      <!--M*0 #button/1-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{show:!1},$global:{x:1}}),[0,"packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko_0_show",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <span>
        1
      </span>
      <button>
        Toggle
      </button>
      <!--M*0 #button/1-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{show:!1},$global:{x:1}}),[0,"packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko_0_show",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/span0
removed #comment after #document/html0/body1/div0/span0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <!--M|0 #text/0 -->
      <button>
        Toggle
      </button>
      <!--M*0 #button/1-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{show:!1},$global:{x:1}}),[0,"packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko_0_show",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/#comment0
removed span after #document/html0/body1/div0/#comment0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <span>
        1
      </span>
      <button>
        Toggle
      </button>
      <!--M*0 #button/1-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{show:!1},$global:{x:1}}),[0,"packages/translator-tags/src/__tests__/fixtures/dollar-global-client/template.marko_0_show",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/span0
removed #comment after #document/html0/body1/div0/span0
```