# Render {}
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      0
      <!--M*0 #text/1-->
    </button>
    <!--M*0 #button/0-->
    <div>
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 0 = 0
      </button>
      <!--M]0 #text/2-->
    </div>
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{count:0,"#text/2!":h={}},1:h,$global:{}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/components/tags-layout.marko_0_count",])
    </script>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-0":0}},"w":[["s0",0,{},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/template.marko"]})
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
inserted #document/html0/body1/div5/#text0
inserted #document/html0/body1/div5/#text5
removed #comment after #document/html0/body1/div5/#text5
removed h1 after #document/html0/body1/div5/#text5
removed button after #document/html0/body1/div5/#text5
inserted #document/html0/body1/#text1
inserted #document/html0/body1/#text8
inserted #document/html0/body1/#text2
inserted #document/html0/body1/#text7
removed #comment after #document/html0/body1/#text2
removed #comment after #document/html0/body1/script6
removed #document/html0/body1/#text8 after #document/html0/body1/#text7
inserted #document/html0/body1/#text8
inserted #document/html0/body1/div5/#text1
inserted #document/html0/body1/div5/#text4
inserted #document/html0/body1/div5/h12
inserted #document/html0/body1/div5/h12/#text0
inserted #document/html0/body1/div5/button3
inserted #document/html0/body1/div5/button3/#text0
inserted #document/html0/body1/div5/button3/#text1
inserted #document/html0/body1/div5/button3/#text2
inserted #document/html0/body1/div5/button3/#text3
inserted #document/html0/body1/div5/button3/#text4
```


# Render 
container.querySelector("#tags").click()

```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      1
      <!--M*0 #text/1-->
    </button>
    <!--M*0 #button/0-->
    <div>
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        1 * 1 = 1
      </button>
      <!--M]0 #text/2-->
    </div>
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{count:0,"#text/2!":h={}},1:h,$global:{}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/components/tags-layout.marko_0_count",])
    </script>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-0":0}},"w":[["s0",0,{},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button3/#text0: "0" => "1"
#document/html0/body1/div5/button3/#text2: "0" => "1"
#document/html0/body1/div5/button3/#text4: "0" => "1"
```


# Render 
container.querySelector("#class").click()

```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      1
      <!--M*0 #text/1-->
    </button>
    <!--M*0 #button/0-->
    <div>
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        2 * 1 = 2
      </button>
      <!--M]0 #text/2-->
    </div>
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{count:0,"#text/2!":h={}},1:h,$global:{}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/components/tags-layout.marko_0_count",])
    </script>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-0":0}},"w":[["s0",0,{},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div5/#text0
inserted #document/html0/body1/div5/#text5
removed #text after #document/html0/body1/div5/#text5
removed #text after #document/html0/body1/div5/#text5
removed h1 after #document/html0/body1/div5/#text5
removed button after #document/html0/body1/div5/#text5
removed #text after #document/html0/body1/div5/#text5
removed #text after #document/html0/body1/div5/#text5
inserted #document/html0/body1/div5/#text1
inserted #document/html0/body1/div5/#text4
inserted #document/html0/body1/div5/h12
inserted #document/html0/body1/div5/h12/#text0
inserted #document/html0/body1/div5/button3
inserted #document/html0/body1/div5/button3/#text0
inserted #document/html0/body1/div5/button3/#text1
inserted #document/html0/body1/div5/button3/#text2
inserted #document/html0/body1/div5/button3/#text3
inserted #document/html0/body1/div5/button3/#text4
```


# Render 
container.querySelector("#tags").click()

```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      2
      <!--M*0 #text/1-->
    </button>
    <!--M*0 #button/0-->
    <div>
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        2 * 2 = 4
      </button>
      <!--M]0 #text/2-->
    </div>
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{count:0,"#text/2!":h={}},1:h,$global:{}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/components/tags-layout.marko_0_count",])
    </script>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-0":0}},"w":[["s0",0,{},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button3/#text0: "1" => "2"
#document/html0/body1/div5/button3/#text2: "1" => "2"
#document/html0/body1/div5/button3/#text4: "2" => "4"
```


# Render 
container.querySelector("#class").click()

```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      2
      <!--M*0 #text/1-->
    </button>
    <!--M*0 #button/0-->
    <div>
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        3 * 2 = 6
      </button>
      <!--M]0 #text/2-->
    </div>
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{count:0,"#text/2!":h={}},1:h,$global:{}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/components/tags-layout.marko_0_count",])
    </script>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-0":0}},"w":[["s0",0,{},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div5/#text0
inserted #document/html0/body1/div5/#text5
removed #text after #document/html0/body1/div5/#text5
removed #text after #document/html0/body1/div5/#text5
removed h1 after #document/html0/body1/div5/#text5
removed button after #document/html0/body1/div5/#text5
removed #text after #document/html0/body1/div5/#text5
removed #text after #document/html0/body1/div5/#text5
inserted #document/html0/body1/div5/#text1
inserted #document/html0/body1/div5/#text4
inserted #document/html0/body1/div5/h12
inserted #document/html0/body1/div5/h12/#text0
inserted #document/html0/body1/div5/button3
inserted #document/html0/body1/div5/button3/#text0
inserted #document/html0/body1/div5/button3/#text1
inserted #document/html0/body1/div5/button3/#text2
inserted #document/html0/body1/div5/button3/#text3
inserted #document/html0/body1/div5/button3/#text4
```


# Render 
container.querySelector("#tags").click()

```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      3
      <!--M*0 #text/1-->
    </button>
    <!--M*0 #button/0-->
    <div>
      <h1>
        hello
      </h1>
      <button
        id="class"
      >
        3 * 3 = 9
      </button>
      <!--M]0 #text/2-->
    </div>
    <script>
      (M$h=[]).push((b,s,h)=&gt;({0:{count:0,"#text/2!":h={}},1:h,$global:{}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/components/tags-layout.marko_0_count",])
    </script>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-0":0}},"w":[["s0",0,{},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-tag-params-class-to-tags/template.marko"]})
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button3/#text0: "2" => "3"
#document/html0/body1/div5/button3/#text2: "2" => "3"
#document/html0/body1/div5/button3/#text4: "6" => "9"
```