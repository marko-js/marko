// tags/child.marko
const $_return = ($scope) => () => $scope.c;
_resumed.b0 = $_return;

// template.marko
const $ref_getter = /*@__PURE__*/ _hoist(3, "Aa", "Ad");
const $for_content__ref_getter = /*@__PURE__*/ _hoist(3, "Aa");
const $for_content2__ref_getter = /*@__PURE__*/ _hoist(3);
const $for_content2__setup__script = _script("a0", ($scope) => $scope._._.c.innerHTML += `${[...$for_content2__ref_getter($scope)].length}; ${$for_content2__ref_getter($scope)()}\n\t`);
const $for_content__setup__script = _script("a1", ($scope) => $scope._.b.innerHTML += `${[...$for_content__ref_getter($scope)].length}; ${$for_content__ref_getter($scope)()}\n\t`);
const $setup__script = _script("a2", ($scope) => $scope.a.innerHTML += `${[...$ref_getter($scope)].length}; ${$ref_getter($scope)()}\n\t`);
