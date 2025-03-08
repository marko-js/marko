# Render
```html
<html>
  <head />
  <body>
    <!--M_[2-->
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
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
    </div>
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={count:0,"count!":_.d=new Set,"#text/0!":_.b={m5c:"s0-2","count(":0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},2:_.b,3:{m5c:"s0"}},_.b._=_.a,(_.d).add(_.b),_.c),2,"$compat_setScope",2,"__tests__/template.marko_1_count",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",1]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.e={1:_.a}),3,"$compat_setScope",0);M._.w()
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
    <!--M_[2-->
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
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
    </div>
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={count:0,"count!":_.d=new Set,"#text/0!":_.b={m5c:"s0-2","count(":0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},2:_.b,3:{m5c:"s0"}},_.b._=_.a,(_.d).add(_.b),_.c),2,"$compat_setScope",2,"__tests__/template.marko_1_count",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",1]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.e={1:_.a}),3,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "0" => "1"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
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
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
    </div>
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={count:0,"count!":_.d=new Set,"#text/0!":_.b={m5c:"s0-2","count(":0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},2:_.b,3:{m5c:"s0"}},_.b._=_.a,(_.d).add(_.b),_.c),2,"$compat_setScope",2,"__tests__/template.marko_1_count",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",1]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.e={1:_.a}),3,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
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
    <!--M_[2-->
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
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
    </div>
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={count:0,"count!":_.d=new Set,"#text/0!":_.b={m5c:"s0-2","count(":0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},2:_.b,3:{m5c:"s0"}},_.b._=_.a,(_.d).add(_.b),_.c),2,"$compat_setScope",2,"__tests__/template.marko_1_count",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",1]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.e={1:_.a}),3,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "1" => "2"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
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
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
    </div>
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={count:0,"count!":_.d=new Set,"#text/0!":_.b={m5c:"s0-2","count(":0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},2:_.b,3:{m5c:"s0"}},_.b._=_.a,(_.d).add(_.b),_.c),2,"$compat_setScope",2,"__tests__/template.marko_1_count",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",1]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.e={1:_.a}),3,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
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
    <!--M_[2-->
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
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
    </div>
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={count:0,"count!":_.d=new Set,"#text/0!":_.b={m5c:"s0-2","count(":0},"#text/0(":_._.$compat_renderer(_._["__tests__/components/class-layout.marko"])},2:_.b,3:{m5c:"s0"}},_.b._=_.a,(_.d).add(_.b),_.c),2,"$compat_setScope",2,"__tests__/template.marko_1_count",0];M._.w();$MC=(window.$MC||[]).concat({"o":{"w":[["s0",0,{"renderBody":["__tests__/template.marko_1_renderer",1]},{"f":1}]],"t":["__tests__/components/class-layout.marko"]},"$$":[{"l":["w",0,3,"r"],"r":["w",0,2,"renderBody"]}]});M._.r.push(_=&gt;(_.e={1:_.a}),3,"$compat_setScope",0);M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "2" => "3"
```