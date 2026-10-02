// child.css
var child_default$1 = ".child {\n  color: green;\n}\n";

// child.marko
const $template = "<span class=child> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// template.marko
const $template = "<!><html><head><title>Branch</title></head><body><!></body></html>";
const $walks = "bDbD%m";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $if_content__v = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $load_Child_tag_input_value($scope["#childScope/1"], $scope._.v));
const $if_content__setup = ($scope) => {
	$if_content__v._($scope);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $await_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%/&", $if_content__setup);
const $await_content__show = /*@__PURE__*/ _let("show/4", ($scope) => $await_content__if($scope, $scope.show ? 0 : 1));
const $await_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content__show($scope, !$scope.show);
}));
const $await_content__setup = ($scope) => {
	$await_content__show($scope, true);
	$await_content__setup__script($scope);
};
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content__v = /*@__PURE__*/ _const("v");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button></button><!><!>", " b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter("x", 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
