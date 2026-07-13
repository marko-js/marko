// tags/child.marko
function $_return($scope) {
	return () => $scope.c;
}
_resume("b0", $_return);

// template.marko
const $ref_getter = _hoist_resume("a0", 3, "Aa", "Ad");
const $for_content__ref_getter = _hoist_resume("a1", 3, "Aa");
const $for_content2__ref_getter = _hoist_resume("a2", 3);
const $for_content2__setup__script = _script("a3", ($scope) => $scope._._.c.innerHTML += `${[...$for_content2__ref_getter($scope)].length}; ${$for_content2__ref_getter($scope)()}\n\t`);
const $for_content__setup__script = _script("a4", ($scope) => $scope._.b.innerHTML += `${[...$for_content__ref_getter($scope)].length}; ${$for_content__ref_getter($scope)()}\n\t`);
const $setup__script = _script("a5", ($scope) => $scope.a.innerHTML += `${[...$ref_getter($scope)].length}; ${$ref_getter($scope)()}\n\t`);
