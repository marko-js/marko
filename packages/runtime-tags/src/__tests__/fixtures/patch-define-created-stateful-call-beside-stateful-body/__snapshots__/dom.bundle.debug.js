// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($Inner_content__template);
const $template = "<!><!><!><!><button id=t>toggle</button>";
const $walks = "b%b%b%b b";
const $if_content3__label = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.label));
const $if_content3__setup = $if_content3__label;
const $if_content2__text = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.text));
const $if_content2__setup__script = _script("__tests__/template.marko_4", ($scope) => _on($scope["#button/2"], "click", function() {
	$Inner_content__n($scope._, +$scope._.n + 1);
}));
const $if_content2__setup = ($scope) => {
	$if_content2__text._($scope);
	$if_content2__n._($scope);
	$if_content2__setup__script($scope);
};
const $if_content2__n = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.n));
const $Outer_content__setup = ($scope) => {
	$Inner_content__setup($scope["#childScope/0"]);
	$Inner_content__isOpen($scope["#childScope/0"], true);
	$Inner_content__text($scope["#childScope/0"], "const");
};
const $Outer_content__if = /*@__PURE__*/ _if("#text/1", "<i> </i>", "D ", $if_content3__setup);
const $Outer_content__on = ($scope, on) => $Outer_content__if($scope, on ? 0 : 1);
const $Outer_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content3__label);
const $Outer_content__$params = ($scope, $params3) => $Outer_content__$temp($scope, $params3[0]);
const $Outer_content__$temp = ($scope, $temp2) => {
	$Outer_content__on($scope, $temp2.on);
	$Outer_content__tag_input_label($scope, $temp2.label);
};
const $Outer_content = _content("__tests__/template.marko_3*content", $Outer_content__template, $Outer_content__walks, $Outer_content__setup, $Outer_content__$params);
const $Inner_content__n = /*@__PURE__*/ _let("n/5", $if_content2__n);
const $Inner_content__setup = ($scope) => $Inner_content__n($scope, 1);
const $Inner_content__if = /*@__PURE__*/ _if("#text/0", "<em><!><!></em><button class=inc>+</button>", "D%b%l ", $if_content2__setup);
const $Inner_content__isOpen = ($scope, isOpen) => $Inner_content__if($scope, isOpen ? 0 : 1);
const $Inner_content__text__script = _script("__tests__/template.marko_2_text#4", ($scope) => console.log("inner effect", $scope.text));
const $Inner_content__text = /*@__PURE__*/ _const("text", ($scope) => {
	$if_content2__text($scope);
	$Inner_content__text__script($scope);
});
const $Inner_content__$params = ($scope, $params2) => $Inner_content__$temp($scope, $params2[0]);
const $Inner_content__$temp = ($scope, $temp) => {
	$Inner_content__isOpen($scope, $temp.isOpen);
	$Inner_content__text($scope, $temp.text);
};
const $Inner_content = _content("__tests__/template.marko_2*content", $Inner_content__template, $Inner_content__walks, $Inner_content__setup, $Inner_content__$params);
const $if_content__input_label = /*@__PURE__*/ _shell_init("__tests__/template.marko_1_input_label#0:7/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Outer_content__tag_input_label($scope["#childScope/0"], $scope._.input_label)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__init($scope);
};
const $if_content__init = _shell_setup("__tests__/template.marko_1_#childScope#0/init", ($scope) => {
	$Outer_content__setup($scope["#childScope/0"]);
	$Outer_content__on($scope["#childScope/0"], true);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $open__OR__T = /*@__PURE__*/ _or(14, ($scope) => $dynamicTag($scope, $scope.T, ($_) => ({
	on: !$scope.open,
	label: "dyn"
})));
const $T = /*@__PURE__*/ _const("T", $open__OR__T);
const $open__OR__Outer = /*@__PURE__*/ _or(12, ($scope) => $T($scope, $scope.open ? "div" : $scope.Outer));
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $U = ($scope, U) => $dynamicTag2($scope, U, ($_) => ({
	isOpen: true,
	text: "u"
}));
const $open__OR__Inner = /*@__PURE__*/ _or(10, ($scope) => $U($scope, $scope.open ? "div" : $scope.Inner));
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "open/8", ($scope) => {
	$open__OR__Outer($scope);
	$open__OR__T($scope);
	$open__OR__Inner($scope);
});
const $Inner = /*@__PURE__*/ _const("Inner", $open__OR__Inner);
const $Outer = /*@__PURE__*/ _const("Outer", $open__OR__Outer);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$Inner($scope, { content: $Inner_content($scope) });
	$Outer($scope, { content: $Outer_content($scope) });
	$setup__script($scope);
	$open($scope, false);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_label", $if_content__input_label));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
