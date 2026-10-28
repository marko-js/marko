// show-await.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/show-await.marko_1_input_label#0:4/subscribe");
const $await_content__setup = $await_content__input_label;
const $await_content__x = ($scope, x) => _text($scope["#text/1"], x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!>:<!></p>", "D%c%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup = $await_content;
const $input_promise = $await_promise;
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var show_await_default = /*@__PURE__*/ _template("__tests__/show-await.marko", $template, "b%c", $setup, $input);

// template.marko
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
let $load_ShowAwait_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:show-await.marko.setup.mjs"));
let $load_ShowAwait_tag_input_promise = /*@__PURE__*/ _load_signal(($_) => import("./v:show-await.marko.input_promise.mjs"));
let $load_ShowAwait_tag_input_label = /*@__PURE__*/ _load_signal(($_) => import("./v:show-await.marko.input_label.mjs"));
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $load_ShowAwait_tag_input_label($scope["#childScope/1"], $scope._.input_label));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__n._($scope);
	$load_ShowAwait_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $if_content__n = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $load_ShowAwait_tag_input_promise($scope["#childScope/1"], Promise.resolve($scope._.n)));
const $n = /*@__PURE__*/ _let("n/6", $if_content__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:show-await.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];
