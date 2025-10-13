# Write
```html
  <html><head></head><body>-- Start <!--M_[--><!--M_!^b--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"}},_.b],_.b["#CatchContent"]=_._["__tests__/template.marko_2_content"](_.a),_.c)]</script>
```

# Write
```html
  <!--M_!b--><!--M_]1 #text/0 2--> -- End<style M_>t{display:none}</style><t M_=b><div>Caught: promise2 rejected</div></t><script>REORDER_RUNTIME(M._);M._.w()</script></body></html>
```

# Render End
```html
<html>
  <head>
    <style
      m_=""
    >
      t{display:none}
    </style>
  </head>
  <body>
    -- Start 
    <!--M_[-->
    <div>
      Caught: promise2 rejected
    </div>
    <!--M_]1 #text/0 2-->
     -- End
    <script>
      REORDER_RUNTIME(M._);
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text0
INSERT html/body/#comment0
INSERT #comment
INSERT script
INSERT script/#text
INSERT #comment
INSERT html/body/#comment1
INSERT html/body/#text1
INSERT html/head/style
INSERT html/head/style/#text
INSERT t
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/script
INSERT html/body/script/#text
REMOVE html/head/style after html/body/#text1
INSERT html/head/style
REMOVE script after #comment
REMOVE #comment after html/body/#comment0
REMOVE html/body/div in t
REMOVE #comment after html/body/#comment0
INSERT html/body/div
REMOVE t after html/body/#text1
```