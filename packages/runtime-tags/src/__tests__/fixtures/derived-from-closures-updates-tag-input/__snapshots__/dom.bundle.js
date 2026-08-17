// tags/child.marko
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.f();
}));
const $input_label = ($scope, input_label) => _text($scope.b, input_label);
const $input = ($scope, input) => {
	_attr($scope.c, "href", input.hrefFor("x"));
	$input_onToggle$1($scope, input.onToggle);
	$input_label($scope, input.label);
	$input_count$1($scope, input.count);
};
const $input_count$1 = ($scope, input_count) => _attr_class($scope.c, input_count % 2 ? "odd" : "even");
const $input_onToggle$1 = /*@__PURE__*/ _const(5);

// tags/parent.marko
const $if_content__input_count__OR__input_onToggle__OR__shut__OR__hrefFor__OR__label = /*@__PURE__*/ _or(3, ($scope) => $input($scope.a, {
	label: $scope.c,
	count: $scope._.d,
	hrefFor: $scope._.h,
	onToggle: $onToggle$1($scope)
}), 4);
const $if_content__input_count = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_count__OR__input_onToggle__OR__shut__OR__hrefFor__OR__label);
const $if_content__input_onToggle = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_count__OR__input_onToggle__OR__shut__OR__hrefFor__OR__label);
const $if_content__label = /*@__PURE__*/ _const(2, $if_content__input_count__OR__input_onToggle__OR__shut__OR__hrefFor__OR__label);
const $if_content__prefix__OR__shut = /*@__PURE__*/ _or(1, ($scope) => $if_content__label($scope, $scope._.g ? `${$scope._.f}:shut` : `${$scope._.f}:open`));
const $if_content__shut = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$if_content__prefix__OR__shut($scope);
	$if_content__input_count__OR__input_onToggle__OR__shut__OR__hrefFor__OR__label($scope);
});
const $shut = /*@__PURE__*/ _let(6, $if_content__shut);
const $input_count = /*@__PURE__*/ _const(3, $if_content__input_count);
const $input_onToggle = /*@__PURE__*/ _const(4, $if_content__input_onToggle);
const $onToggle$1 = ($scope) => function() {
	$shut($scope._, !$scope._.g);
	$scope._.e();
};
function $hrefFor(key) {
	return `#${key}`;
}
_resume("c1", $onToggle$1);
_resume("c0", $hrefFor);

// template.marko
const $count = /*@__PURE__*/ _let(1, ($scope) => {
	$input_count($scope.a, $scope.b);
	$input_onToggle($scope.a, $onToggle($scope));
});
const $onToggle = ($scope) => function() {
	$count($scope, +$scope.b + 1);
};
_resume("a0", $onToggle);
