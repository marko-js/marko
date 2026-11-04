// tags/show-label.marko
const $template$1 = "<i> </i>";
const $walks$1 = "D l";
const $setup__$global_label = /*@__PURE__*/ _fill_global("__tests__/tags/show-label.marko_0_$global_label#4", ($scope) => _text($scope["#text/0"], $scope.$global.label), "label");
const $setup$1 = $setup__$global_label;
var show_label_default = /*@__PURE__*/ _template("__tests__/tags/show-label.marko", $template$1, "D l", $setup$1);

// template.marko
const $Label_content__walks = "D%c%l";
const $Label_content__template = "<i><!>:<!></i>";
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(msg) {
	throw new Error(msg);
}
const $for_content__setup__$global_label = /*@__PURE__*/ _fill_global_for("__tests__/template.marko_5_$global_label#0:16", "#text/1", ($scope) => _text($scope["#text/1"], $scope.$global.label), "label");
const $for_content__setup = ($scope) => {
	$for_content__setup__$global_label($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $Label_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $Label_content__setup__$global_label = /*@__PURE__*/ _fill_global("__tests__/template.marko_4_$global_label#0:16", ($scope) => _text($scope["#text/1"], $scope.$global.label), "label");
const $Label_content__setup = $Label_content__setup__$global_label;
const $Label_content__$params = ($scope, $params3) => $Label_content__$temp($scope, $params3[0]);
const $Label_content__$temp = ($scope, $temp) => $Label_content__x($scope, $temp.x);
const $try_content__input_late = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_late#0:5/subscribe", "input_late/8", ($scope) => _text($scope["#text/0"], $scope._.input_late ? boom("late") : "ok"));
const $try_content__setup = $try_content__input_late;
const $if_content__for = /*@__PURE__*/ _for_until_unkeyed("#text/1", "<s><!>:<!></s>", "D%c%", $for_content__setup);
const $if_content__input_n = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_n#0:4/subscribe", "input_n/7", ($scope) => $if_content__for($scope, [$scope._._.input_n]), ($scope) => $scope._._, "__tests__/template.marko_0_input_n#4/subscribers", 0);
const $if_content__setup__$global_label = /*@__PURE__*/ _fill_global("__tests__/template.marko_2_$global_label#0:16", ($scope) => _text($scope["#text/0"], $scope.$global.label), "label");
const $if_content__setup = ($scope) => {
	$if_content__input_n($scope);
	$if_content__setup__$global_label($scope);
};
const $catch_content__if = /*@__PURE__*/ _if("#text/5", "<u> </u><!><!>", "D l%", $if_content__setup);
const $catch_content__input_show = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_show#0:3/subscribe", "input_show/6", ($scope) => $catch_content__if($scope, $scope._.input_show ? 0 : 1), 0, "__tests__/template.marko_0_input_show#3/subscribers", 0);
const $catch_content__count__$global_label = /*@__PURE__*/ _fill_global("__tests__/template.marko_1_$global_label#0:16_count#9", ($scope) => _text($scope["#text/2"], $scope.count + ":" + _global_read($scope.$global, "label")), "label");
const $catch_content__count = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_count#9/fill", "count/9", $catch_content__count__$global_label);
const $catch_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#em/1"], "click", function() {
	$catch_content__count($scope, +$scope.count + 1);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__input_show($scope);
	$setup$1($scope["#childScope/3"]);
	$Label_content__setup($scope["#childScope/4"]);
	$Label_content__x($scope["#childScope/4"], 1);
	$catch_content__setup__script($scope);
	$catch_content__count($scope, 0);
};
const $catch_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0, _w1) => `<b> </b><em> </em>${_w0}${_w1}<!><!>`)($template$1, $Label_content__template), /*@__PURE__*/ ((_w0, _w1) => `D l D l/${_w0}&/${_w1}&%c`)("D l", $Label_content__walks), $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup = $try;
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_n($scope, input.n);
	$input_late($scope, input.late);
};
const $input_show__closure = /*@__PURE__*/ _closure($catch_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
const $input_n__closure = /*@__PURE__*/ _closure($if_content__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", $input_n__closure);
const $input_late__closure = /*@__PURE__*/ _closure($try_content__input_late);
const $input_late = /*@__PURE__*/ _const("input_late", $input_late__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
