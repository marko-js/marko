// size: 126 (min) 87 (brotli)
(_._script("a0", ($scope) => {
  {
    const el = document.getElementById("foo");
    ((el.innerHTML = "foo"),
      (_.$signal($scope, 0).onabort = () => (el.innerHTML = "")));
  }
}),
  init());
