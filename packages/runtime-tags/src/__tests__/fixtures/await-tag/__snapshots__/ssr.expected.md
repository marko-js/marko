# Write
```html
  <div>Got: a <!>0<!--M_*2 #text/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={1:_.a={count:0,"count!":_.c=new Set},2:_.d={_:_.a,"count(":0}},(_.c).add(_.d),_.b)]</script>
```

# Write
```html
  <script>M._.r.push(_=>(_.e={3:_.f={_:_.a,"count(":2}},(_.c).add(_.f),_.e))</script>
```

# Write
```html
  Got: b <!>0<!--M_*4 #text/1-->Got: c <!>0<!--M_*3 #text/1--><button>Inc</button><!--M_*1 #button/3--></div><script>M._.r.push(_=>(_.g={4:_.h={_:_.a,"count(":1}},(_.c).add(_.h),_.g),1,"__tests__/template.marko_0_count");M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      Got: a 
      <!---->
      0
      <!--M_*2 #text/1-->
      <script>
        WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:_.a={count:0,"count!":_.c=new Set},2:_.d={_:_.a,"count(":0}},(_.c).add(_.d),_.b)]
      </script>
      <script>
        M._.r.push(_=&gt;(_.e={3:_.f={_:_.a,"count(":2}},(_.c).add(_.f),_.e))
      </script>
      Got: b 
      <!---->
      0
      <!--M_*4 #text/1-->
      Got: c 
      <!---->
      0
      <!--M_*3 #text/1-->
      <button>
        Inc
      </button>
      <!--M_*1 #button/3-->
    </div>
    <script>
      M._.r.push(_=&gt;(_.g={4:_.h={_:_.a,"count(":1}},(_.c).add(_.h),_.g),1,"__tests__/template.marko_0_count");M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/div/script0
INSERT html/body/div/script0/#text
INSERT html/body/div/script1
INSERT html/body/div/script1/#text
INSERT html/body/div/#text2
INSERT html/body/div/#comment2
INSERT html/body/div/#text3
INSERT html/body/div/#comment3
INSERT html/body/div/#text4
INSERT html/body/div/#comment4
INSERT html/body/div/#text5
INSERT html/body/div/#comment5
INSERT html/body/div/button
INSERT html/body/div/button/#text
INSERT html/body/div/#comment6
INSERT html/body/script
INSERT html/body/script/#text
```