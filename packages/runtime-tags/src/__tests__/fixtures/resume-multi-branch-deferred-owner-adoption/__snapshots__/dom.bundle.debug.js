// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__input__script = _script("__tests__/tags/child.marko_1_input", ($scope) => _lifecycle($scope, { onDestroy: function() {
	$scope._.input.log().append(`destroyed ${$scope._.input.item}`);
} }));
const $if_content__input = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input__script);
const $if_content__setup = ($scope) => {
	$if_content__input._($scope);
	$if_content__input_item._($scope);
};
const $if_content__input_item = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_item));
const $if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D l", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	$input_show($scope, $scope.input.show);
	$input_item($scope, $scope.input.item);
	$if_content__input($scope);
});
const $input_item = /*@__PURE__*/ _const("input_item", $if_content__input_item);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = "<button id=show>show</button><button id=clear>clear</button><div></div><!><!>";
const $walks = " b b b%c";
const $for_content__show__OR__item = /*@__PURE__*/ _or(3, ($scope) => $input($scope["#childScope/0"], {
	item: $scope.item,
	show: $scope._.show,
	log: $log_getter($scope._)
}));
const $for_content__show = /*@__PURE__*/ _for_closure("#text/3", $for_content__show__OR__item);
const $for_content__setup = $for_content__show;
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__show__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $log_getter = _el("__tests__/template.marko_0_#div", "#div/2");
const $for = /*@__PURE__*/ _for_of("#text/3", /*@__PURE__*/ ((_w0) => `<div>${_w0}</div>`)($template$1), /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c"), $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/4", ($scope) => $for($scope, [$scope.items]));
const $show = /*@__PURE__*/ _let("show/5", $for_content__show);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$show($scope, true);
	});
	_on($scope["#button/1"], "click", function() {
		$items($scope, []);
	});
});
function $setup($scope) {
	$items($scope, ["first", "second"]);
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
