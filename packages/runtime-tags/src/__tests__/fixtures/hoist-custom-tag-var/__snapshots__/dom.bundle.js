// tags/child.marko
function $_return($scope) {
	return () => (html) => $scope.a.innerHTML = html;
}
_resume("b0", $_return);

// tags/thing.marko
const $input_value__script = _script("c0", ($scope) => $scope.c);

// template.marko
const $if_content5__setup = _script("a1", ($scope) => $setHtml3_getter($scope._)()("Hello world"));
const $setHtml3_getter = _hoist(2, "Ad");
const $setHtml2_getter = _hoist(2, "Ac");
const $setHtml_getter = _hoist_resume("a0", 2, "Aa", "Aa");
const $setup__script = _script("a2", ($scope) => {
	$setHtml_getter($scope)()("Hello world");
	$setHtml2_getter($scope)()("Hello world");
});
