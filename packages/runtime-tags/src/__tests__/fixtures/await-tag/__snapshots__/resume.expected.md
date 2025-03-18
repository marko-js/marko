# Render
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[2-->
      Got: a 
      <!---->
      0
      <!--M_*2 #text/1-->
      <!--M_]1 #text/0-->
      <script>
        WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={count:0,"count!":_.c=new Set},2:_.d={_:_.a,"count(":0}},(_.c).add(_.d),(_.a["#text/0!"]=_.d),_.b)]
      </script>
      <script>
        M._.r.push(_=&gt;(_.e={3:_.f={_:_.a,"count(":2}},(_.c).add(_.f),(_.a["#text/2!"]=_.f),_.e))
      </script>
      <!--M_[4-->
      Got: b 
      <!---->
      0
      <!--M_*4 #text/1-->
      <!--M_]1 #text/1-->
      <!--M_[3-->
      Got: c 
      <!---->
      0
      <!--M_*3 #text/1-->
      <!--M_]1 #text/2-->
      <button>
        Inc
      </button>
      <!--M_*1 #button/3-->
    </div>
    <script>
      M._.r.push(_=&gt;(_.g={4:_.h={_:_.a,"count(":1}},(_.c).add(_.h),(_.a["#text/1!"]=_.h),_.g),1,"__tests__/template.marko_0_count");M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[2-->
      Got: a 
      <!---->
      1
      <!--M_*2 #text/1-->
      <!--M_]1 #text/0-->
      <script>
        WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={count:0,"count!":_.c=new Set},2:_.d={_:_.a,"count(":0}},(_.c).add(_.d),(_.a["#text/0!"]=_.d),_.b)]
      </script>
      <script>
        M._.r.push(_=&gt;(_.e={3:_.f={_:_.a,"count(":2}},(_.c).add(_.f),(_.a["#text/2!"]=_.f),_.e))
      </script>
      <!--M_[4-->
      Got: b 
      <!---->
      1
      <!--M_*4 #text/1-->
      <!--M_]1 #text/1-->
      <!--M_[3-->
      Got: c 
      <!---->
      1
      <!--M_*3 #text/1-->
      <!--M_]1 #text/2-->
      <button>
        Inc
      </button>
      <!--M_*1 #button/3-->
    </div>
    <script>
      M._.r.push(_=&gt;(_.g={4:_.h={_:_.a,"count(":1}},(_.c).add(_.h),(_.a["#text/1!"]=_.h),_.g),1,"__tests__/template.marko_0_count");M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text1 "0" => "1"
UPDATE html/body/div/#text5 "0" => "1"
UPDATE html/body/div/#text3 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[2-->
      Got: a 
      <!---->
      2
      <!--M_*2 #text/1-->
      <!--M_]1 #text/0-->
      <script>
        WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={count:0,"count!":_.c=new Set},2:_.d={_:_.a,"count(":0}},(_.c).add(_.d),(_.a["#text/0!"]=_.d),_.b)]
      </script>
      <script>
        M._.r.push(_=&gt;(_.e={3:_.f={_:_.a,"count(":2}},(_.c).add(_.f),(_.a["#text/2!"]=_.f),_.e))
      </script>
      <!--M_[4-->
      Got: b 
      <!---->
      2
      <!--M_*4 #text/1-->
      <!--M_]1 #text/1-->
      <!--M_[3-->
      Got: c 
      <!---->
      2
      <!--M_*3 #text/1-->
      <!--M_]1 #text/2-->
      <button>
        Inc
      </button>
      <!--M_*1 #button/3-->
    </div>
    <script>
      M._.r.push(_=&gt;(_.g={4:_.h={_:_.a,"count(":1}},(_.c).add(_.h),(_.a["#text/1!"]=_.h),_.g),1,"__tests__/template.marko_0_count");M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text1 "1" => "2"
UPDATE html/body/div/#text5 "1" => "2"
UPDATE html/body/div/#text3 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[2-->
      Got: a 
      <!---->
      3
      <!--M_*2 #text/1-->
      <!--M_]1 #text/0-->
      <script>
        WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={count:0,"count!":_.c=new Set},2:_.d={_:_.a,"count(":0}},(_.c).add(_.d),(_.a["#text/0!"]=_.d),_.b)]
      </script>
      <script>
        M._.r.push(_=&gt;(_.e={3:_.f={_:_.a,"count(":2}},(_.c).add(_.f),(_.a["#text/2!"]=_.f),_.e))
      </script>
      <!--M_[4-->
      Got: b 
      <!---->
      3
      <!--M_*4 #text/1-->
      <!--M_]1 #text/1-->
      <!--M_[3-->
      Got: c 
      <!---->
      3
      <!--M_*3 #text/1-->
      <!--M_]1 #text/2-->
      <button>
        Inc
      </button>
      <!--M_*1 #button/3-->
    </div>
    <script>
      M._.r.push(_=&gt;(_.g={4:_.h={_:_.a,"count(":1}},(_.c).add(_.h),(_.a["#text/1!"]=_.h),_.g),1,"__tests__/template.marko_0_count");M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text1 "2" => "3"
UPDATE html/body/div/#text5 "2" => "3"
UPDATE html/body/div/#text3 "2" => "3"
```