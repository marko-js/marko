// tags/counter.marko
const $template$1 = "<button class=inc> </button>";
const $walks$1 = " D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko_fill0", "n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!><!><!>${_w0}${_w1}`)($Show_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b%b%b/${_w0}&/${_w1}&`)($Show_content__walks, $walks$1);
const $if_content2__h = /*@__PURE__*/ _init_resume("__tests__/template.marko_5_h#2:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill3", "h", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.h()))));
const $if_content2__setup = $if_content2__h;
const $if_content__g = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_g#1:6/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.g())));
const $if_content__setup = $if_content__g;
const $await_content__f = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_f#0:10/init", /*@__PURE__*/ _closure_get("f/13", ($scope) => _text($scope["#text/1"], $scope._.f()), 0, "__tests__/template.marko_3_f#0:10/subscribe"));
const $await_content__setup = $await_content__f;
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $Show_content__if = /*@__PURE__*/ _if("#text/0", "<i> </i>", "D ", $if_content2__setup);
const $Show_content__input_x = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_x", /*@__PURE__*/ _closure_get("input_x/12", ($scope) => $Show_content__if($scope, $scope._.input_x ? 0 : 1), 0, "__tests__/template.marko_2_input_x#0:8/subscribe"), 0);
const $Show_content__setup = $Show_content__input_x;
const $Show_content__h = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "h", $if_content2__h);
const $Show_content__v = /*@__PURE__*/ _const("v", ($scope) => $Show_content__h($scope, $h($scope)));
const $Show_content__$params = ($scope, $params4) => $Show_content__$temp($scope, $params4[0]);
const $Show_content__$temp = ($scope, $temp) => $Show_content__v($scope, $temp.v);
const $for_content__g = /*@__PURE__*/ _const("g", $if_content__g);
const $for_content__v = /*@__PURE__*/ _const("v", ($scope) => $for_content__g($scope, $g($scope)));
const $for_content__input_a__OR__item = /*@__PURE__*/ _fill_for("__tests__/template.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_a#0:6_item#3/init", 4, ($scope) => $for_content__v($scope, $scope._.input_a + $scope.item)), "#text/0");
const $for_content__input_a = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_a__OR__item);
const $for_content__setup = ($scope) => {
	$for_content__input_a._($scope);
	$for_content__input_x._($scope);
	$for_content__f._($scope);
};
const $for_content__if = /*@__PURE__*/ _if("#text/1", "<em> </em>", "D ", $if_content__setup);
const $for_content__input_x = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_x#0:8/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "input_x", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__if($scope, $scope._.input_x ? 0 : 1))));
const $for_content__f = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_f#0:10/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill2", "f", /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/0"], $scope._.f()))));
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_a__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $f2__closure = /*@__PURE__*/ _closure($await_content__f);
const $f2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "f", ($scope) => {
	$for_content__f($scope);
	$f2__closure($scope);
});
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => {
	$Show_content__v($scope["#childScope/2"], $scope.input_a);
	$f2($scope, $f($scope));
	$for_content__input_a($scope);
});
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<span> </span><!><!>", "D l%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<b><!><!></b>", "D%b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$scope["#childScope/2"]._ = $scope;
	$Show_content__setup($scope["#childScope/2"]);
	$setup$1($scope["#childScope/3"]);
}
const $input_value = $await_promise;
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_a($scope, input.a);
	$input_items($scope, input.items);
	$input_x($scope, input.x);
};
const $input_x__closure = /*@__PURE__*/ _closure($Show_content__input_x);
const $input_x = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_x", ($scope) => {
	$for_content__input_x($scope);
	$input_x__closure($scope);
});
const $h = ($scope) => function() {
	return $scope.v;
};
const $g = ($scope) => function() {
	return $scope.v;
};
const $f = ($scope) => function() {
	return $scope.input_a;
};
_bind_resume("__tests__/template.marko_2/h v", $h);
_bind_resume("__tests__/template.marko_1/g v", $g);
_bind_resume("__tests__/template.marko_0/f input_a", $f);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
