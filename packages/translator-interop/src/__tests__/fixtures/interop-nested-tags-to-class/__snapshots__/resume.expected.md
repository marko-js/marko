# Render {}
```html
<html>
  <head />
  <body>
    <!--M_[1-->
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
        <!--M_*1 #text/1-->
      </button>
      <!--M_*1 #button/0-->
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={count:0,"#text/0!":_.b={m5c:"s0-2"},"#text/0(":_._.$compat_renderer(_._["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer",0]},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#text1
inserted #document/html0/body1/#text4
removed #comment after #document/html0/body1/#comment0
removed #comment after #document/html0/body1/#text4
inserted #document/html0/body1/div3/#text0
inserted #document/html0/body1/div3/#text5
inserted #document/html0/body1/div3/#text1
inserted #document/html0/body1/div3/#text4
removed #comment after #document/html0/body1/div3/#text1
removed #comment after #document/html0/body1/div3/#comment3
removed #document/html0/body1/div3/#text5 after #document/html0/body1/div3/#text4
inserted #document/html0/body1/div3/#text5
```


# Render 
container.querySelector("#tags").click()

```html
<html>
  <head />
  <body>
    <!--M_[1-->
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
        <!--M_*1 #text/1-->
      </button>
      <!--M_*1 #button/0-->
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={count:0,"#text/0!":_.b={m5c:"s0-2"},"#text/0(":_._.$compat_renderer(_._["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer",0]},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div3/button2/#text0: "0" => "1"
```


# Render 
container.querySelector("#class").click()

```html
<html>
  <head />
  <body>
    <!--M_[1-->
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
        <!--M_*1 #text/1-->
      </button>
      <!--M_*1 #button/0-->
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={count:0,"#text/0!":_.b={m5c:"s0-2"},"#text/0(":_._.$compat_renderer(_._["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer",0]},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button2/#text0: "0" => "1"
```


# Render 
container.querySelector("#tags").click()

```html
<html>
  <head />
  <body>
    <!--M_[1-->
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
        <!--M_*1 #text/1-->
      </button>
      <!--M_*1 #button/0-->
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={count:0,"#text/0!":_.b={m5c:"s0-2"},"#text/0(":_._.$compat_renderer(_._["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer",0]},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div3/button2/#text0: "1" => "2"
```


# Render 
container.querySelector("#class").click()

```html
<html>
  <head />
  <body>
    <!--M_[1-->
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
        <!--M_*1 #text/1-->
      </button>
      <!--M_*1 #button/0-->
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={count:0,"#text/0!":_.b={m5c:"s0-2"},"#text/0(":_._.$compat_renderer(_._["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer",0]},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button2/#text0: "1" => "2"
```


# Render 
container.querySelector("#tags").click()

```html
<html>
  <head />
  <body>
    <!--M_[1-->
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
        <!--M_*1 #text/1-->
      </button>
      <!--M_*1 #button/0-->
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={count:0,"#text/0!":_.b={m5c:"s0-2"},"#text/0(":_._.$compat_renderer(_._["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber",1,"packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer",0]},{"f":1}]],"t":["packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div3/button2/#text0: "2" => "3"
```