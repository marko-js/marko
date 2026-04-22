// size: 124 (min) 85 (brotli)
(_._script(`a0`, ($scope) => {
  {
    let el = document.getElementById(`foo`);
    ((el.innerHTML = `foo`),
      (_.$signal($scope, 0).onabort = () => (el.innerHTML = ``)));
  }
}),
  init());
