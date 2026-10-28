// tags/show-await.marko
const $await_content__x = /*@__PURE__*/ _const(3, ($scope) => {
	_style_rule_item($scope.a, "--M_b0", $scope.d);
	_style_rule_item($scope.a, "--M_b2", $scope.d);
	_text($scope.b, $scope.d);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $for_content__prefix = ($scope, prefix) => _attr($scope.a, "id", prefix);
const $for_content__setup = ($scope) => $for_content__prefix($scope, _id($scope));
const $if_content2__for = /*@__PURE__*/ _for_of_unkeyed(0, "<span></span>", " ", $for_content__setup);
const $if_content2__setup = ($scope) => $if_content2__for($scope, [[
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9
]]);
const $if_content__p = /*@__PURE__*/ _if_closure(3, 0, ($scope) => $input_promise($scope.a, $scope._.k));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content2__setup);
const $prefixes = /*@__PURE__*/ _let(9, ($scope) => $if($scope, $scope.j ? 0 : 1));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$prefixes($scope, true);
	});
	_on($scope.c, "click", function() {
		$p($scope, Promise.resolve("swapped"));
	});
});
const $p = /*@__PURE__*/ _let(10, $if_content__p);
