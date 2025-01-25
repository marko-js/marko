# Render
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
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={multiplier:1,"#text/0!":_.b={m5c:"s0-2",baseCount:0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"__tests__/template.marko_1_multiplier/subscriber",1,"__tests__/template.marko_1_multiplier",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",0]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text0
INSERT html/body/#text1
REMOVE #comment after html/body/#comment0
REMOVE #comment after html/body/#text1
INSERT html/body/div/#text0
INSERT html/body/div/#text3
INSERT html/body/div/#text1
INSERT html/body/div/#text2
REMOVE #comment after html/body/div/#text1
REMOVE #comment after html/body/div/#comment
REMOVE html/body/div/#text3 after html/body/div/#text2
INSERT html/body/div/#text3
```

# Render
```js
container.querySelector("#tags").click();
```
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
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={multiplier:1,"#text/0!":_.b={m5c:"s0-2",baseCount:0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"__tests__/template.marko_1_multiplier/subscriber",1,"__tests__/template.marko_1_multiplier",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",0]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text0 "1" => "2"
```

# Render
```js
container.querySelector("#class").click();
```
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
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={multiplier:1,"#text/0!":_.b={m5c:"s0-2",baseCount:0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"__tests__/template.marko_1_multiplier/subscriber",1,"__tests__/template.marko_1_multiplier",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",0]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text2 "0" => "1"
UPDATE html/body/div/button/#text4 "0" => "2"
UPDATE html/body/button/#text "0" => "1"
```

# Render
```js
container.querySelector("#tags").click();
```
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
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={multiplier:1,"#text/0!":_.b={m5c:"s0-2",baseCount:0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"__tests__/template.marko_1_multiplier/subscriber",1,"__tests__/template.marko_1_multiplier",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",0]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text0 "2" => "3"
UPDATE html/body/div/button/#text4 "2" => "3"
```

# Render
```js
container.querySelector("#class").click();
```
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
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={multiplier:1,"#text/0!":_.b={m5c:"s0-2",baseCount:0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"__tests__/template.marko_1_multiplier/subscriber",1,"__tests__/template.marko_1_multiplier",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",0]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text2 "1" => "2"
UPDATE html/body/div/button/#text4 "3" => "6"
UPDATE html/body/button/#text "1" => "2"
```

# Render
```js
container.querySelector("#tags").click();
```
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
    </div>
    <!--M_]0 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={multiplier:1,"#text/0!":_.b={m5c:"s0-2",baseCount:0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},1:_.b,2:{m5c:"s0"}},_.b._=_.a,_.c),1,"$compat_setScope",1,"__tests__/template.marko_1_multiplier/subscriber",1,"__tests__/template.marko_1_multiplier",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",0]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.d={0:_.a}),2,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text0 "3" => "4"
UPDATE html/body/div/button/#text4 "6" => "8"
```