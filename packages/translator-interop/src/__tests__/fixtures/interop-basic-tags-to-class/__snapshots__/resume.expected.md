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
    <!--M[1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({1:{m5c:"s0"}}),[])
    </script>
    <button
      data-parent="0"
      id="class"
    >
      0
    </button>
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{"count":0},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]})
    </script>
    <!--M]0 #text/2-->
    <script>
      M$h.push((b,s)=&gt;({0:{count:0,"#text/2!":s[1],"#text/2(":b("@marko/tags-compat-5-to-6")(b("packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"),!0)}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#text4
inserted #document/html0/body1/#text6
removed #comment after #document/html0/body1/script3
removed #comment after #document/html0/body1/#text6
#document/html0/body1/button5: attr(data-parent) "0" => "0"
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
    <!--M[1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({1:{m5c:"s0"}}),[])
    </script>
    <button
      data-parent="1"
      id="class"
    >
      0
    </button>
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{"count":0},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]})
    </script>
    <!--M]0 #text/2-->
    <script>
      M$h.push((b,s)=&gt;({0:{count:0,"#text/2!":s[1],"#text/2(":b("@marko/tags-compat-5-to-6")(b("packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"),!0)}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "0" => "1"
#document/html0/body1/button5: attr(data-parent) "0" => "1"
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
    <!--M[1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({1:{m5c:"s0"}}),[])
    </script>
    <button
      data-parent="1"
      id="class"
    >
      1
    </button>
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{"count":0},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]})
    </script>
    <!--M]0 #text/2-->
    <script>
      M$h.push((b,s)=&gt;({0:{count:0,"#text/2!":s[1],"#text/2(":b("@marko/tags-compat-5-to-6")(b("packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"),!0)}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button5/#text0: "0" => "1"
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
    <!--M[1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({1:{m5c:"s0"}}),[])
    </script>
    <button
      data-parent="2"
      id="class"
    >
      1
    </button>
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{"count":0},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]})
    </script>
    <!--M]0 #text/2-->
    <script>
      M$h.push((b,s)=&gt;({0:{count:0,"#text/2!":s[1],"#text/2(":b("@marko/tags-compat-5-to-6")(b("packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"),!0)}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
#document/html0/body1/button5: attr(data-parent) "1" => "2"
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
    <!--M[1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({1:{m5c:"s0"}}),[])
    </script>
    <button
      data-parent="2"
      id="class"
    >
      2
    </button>
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{"count":0},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]})
    </script>
    <!--M]0 #text/2-->
    <script>
      M$h.push((b,s)=&gt;({0:{count:0,"#text/2!":s[1],"#text/2(":b("@marko/tags-compat-5-to-6")(b("packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"),!0)}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button5/#text0: "1" => "2"
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
    <!--M[1-->
    <script>
      (M$h=[]).push((b,s)=&gt;({1:{m5c:"s0"}}),[])
    </script>
    <button
      data-parent="3"
      id="class"
    >
      2
    </button>
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{"count":0},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]})
    </script>
    <!--M]0 #text/2-->
    <script>
      M$h.push((b,s)=&gt;({0:{count:0,"#text/2!":s[1],"#text/2(":b("@marko/tags-compat-5-to-6")(b("packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"),!0)}}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
#document/html0/body1/button5: attr(data-parent) "2" => "3"
```