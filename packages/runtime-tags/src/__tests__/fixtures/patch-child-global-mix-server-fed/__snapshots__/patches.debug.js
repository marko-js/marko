// PATCH
{
  "$global:": {
    brand: "b",
    flag: "2",
    mark: "x"
  },
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "b2x"
  }
}

// PATCH
{
  "$global:": {
    brand: "b",
    flag: "2",
    mark: "y"
  },
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "b2y"
  }
}

// PATCH
{
  "$global:": {
    brand: "c",
    flag: "3",
    mark: "z"
  },
  "PatchChild:#childScope/0": {
    "PatchText:#text/0": "c3z"
  }
}
