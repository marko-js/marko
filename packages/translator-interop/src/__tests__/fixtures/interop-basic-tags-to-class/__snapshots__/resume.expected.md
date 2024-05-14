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
      (M$h=[]).push(_=&gt;(_.b={0:{count:0,"#text/2!":_.a={"#scope":1,m5c:"s0"},"#text/2(":_._["@marko/tags-compat-5-to-6"](_._["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]),"#scope":0},1:_.a}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#text3
inserted #document/html0/body1/#text5
removed #comment after #document/html0/body1/#comment2
removed #comment after #document/html0/body1/#text5
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
      (M$h=[]).push(_=&gt;(_.b={0:{count:0,"#text/2!":_.a={"#scope":1,m5c:"s0"},"#text/2(":_._["@marko/tags-compat-5-to-6"](_._["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]),"#scope":0},1:_.a}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "0" => "1"
#document/html0/body1/button4: attr(data-parent) "0" => "1"
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
      (M$h=[]).push(_=&gt;(_.b={0:{count:0,"#text/2!":_.a={"#scope":1,m5c:"s0"},"#text/2(":_._["@marko/tags-compat-5-to-6"](_._["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]),"#scope":0},1:_.a}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button4/#text0: "0" => "1"
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
      (M$h=[]).push(_=&gt;(_.b={0:{count:0,"#text/2!":_.a={"#scope":1,m5c:"s0"},"#text/2(":_._["@marko/tags-compat-5-to-6"](_._["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]),"#scope":0},1:_.a}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
#document/html0/body1/button4: attr(data-parent) "1" => "2"
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
      (M$h=[]).push(_=&gt;(_.b={0:{count:0,"#text/2!":_.a={"#scope":1,m5c:"s0"},"#text/2(":_._["@marko/tags-compat-5-to-6"](_._["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]),"#scope":0},1:_.a}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button4/#text0: "1" => "2"
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
      (M$h=[]).push(_=&gt;(_.b={0:{count:0,"#text/2!":_.a={"#scope":1,m5c:"s0"},"#text/2(":_._["@marko/tags-compat-5-to-6"](_._["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]),"#scope":0},1:_.a}),[0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
#document/html0/body1/button4: attr(data-parent) "2" => "3"
```