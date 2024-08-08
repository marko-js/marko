# Render {}
```html
<html>
  <head />
  <body>
    <button
      id="tags"
    >
      0
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <!--M_[1-->
    <button
      data-parent="0"
      id="class"
    >
      0
    </button>
    <!--M_]0 #text/2-->
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{"count":0},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]});WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.b={0:{count:0,"#text/2!":_.a={m5c:"s0"},"#text/2(":_._.$compat_renderer(_._["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"])},1:_.a})];M._.e=[1,"$compat_setScope",0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count"];M._.d=1;M._.w()
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
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <!--M_[1-->
    <button
      data-parent="1"
      id="class"
    >
      0
    </button>
    <!--M_]0 #text/2-->
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{"count":0},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]});WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.b={0:{count:0,"#text/2!":_.a={m5c:"s0"},"#text/2(":_._.$compat_renderer(_._["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"])},1:_.a})];M._.e=[1,"$compat_setScope",0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count"];M._.d=1;M._.w()
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
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <!--M_[1-->
    <button
      data-parent="1"
      id="class"
    >
      1
    </button>
    <!--M_]0 #text/2-->
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{"count":0},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]});WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.b={0:{count:0,"#text/2!":_.a={m5c:"s0"},"#text/2(":_._.$compat_renderer(_._["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"])},1:_.a})];M._.e=[1,"$compat_setScope",0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count"];M._.d=1;M._.w()
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
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <!--M_[1-->
    <button
      data-parent="2"
      id="class"
    >
      1
    </button>
    <!--M_]0 #text/2-->
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{"count":0},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]});WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.b={0:{count:0,"#text/2!":_.a={m5c:"s0"},"#text/2(":_._.$compat_renderer(_._["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"])},1:_.a})];M._.e=[1,"$compat_setScope",0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count"];M._.d=1;M._.w()
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
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <!--M_[1-->
    <button
      data-parent="2"
      id="class"
    >
      2
    </button>
    <!--M_]0 #text/2-->
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{"count":0},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]});WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.b={0:{count:0,"#text/2!":_.a={m5c:"s0"},"#text/2(":_._.$compat_renderer(_._["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"])},1:_.a})];M._.e=[1,"$compat_setScope",0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count"];M._.d=1;M._.w()
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
      <!--M_*0 #text/1-->
    </button>
    <!--M_*0 #button/0-->
    <!--M_[1-->
    <button
      data-parent="3"
      id="class"
    >
      2
    </button>
    <!--M_]0 #text/2-->
    <script>
      $MC=(window.$MC||[]).concat({"w":[["s0",0,{"count":0},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"]});WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.b={0:{count:0,"#text/2!":_.a={m5c:"s0"},"#text/2(":_._.$compat_renderer(_._["packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/components/class-counter.marko"])},1:_.a})];M._.e=[1,"$compat_setScope",0,"packages/translator-interop/src/__tests__/fixtures/interop-basic-tags-to-class/template.marko_0_count"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
#document/html0/body1/button4: attr(data-parent) "2" => "3"
```