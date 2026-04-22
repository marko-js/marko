// size: 248 (min) 164 (brotli)
const $el3_getter = _._hoist_resume(`a0`, 0, `Aa`, `Ac`),
  $el2_getter = _._hoist(0, `Ab`),
  $el_getter = _._hoist(0, `Aa`);
(_._script(`a1`, ($scope) => {
  {
    let el = $el_getter($scope)();
    el && (el.innerHTML = `First Only`);
  }
  {
    let el = $el2_getter($scope)();
    el && (el.innerHTML = `First Only`);
  }
  {
    let i = 0;
    for (let el of $el3_getter($scope)) el.innerHTML = `All (${i++})`;
  }
}),
  init());
