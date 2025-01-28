# Write
```html
  Hello <!>Marko<!--M_*1 #text/0-->! Hello <!>Marko<!--M_*1 #text/1-->! Hello <!><!--M_*1 #text/2-->!<script>WALKER_RUNTIME("M")("_")</script>
```

# Render End
```html
<html>
  <head />
  <body>
    Hello 
    <!---->
    Marko
    <!--M_*1 #text/0-->
    ! Hello 
    <!---->
    Marko
    <!--M_*1 #text/1-->
    ! Hello 
    <!---->
    <!--M_*1 #text/2-->
    !
    <script>
      WALKER_RUNTIME("M")("_")
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
INSERT html/body/#text1
INSERT html/body/#comment1
INSERT html/body/#text2
INSERT html/body/#comment2
INSERT html/body/#text3
INSERT html/body/#comment3
INSERT html/body/#text4
INSERT html/body/#comment4
INSERT html/body/#comment5
INSERT html/body/#text5
INSERT html/body/script
INSERT html/body/script/#text
```