// PATCH
[`a0;bD ;<pre>line 1\nline 2\r\nline 3</pre><p> </p>`, (_.a = {
  ba: [{
    ta: "a"
  }, "a0"]
}, _.a)]
"AgE"

// PATCH holding AgE
(_.a = {
  ba: [{
    ta: "b"
  }, "a0"]
}, _.a)

// PATCH holding AgE
(_.a = {
  ba: 0
}, _.a)
