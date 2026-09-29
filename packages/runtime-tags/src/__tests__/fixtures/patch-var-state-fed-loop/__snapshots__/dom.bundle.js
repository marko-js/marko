// tags/labeler.marko
const $template = "<span> </span>";
const $input_title = /*@__PURE__*/ _const(3, ($scope) => {
	_return($scope, "[" + $scope.d + "]");
	_text($scope.a, $scope.d);
});

// tags/list.marko
const $for_content__input_suffix__OR__item = /*@__PURE__*/ _fill_join_for("c2", 4, /*@__PURE__*/ _init_join("c4", /*@__PURE__*/ _or(5, ($scope) => $input_title($scope.a, $scope.e + $scope._.e))), 0, 0);
const $for_content__input_suffix = /*@__PURE__*/ _for_closure(0, $for_content__input_suffix__OR__item);
const $for_content__setup = ($scope) => {
	$for_content__input_suffix._($scope);
	_var($scope, 0, $for_content__label);
};
const $for_content__label = _var_resume("c1", ($scope, label) => _text($scope.c, label));
const $for_content__item = /*@__PURE__*/ _const(4, $for_content__input_suffix__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l"), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input_suffix$1 = /*@__PURE__*/ _fill_const("c2", 4, $for_content__input_suffix);

// template.marko
const $items = /*@__PURE__*/ _let(5, ($scope) => $input_items($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, ["y"]);
}));
const $input_suffix = _fill_const("a1", 4, ($scope) => $input_suffix$1($scope.a, $scope.e));
