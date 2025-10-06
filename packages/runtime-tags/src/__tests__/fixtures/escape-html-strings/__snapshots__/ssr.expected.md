# Write
```html
  <div>1<!--M_*1 #text/0-->` <span>child`"'</span><span>${value}</span></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{}])]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      1
      <!--M_*1 #text/0-->
      ` 
      <span>
        child`"'
      </span>
      <span>
        ${value}
      </span>
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
      {}])]
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
INSERT html/body/div/#comment
INSERT html/body/div/#text1
INSERT html/body/div/span0
INSERT html/body/div/span0/#text
INSERT html/body/div/span1
INSERT html/body/div/span1/#text
INSERT html/body/script
INSERT html/body/script/#text
```