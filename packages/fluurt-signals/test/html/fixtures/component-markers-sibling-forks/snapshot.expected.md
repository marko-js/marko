# write
  <!M$0>
_flush_

# write
  a<!M$0/><!M$1>b<!M$1/><!M$2>c<!M$2/><script>[{"markerId":0,"componentId":"first","input":{}},{"markerId":1,"componentId":"second","input":{}},{"markerId":2,"componentId":"third","input":{}}]</script>
_flush_

# end

# final HTML
  <!--M$0-->
  <html>
    <head />
    <body>
      a
      <!--M$0/-->
      <!--M$1-->
      b
      <!--M$1/-->
      <!--M$2-->
      c
      <!--M$2/-->
      <script>
        [{"markerId":0,"componentId":"first","input":{}},{"markerId":1,"componentId":"second","input":{}},{"markerId":2,"componentId":"third","input":{}}]
      </script>
    </body>
  </html>
