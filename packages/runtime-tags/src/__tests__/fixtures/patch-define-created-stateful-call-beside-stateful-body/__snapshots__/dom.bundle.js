// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($Inner_content__template);
const $if_content3__label = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.f));
const $if_content3__setup = $if_content3__label;
const $if_content2__text = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $if_content2__setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$Inner_content__n($scope._, +$scope._.f + 1);
}));
const $if_content2__setup = ($scope) => {
	$if_content2__text._($scope);
	$if_content2__n._($scope);
	$if_content2__setup__script($scope);
};
const $if_content2__n = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.f));
const $Outer_content__setup = ($scope) => {
	$Inner_content__setup($scope.a);
	$Inner_content__isOpen($scope.a, true);
	$Inner_content__text($scope.a, "const");
};
const $Outer_content__if = /*@__PURE__*/ _if(1, "<i> </i>", "D ", $if_content3__setup);
const $Outer_content__on = ($scope, on) => $Outer_content__if($scope, on ? 0 : 1);
const $Outer_content__tag_input_label = /*@__PURE__*/ _const(5, $if_content3__label);
const $Outer_content__$params = ($scope, $params3) => $Outer_content__$temp($scope, $params3[0]);
const $Outer_content__$temp = ($scope, $temp2) => {
	$Outer_content__on($scope, $temp2.on);
	$Outer_content__tag_input_label($scope, $temp2.label);
};
const $Outer_content = _content$1("a4", $Outer_content__template, $Outer_content__walks, $Outer_content__setup, $Outer_content__$params);
const $Inner_content__n = /*@__PURE__*/ _let(5, $if_content2__n);
const $Inner_content__setup = ($scope) => $Inner_content__n($scope, 1);
const $Inner_content__if = /*@__PURE__*/ _if(0, "<em><!><!></em><button class=inc>+</button>", "D%b%l ", $if_content2__setup);
const $Inner_content__isOpen = ($scope, isOpen) => $Inner_content__if($scope, isOpen ? 0 : 1);
const $Inner_content__text__script = _script("a3", ($scope) => console.log("inner effect", $scope.e));
const $Inner_content__text = /*@__PURE__*/ _const(4, ($scope) => {
	$if_content2__text($scope);
	$Inner_content__text__script($scope);
});
const $Inner_content__$params = ($scope, $params2) => $Inner_content__$temp($scope, $params2[0]);
const $Inner_content__$temp = ($scope, $temp) => {
	$Inner_content__isOpen($scope, $temp.isOpen);
	$Inner_content__text($scope, $temp.text);
};
const $Inner_content = _content$1("a2", $Inner_content__template, $Inner_content__walks, $Inner_content__setup, $Inner_content__$params);
const $if_content__input_label = /*@__PURE__*/ _shell_init("a9", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Outer_content__tag_input_label($scope.a, $scope._.h)));
const $if_content__init = _resumed.a10 = ($scope) => {
	$Outer_content__setup($scope.a);
	$Outer_content__on($scope.a, true);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $open__OR__T = /*@__PURE__*/ _or(14, ($scope) => $dynamicTag($scope, $scope.n, ($_) => ({
	on: !$scope.i,
	label: "dyn"
})));
const $T = /*@__PURE__*/ _const(13, $open__OR__T);
const $open__OR__Outer = /*@__PURE__*/ _or(12, ($scope) => $T($scope, $scope.i ? "div" : $scope.l));
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $U = ($scope, U) => $dynamicTag2($scope, U, ($_) => ({
	isOpen: true,
	text: "u"
}));
const $open__OR__Inner = /*@__PURE__*/ _or(10, ($scope) => $U($scope, $scope.i ? "div" : $scope.j));
const $open = /*@__PURE__*/ _fill_let("a7", 8, ($scope) => {
	$open__OR__Outer($scope);
	$open__OR__T($scope);
	$open__OR__Inner($scope);
});
const $setup__script = _script("a5", ($scope) => _on($scope.d, "click", function() {
	$open($scope, !$scope.i);
}));
const $input_label = fill("a6", /*@__PURE__*/ _const(7, $if_content__input_label));
