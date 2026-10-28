// lazy-child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/lazy-child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var lazy_child_default = /*@__PURE__*/ _template("__tests__/lazy-child.marko", $template, $walks, $setup, $input);

// child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label$1 = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $Inner_content__walks = "b%/&c";
const $Inner_content__template = "<!><!><!>";
const $LazyBody_content__walks = "b%/&c";
const $LazyBody_content__template = "<!><!><!>";
const $ChildBody_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $ChildBody_content__template = $template$1;
const $OwnBody_content__walks = " Db%l";
const $OwnBody_content__template = "<button>own:<!></button>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(error) {
	throw error;
}
let $load_LazyChild_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy-child.marko.setup.mjs"));
let $load_LazyChild_tag_input_label = /*@__PURE__*/ _load_signal(($_) => import("./v:lazy-child.marko.input_label.mjs"));
const $Outer_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Inner_content__setup($scope["#childScope/0"]);
};
const $OwnBody_content__count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $OwnBody_content__setup__script = _script("__tests__/template.marko_6", ($scope) => _on($scope["#button/0"], "click", function() {
	$OwnBody_content__count($scope, +$scope.count + 1);
}));
const $OwnBody_content__setup = ($scope) => {
	$OwnBody_content__count($scope, 0);
	$OwnBody_content__setup__script($scope);
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__setup = ($scope) => {
	$scope["#childScope/1"]._ = $scope._;
	$LazyBody_content__setup($scope["#childScope/1"]);
	$scope["#childScope/2"]._ = $scope._;
	$ChildBody_content__setup($scope["#childScope/2"]);
	$OwnBody_content__setup($scope["#childScope/3"]);
	$scope["#childScope/4"]._ = $scope._;
	$Outer_content__setup($scope["#childScope/4"]);
};
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_5*content", /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `<b> </b>${_w0}${_w1}${_w2}${_w3}<!>`)($LazyBody_content__template, $ChildBody_content__template, $OwnBody_content__template, $Outer_content__template), /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `D l/${_w0}&/${_w1}&/${_w2}&/${_w3}&b`)($LazyBody_content__walks, $ChildBody_content__walks, $OwnBody_content__walks, $Outer_content__walks), $catch_content__setup, $catch_content__$params);
const $try_content__input_error = /*@__PURE__*/ _closure_get("input_error/6", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_4_input_error#0:4/subscribe");
const $try_content__setup = $try_content__input_error;
const $Inner_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => $load_LazyChild_tag_input_label($scope["#childScope/1"], $scope._.input_label), 0, "__tests__/template.marko_3_input_label#0:3/subscribe");
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$load_LazyChild_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $ChildBody_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label), 0, "__tests__/template.marko_2_input_label#0:3/subscribe");
const $ChildBody_content__setup = ($scope) => {
	$ChildBody_content__input_label($scope);
	$setup$1($scope["#childScope/0"]);
};
const $LazyBody_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => $load_LazyChild_tag_input_label($scope["#childScope/1"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:3/subscribe");
const $LazyBody_content__setup = ($scope) => {
	$LazyBody_content__input_label($scope);
	$load_LazyChild_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup = $try;
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_error($scope, input.error);
};
const $input_label__closure = /*@__PURE__*/ _closure($LazyBody_content__input_label, $ChildBody_content__input_label, $Inner_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);

// v:lazy-child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
