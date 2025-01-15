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
      <h1>
        hello
        <!--M_*1 #text/0-->
      </h1>
      <button
        id="tags"
      >
        1
        <!--M_*1 #text/2-->
         * 
        <!---->
        0
        <!--M_*1 #text/3-->
         = 
        <!---->
        0
        <!--M_*1 #text/4-->
      </button>
      <!--M_*1 #button/1-->
      <!--M_$1-->
    </div>
    <!--M_]0 #text/0-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={multiplier:1,"#text/0!":_.b={m5c:"s0-2",baseCount:0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"__tests__/template.marko_1_multiplier/subscriber",1,"__tests__/template.marko_1_multiplier",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",0]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
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
inserted #document/html0/body1/div3/#text7
inserted #document/html0/body1/div3/#text1
inserted #document/html0/body1/div3/#text6
removed #comment after #document/html0/body1/div3/#text1
removed #comment after #document/html0/body1/div3/#comment5
removed #document/html0/body1/div3/#text7 after #document/html0/body1/div3/#text6
inserted #document/html0/body1/div3/#text7
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
      <h1>
        hello
        <!--M_*1 #text/0-->
      </h1>
      <button
        id="tags"
      >
        2
        <!--M_*1 #text/2-->
         * 
        <!---->
        0
        <!--M_*1 #text/3-->
         = 
        <!---->
        0
        <!--M_*1 #text/4-->
      </button>
      <!--M_*1 #button/1-->
      <!--M_$1-->
    </div>
    <!--M_]0 #text/0-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={multiplier:1,"#text/0!":_.b={m5c:"s0-2",baseCount:0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"__tests__/template.marko_1_multiplier/subscriber",1,"__tests__/template.marko_1_multiplier",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",0]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div3/button3/#text0: "1" => "2"
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
      <h1>
        hello
        <!--M_*1 #text/0-->
      </h1>
      <button
        id="tags"
      >
        2
        <!--M_*1 #text/2-->
         * 
        <!---->
        1
        <!--M_*1 #text/3-->
         = 
        <!---->
        2
        <!--M_*1 #text/4-->
      </button>
      <!--M_*1 #button/1-->
      <!--M_$1-->
    </div>
    <!--M_]0 #text/0-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={multiplier:1,"#text/0!":_.b={m5c:"s0-2",baseCount:0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"__tests__/template.marko_1_multiplier/subscriber",1,"__tests__/template.marko_1_multiplier",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",0]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div3/button3/#text4: "0" => "1"
#document/html0/body1/div3/button3/#text8: "0" => "2"
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
      <h1>
        hello
        <!--M_*1 #text/0-->
      </h1>
      <button
        id="tags"
      >
        3
        <!--M_*1 #text/2-->
         * 
        <!---->
        1
        <!--M_*1 #text/3-->
         = 
        <!---->
        3
        <!--M_*1 #text/4-->
      </button>
      <!--M_*1 #button/1-->
      <!--M_$1-->
    </div>
    <!--M_]0 #text/0-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={multiplier:1,"#text/0!":_.b={m5c:"s0-2",baseCount:0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"__tests__/template.marko_1_multiplier/subscriber",1,"__tests__/template.marko_1_multiplier",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",0]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div3/button3/#text0: "2" => "3"
#document/html0/body1/div3/button3/#text8: "2" => "3"
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
      <h1>
        hello
        <!--M_*1 #text/0-->
      </h1>
      <button
        id="tags"
      >
        3
        <!--M_*1 #text/2-->
         * 
        <!---->
        2
        <!--M_*1 #text/3-->
         = 
        <!---->
        6
        <!--M_*1 #text/4-->
      </button>
      <!--M_*1 #button/1-->
      <!--M_$1-->
    </div>
    <!--M_]0 #text/0-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={multiplier:1,"#text/0!":_.b={m5c:"s0-2",baseCount:0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"__tests__/template.marko_1_multiplier/subscriber",1,"__tests__/template.marko_1_multiplier",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",0]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div3/button3/#text4: "1" => "2"
#document/html0/body1/div3/button3/#text8: "3" => "6"
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
      <h1>
        hello
        <!--M_*1 #text/0-->
      </h1>
      <button
        id="tags"
      >
        4
        <!--M_*1 #text/2-->
         * 
        <!---->
        2
        <!--M_*1 #text/3-->
         = 
        <!---->
        8
        <!--M_*1 #text/4-->
      </button>
      <!--M_*1 #button/1-->
      <!--M_$1-->
    </div>
    <!--M_]0 #text/0-->
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={multiplier:1,"#text/0!":_.b={m5c:"s0-2",baseCount:0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"__tests__/template.marko_1_multiplier/subscriber",1,"__tests__/template.marko_1_multiplier",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",0]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div3/button3/#text0: "3" => "4"
#document/html0/body1/div3/button3/#text8: "6" => "8"
```