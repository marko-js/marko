# Write
```html
  <!--M_[-->Hello<!--M_]1 #text/0 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{"ConditionalScope:#text/0":_.a={"#BranchAccessor":"#text/0"}},_.a])]</script>
```

# Render End
```html
<!--M_[-->
<html>
  <head />
  <body>
    Hello
    <!--M_]1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
      {
        "ConditionalScope:#text/0": _.a = {
          "#BranchAccessor": "#text/0"
        }
      }, _.a])]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```