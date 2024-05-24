# Render {}
```html
<html>
  <head />
  <body>
    <button
      id="class"
    >
      0
    </button>
    <button
      data-parent="0"
      id="tags"
    >
      0
      <!--M*0 #text/1-->
    </button>
    <!--M*0 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{count:0}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/components/tags-counter.marko_0_count",])
    </script>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-1":0}},"w":[["s0",0,{},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#text0
inserted #document/html0/body1/#text9
removed #comment before #document/html0/body1/#text0
removed #comment after #document/html0/body1/#text9
#document/html0/body1/button4: attr(data-parent) "0" => "0"
inserted #document/html0/body1/#text2
inserted #document/html0/body1/#text8
inserted #document/html0/body1/#text3
inserted #document/html0/body1/#text7
removed #comment after #document/html0/body1/#text3
removed #comment after #document/html0/body1/script6
removed #document/html0/body1/#text8 after #document/html0/body1/#text7
inserted #document/html0/body1/#text8
```


# Render 
container.querySelector("#tags").click()

```html
<html>
  <head />
  <body>
    <button
      id="class"
    >
      0
    </button>
    <button
      data-parent="0"
      id="tags"
    >
      1
      <!--M*0 #text/1-->
    </button>
    <!--M*0 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{count:0}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/components/tags-counter.marko_0_count",])
    </script>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-1":0}},"w":[["s0",0,{},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button4/#text0: "0" => "1"
```


# Render 
container.querySelector("#class").click()

```html
<html>
  <head />
  <body>
    <button
      id="class"
    >
      1
    </button>
    <button
      data-parent="1"
      id="tags"
    >
      1
      <!--M*0 #text/1-->
    </button>
    <!--M*0 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{count:0}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/components/tags-counter.marko_0_count",])
    </script>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-1":0}},"w":[["s0",0,{},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button4: attr(data-parent) "0" => "1"
#document/html0/body1/button1/#text0: "0" => "1"
```


# Render 
container.querySelector("#tags").click()

```html
<html>
  <head />
  <body>
    <button
      id="class"
    >
      1
    </button>
    <button
      data-parent="1"
      id="tags"
    >
      2
      <!--M*0 #text/1-->
    </button>
    <!--M*0 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{count:0}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/components/tags-counter.marko_0_count",])
    </script>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-1":0}},"w":[["s0",0,{},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button4/#text0: "1" => "2"
```


# Render 
container.querySelector("#class").click()

```html
<html>
  <head />
  <body>
    <button
      id="class"
    >
      2
    </button>
    <button
      data-parent="2"
      id="tags"
    >
      2
      <!--M*0 #text/1-->
    </button>
    <!--M*0 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{count:0}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/components/tags-counter.marko_0_count",])
    </script>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-1":0}},"w":[["s0",0,{},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button4: attr(data-parent) "1" => "2"
#document/html0/body1/button1/#text0: "1" => "2"
```


# Render 
container.querySelector("#tags").click()

```html
<html>
  <head />
  <body>
    <button
      id="class"
    >
      2
    </button>
    <button
      data-parent="2"
      id="tags"
    >
      3
      <!--M*0 #text/1-->
    </button>
    <!--M*0 #button/0-->
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{count:0}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/components/tags-counter.marko_0_count",])
    </script>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-1":0}},"w":[["s0",0,{},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-class-to-tags/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button4/#text0: "2" => "3"
```