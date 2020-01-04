# write
  <!M$0>abcd<!M$0/><!M$1>xyz<!M$1/><script>[{"markerId":0,"componentId":"first","input":{}},{"markerId":1,"componentId":"second","input":{}}]</script>
_flush_

# end

# final HTML
  <!--M$0-->
  <html>
    <head />
    <body>
      abcd
      <!--M$0/-->
      <!--M$1-->
      xyz
      <!--M$1/-->
      <script>
        [{"markerId":0,"componentId":"first","input":{}},{"markerId":1,"componentId":"second","input":{}}]
      </script>
    </body>
  </html>
