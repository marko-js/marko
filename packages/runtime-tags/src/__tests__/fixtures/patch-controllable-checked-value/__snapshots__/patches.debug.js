// PATCH
(_.a = {
  "PatchControl:1#input/0": ["a", "a"],
  "PatchControl:1#input/1": ["a", "b"]
}, _.a)

// PATCH
(_.a = {
  "PatchControl:1#input/0": ["b", "a"],
  "PatchControl:1#input/1": ["b", "b"]
}, _.a)
