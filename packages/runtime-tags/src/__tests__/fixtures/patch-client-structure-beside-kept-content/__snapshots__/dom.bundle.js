// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// tags/badge.marko
const $template = "<span> </span><!><!>";
const $walks = "D l%c";
const $if$1 = /*@__PURE__*/ _if(1, "<em>three</em>");
const $input_tag = ($scope, input_tag) => {
	_text($scope.a, input_tag);
	$if$1($scope, input_tag === "t3" ? 0 : 1);
};

// template.marko
const $for_content__input_tag = /*@__PURE__*/ _for_closure_patch("a3", 2, ($scope) => $input_tag($scope.a, $scope._.h), 11);
const $for_content__setup = $for_content__input_tag;
const $if_content__input_tag = /*@__PURE__*/ _if_closure_patch("a2", 1, 0, ($scope) => $input_tag($scope.a, $scope._.h));
const $if_content__setup = $if_content__input_tag;
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 10, ($scope) => _text($scope.a, $scope._.g), 0, "a5", 0);
const $card_content = _content$1("a1", "<em> </em>", "D ", $card_content__input_label);
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), $if_content__setup);
const $show = _let(8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $for = /*@__PURE__*/ _for_of_unkeyed(2, /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), $for_content__setup);
const $items = _let(9, ($scope) => $for($scope, [$scope.j]));
const $setup__script = _script("a4", ($scope) => _on($scope.d, "click", function() {
	$show($scope, !$scope.i);
	$items($scope, []);
}));
