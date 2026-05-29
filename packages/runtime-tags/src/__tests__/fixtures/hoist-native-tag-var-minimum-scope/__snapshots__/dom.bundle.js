// total: 2525 (min) 1210 (brotli)
// template.marko: 333 (min) 149 (brotli)
const $el_getter = _hoist_resume("a0", 0, "Aa", "Ad");
const $for_content__$el_getter = _hoist_resume("a1", 0, "Aa");
const $for_content2__$el_getter = _hoist_resume("a2", 0);
const $for_content2__setup__script = _script("a3", ($scope) => $scope._._.c.innerHTML += `${[...$for_content2__$el_getter($scope)].length}; ${$scope.a.className}\n\t`);
const $for_content__setup__script = _script("a4", ($scope) => $scope._.b.innerHTML += `${[...$for_content__$el_getter($scope)].length}; ${$for_content__$el_getter($scope)().className}\n\t`);
const $setup__script = _script("a5", ($scope) => $scope.a.innerHTML += `${[...$el_getter($scope)].length}; ${$el_getter($scope)().className}\n\t`);
