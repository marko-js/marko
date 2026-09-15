// PATCH
(_.a = {
  ma: ".x { color: red }",
  mb: "window.__label = \"two\";",
  tc: "two"
}, _.a)

// PATCH
(_.a = {
  ma: ".x { color: blue }",
  mb: "window.__label = \"three\";",
  tc: "three"
}, _.a)

// PATCH
(_.a = {
  ma: ".x { color: red }",
  mb: "window.__label = \"four\";",
  tc: "four"
}, _.a)
