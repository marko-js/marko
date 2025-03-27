# Render
```html
<html>
  <head />
  <body>
    <button>
      Increment 
      <!---->
      0
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <button>
      Increment 
      <!---->
      0
      <!--M_*5 #text/1-->
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <button>
      Increment 
      <!---->
      0
      <!--M_*7 #text/1-->
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_|1 #text/0 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={counts:[0,0,0],"ClosureScopes:counts":new Set,"LoopScopeMap:#text/0":new Map(_.a=[[0,_.c={count:0,i:0,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.d={}}],[1,_.e={count:0,i:1,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.f={}}],[2,_.g={count:0,i:2,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.h={}}]])},_.c,_.d,_.e,_.f,_.g,_.h],_.c._=_.e._=_.g._=_.b,_.d._=_.c,_.f._=_.e,_.h._=_.g,_.i),3,"__tests__/template.marko_3",5,"__tests__/template.marko_3",7,"__tests__/template.marko_3"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <button>
      Confirm 1
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <button>
      Increment 
      <!---->
      0
      <!--M_*5 #text/1-->
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <button>
      Increment 
      <!---->
      0
      <!--M_*7 #text/1-->
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_|1 #text/0 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={counts:[0,0,0],"ClosureScopes:counts":new Set,"LoopScopeMap:#text/0":new Map(_.a=[[0,_.c={count:0,i:0,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.d={}}],[1,_.e={count:0,i:1,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.f={}}],[2,_.g={count:0,i:2,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.h={}}]])},_.c,_.d,_.e,_.f,_.g,_.h],_.c._=_.e._=_.g._=_.b,_.d._=_.c,_.f._=_.e,_.h._=_.g,_.i),3,"__tests__/template.marko_3",5,"__tests__/template.marko_3",7,"__tests__/template.marko_3"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button0
REMOVE button after html/body/button0
UPDATE html/body/button0/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <button>
      Confirm 1
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <button>
      Confirm 1
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <button>
      Increment 
      <!---->
      0
      <!--M_*7 #text/1-->
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_|1 #text/0 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={counts:[0,0,0],"ClosureScopes:counts":new Set,"LoopScopeMap:#text/0":new Map(_.a=[[0,_.c={count:0,i:0,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.d={}}],[1,_.e={count:0,i:1,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.f={}}],[2,_.g={count:0,i:2,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.h={}}]])},_.c,_.d,_.e,_.f,_.g,_.h],_.c._=_.e._=_.g._=_.b,_.d._=_.c,_.f._=_.e,_.h._=_.g,_.i),3,"__tests__/template.marko_3",5,"__tests__/template.marko_3",7,"__tests__/template.marko_3"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button1
REMOVE button after html/body/button1
UPDATE html/body/button1/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <button>
      Confirm 1
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <button>
      Confirm 1
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <button>
      Confirm 1
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_|1 #text/0 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={counts:[0,0,0],"ClosureScopes:counts":new Set,"LoopScopeMap:#text/0":new Map(_.a=[[0,_.c={count:0,i:0,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.d={}}],[1,_.e={count:0,i:1,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.f={}}],[2,_.g={count:0,i:2,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.h={}}]])},_.c,_.d,_.e,_.f,_.g,_.h],_.c._=_.e._=_.g._=_.b,_.d._=_.c,_.f._=_.e,_.h._=_.g,_.i),3,"__tests__/template.marko_3",5,"__tests__/template.marko_3",7,"__tests__/template.marko_3"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button2
REMOVE button after html/body/button2
UPDATE html/body/button2/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <button>
      Increment 1
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <button>
      Confirm 1
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <button>
      Confirm 1
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_|1 #text/0 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={counts:[0,0,0],"ClosureScopes:counts":new Set,"LoopScopeMap:#text/0":new Map(_.a=[[0,_.c={count:0,i:0,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.d={}}],[1,_.e={count:0,i:1,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.f={}}],[2,_.g={count:0,i:2,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.h={}}]])},_.c,_.d,_.e,_.f,_.g,_.h],_.c._=_.e._=_.g._=_.b,_.d._=_.c,_.f._=_.e,_.h._=_.g,_.i),3,"__tests__/template.marko_3",5,"__tests__/template.marko_3",7,"__tests__/template.marko_3"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button0
REMOVE button after html/body/button0
UPDATE html/body/button0/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <button>
      Increment 1
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <button>
      Increment 1
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <button>
      Confirm 1
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_|1 #text/0 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={counts:[0,0,0],"ClosureScopes:counts":new Set,"LoopScopeMap:#text/0":new Map(_.a=[[0,_.c={count:0,i:0,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.d={}}],[1,_.e={count:0,i:1,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.f={}}],[2,_.g={count:0,i:2,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.h={}}]])},_.c,_.d,_.e,_.f,_.g,_.h],_.c._=_.e._=_.g._=_.b,_.d._=_.c,_.f._=_.e,_.h._=_.g,_.i),3,"__tests__/template.marko_3",5,"__tests__/template.marko_3",7,"__tests__/template.marko_3"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button1
REMOVE button after html/body/button1
UPDATE html/body/button1/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <button>
      Increment 1
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <button>
      Increment 1
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <button>
      Increment 1
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_|1 #text/0 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={counts:[0,0,0],"ClosureScopes:counts":new Set,"LoopScopeMap:#text/0":new Map(_.a=[[0,_.c={count:0,i:0,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.d={}}],[1,_.e={count:0,i:1,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.f={}}],[2,_.g={count:0,i:2,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.h={}}]])},_.c,_.d,_.e,_.f,_.g,_.h],_.c._=_.e._=_.g._=_.b,_.d._=_.c,_.f._=_.e,_.h._=_.g,_.i),3,"__tests__/template.marko_3",5,"__tests__/template.marko_3",7,"__tests__/template.marko_3"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button2
REMOVE button after html/body/button2
UPDATE html/body/button2/#text1 "" => "1"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <button>
      Confirm 2
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <button>
      Increment 1
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <button>
      Increment 1
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_|1 #text/0 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={counts:[0,0,0],"ClosureScopes:counts":new Set,"LoopScopeMap:#text/0":new Map(_.a=[[0,_.c={count:0,i:0,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.d={}}],[1,_.e={count:0,i:1,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.f={}}],[2,_.g={count:0,i:2,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.h={}}]])},_.c,_.d,_.e,_.f,_.g,_.h],_.c._=_.e._=_.g._=_.b,_.d._=_.c,_.f._=_.e,_.h._=_.g,_.i),3,"__tests__/template.marko_3",5,"__tests__/template.marko_3",7,"__tests__/template.marko_3"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button0
REMOVE button after html/body/button0
UPDATE html/body/button0/#text1 "" => "2"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <button>
      Confirm 2
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <button>
      Confirm 2
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <button>
      Increment 1
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_|1 #text/0 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={counts:[0,0,0],"ClosureScopes:counts":new Set,"LoopScopeMap:#text/0":new Map(_.a=[[0,_.c={count:0,i:0,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.d={}}],[1,_.e={count:0,i:1,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.f={}}],[2,_.g={count:0,i:2,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.h={}}]])},_.c,_.d,_.e,_.f,_.g,_.h],_.c._=_.e._=_.g._=_.b,_.d._=_.c,_.f._=_.e,_.h._=_.g,_.i),3,"__tests__/template.marko_3",5,"__tests__/template.marko_3",7,"__tests__/template.marko_3"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button1
REMOVE button after html/body/button1
UPDATE html/body/button1/#text1 "" => "2"
```

# Render
```js
container.querySelectorAll("button")[buttonIndex].click();
buttonIndex = (buttonIndex + 1) % 3;
```
```html
<html>
  <head />
  <body>
    <button>
      Confirm 2
    </button>
    <!--M_*3 #button/0-->
    <!--M_|2 #text/0 3-->
    <button>
      Confirm 2
    </button>
    <!--M_*5 #button/0-->
    <!--M_|4 #text/0 5-->
    <button>
      Confirm 2
    </button>
    <!--M_*7 #button/0-->
    <!--M_|6 #text/0 7-->
    <!--M_|1 #text/0 6 4 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i=[0,_.b={counts:[0,0,0],"ClosureScopes:counts":new Set,"LoopScopeMap:#text/0":new Map(_.a=[[0,_.c={count:0,i:0,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.d={}}],[1,_.e={count:0,i:1,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.f={}}],[2,_.g={count:0,i:2,"ConditionalRenderer:#text/0":1,"ConditionalScope:#text/0":_.h={}}]])},_.c,_.d,_.e,_.f,_.g,_.h],_.c._=_.e._=_.g._=_.b,_.d._=_.c,_.f._=_.e,_.h._=_.g,_.i),3,"__tests__/template.marko_3",5,"__tests__/template.marko_3",7,"__tests__/template.marko_3"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/button2
REMOVE button after html/body/button2
UPDATE html/body/button2/#text1 "" => "2"
```