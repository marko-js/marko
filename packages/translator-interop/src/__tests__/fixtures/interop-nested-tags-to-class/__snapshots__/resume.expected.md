# Render {}
```html
<html>
  <head />
  <body>
    <!--M[1-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={1:_.a={"#scope":1,_:_.b={"#scope":0,count:0,"#text/0(":_._["@marko/tags-compat-5-to-6"](_._["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"])}},2:{m5c:"s0","#scope":2}},_.b["#text/0!"]=_.a,_.c),[])
    </script>
    <button
      id="class"
    >
      0
    </button>
    <div>
      <button
        id="tags"
      >
        0
        <!--M*1 #text/1-->
      </button>
      <!--M*1 #button/0-->
      <script>
        M$h.push(_=&gt;(_.d={1:_.a}),[1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count",])
      </script>
    </div>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-2":1}},"w":[["s0",0,{"renderBody":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer"]},{"f":1,"r":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer"]}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"]})
    </script>
    <!--M]0 #text/0-->
    <script>
      M$h.push(_=&gt;(_.e={0:_.b}),[])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#text2
inserted #document/html0/body1/#text5
removed #comment after #document/html0/body1/script1
removed #comment after #document/html0/body1/#text5
inserted #document/html0/body1/div4/#text0
inserted #document/html0/body1/div4/#text6
inserted #document/html0/body1/div4/#text1
inserted #document/html0/body1/div4/#text5
removed #comment after #document/html0/body1/div4/#text1
removed #comment after #document/html0/body1/div4/script4
removed #document/html0/body1/div4/#text6 after #document/html0/body1/div4/#text5
inserted #document/html0/body1/div4/#text6
```


# Render 
container.querySelector("#tags").click()

```html
<html>
  <head />
  <body>
    <!--M[1-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={1:_.a={"#scope":1,_:_.b={"#scope":0,count:0,"#text/0(":_._["@marko/tags-compat-5-to-6"](_._["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"])}},2:{m5c:"s0","#scope":2}},_.b["#text/0!"]=_.a,_.c),[])
    </script>
    <button
      id="class"
    >
      0
    </button>
    <div>
      <button
        id="tags"
      >
        1
        <!--M*1 #text/1-->
      </button>
      <!--M*1 #button/0-->
      <script>
        M$h.push(_=&gt;(_.d={1:_.a}),[1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count",])
      </script>
    </div>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-2":1}},"w":[["s0",0,{"renderBody":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer"]},{"f":1,"r":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer"]}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"]})
    </script>
    <!--M]0 #text/0-->
    <script>
      M$h.push(_=&gt;(_.e={0:_.b}),[])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div4/button2/#text0: "0" => "1"
```


# Render 
container.querySelector("#class").click()

```html
<html>
  <head />
  <body>
    <!--M[1-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={1:_.a={"#scope":1,_:_.b={"#scope":0,count:0,"#text/0(":_._["@marko/tags-compat-5-to-6"](_._["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"])}},2:{m5c:"s0","#scope":2}},_.b["#text/0!"]=_.a,_.c),[])
    </script>
    <button
      id="class"
    >
      1
    </button>
    <div>
      <button
        id="tags"
      >
        1
        <!--M*1 #text/1-->
      </button>
      <!--M*1 #button/0-->
      <script>
        M$h.push(_=&gt;(_.d={1:_.a}),[1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count",])
      </script>
    </div>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-2":1}},"w":[["s0",0,{"renderBody":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer"]},{"f":1,"r":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer"]}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"]})
    </script>
    <!--M]0 #text/0-->
    <script>
      M$h.push(_=&gt;(_.e={0:_.b}),[])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button3/#text0: "0" => "1"
```


# Render 
container.querySelector("#tags").click()

```html
<html>
  <head />
  <body>
    <!--M[1-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={1:_.a={"#scope":1,_:_.b={"#scope":0,count:0,"#text/0(":_._["@marko/tags-compat-5-to-6"](_._["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"])}},2:{m5c:"s0","#scope":2}},_.b["#text/0!"]=_.a,_.c),[])
    </script>
    <button
      id="class"
    >
      1
    </button>
    <div>
      <button
        id="tags"
      >
        2
        <!--M*1 #text/1-->
      </button>
      <!--M*1 #button/0-->
      <script>
        M$h.push(_=&gt;(_.d={1:_.a}),[1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count",])
      </script>
    </div>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-2":1}},"w":[["s0",0,{"renderBody":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer"]},{"f":1,"r":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer"]}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"]})
    </script>
    <!--M]0 #text/0-->
    <script>
      M$h.push(_=&gt;(_.e={0:_.b}),[])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div4/button2/#text0: "1" => "2"
```


# Render 
container.querySelector("#class").click()

```html
<html>
  <head />
  <body>
    <!--M[1-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={1:_.a={"#scope":1,_:_.b={"#scope":0,count:0,"#text/0(":_._["@marko/tags-compat-5-to-6"](_._["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"])}},2:{m5c:"s0","#scope":2}},_.b["#text/0!"]=_.a,_.c),[])
    </script>
    <button
      id="class"
    >
      2
    </button>
    <div>
      <button
        id="tags"
      >
        2
        <!--M*1 #text/1-->
      </button>
      <!--M*1 #button/0-->
      <script>
        M$h.push(_=&gt;(_.d={1:_.a}),[1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count",])
      </script>
    </div>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-2":1}},"w":[["s0",0,{"renderBody":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer"]},{"f":1,"r":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer"]}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"]})
    </script>
    <!--M]0 #text/0-->
    <script>
      M$h.push(_=&gt;(_.e={0:_.b}),[])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button3/#text0: "1" => "2"
```


# Render 
container.querySelector("#tags").click()

```html
<html>
  <head />
  <body>
    <!--M[1-->
    <script>
      (M$h=[]).push(_=&gt;(_.c={1:_.a={"#scope":1,_:_.b={"#scope":0,count:0,"#text/0(":_._["@marko/tags-compat-5-to-6"](_._["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"])}},2:{m5c:"s0","#scope":2}},_.b["#text/0!"]=_.a,_.c),[])
    </script>
    <button
      id="class"
    >
      2
    </button>
    <div>
      <button
        id="tags"
      >
        3
        <!--M*1 #text/1-->
      </button>
      <!--M*1 #button/0-->
      <script>
        M$h.push(_=&gt;(_.d={1:_.a}),[1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count",])
      </script>
    </div>
    <script>
      $MC=(window.$MC||[]).concat({"g":{"componentIdToScopeId":{"s0-2":1}},"w":[["s0",0,{"renderBody":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer"]},{"f":1,"r":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer"]}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"]})
    </script>
    <!--M]0 #text/0-->
    <script>
      M$h.push(_=&gt;(_.e={0:_.b}),[])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div4/button2/#text0: "2" => "3"
```