// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_id__script = _script("__tests__/child.marko_0_input_id#5", ($scope) => document.getElementById("log").textContent += "[" + $scope.input_id + "]");
const $input_id = /*@__PURE__*/ _const("input_id", ($scope) => {
	_attr_class($scope["#button/0"], $scope.input_id);
	_text($scope["#text/1"], $scope.input_id);
	$input_id__script($scope);
});
const $input = ($scope, input) => $input_id($scope, input.id);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// reordered.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/reordered.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_id__script = _script("__tests__/reordered.marko_0_input_id#5", ($scope) => document.getElementById("log").textContent += "[" + $scope.input_id + "]");
const $input_id = /*@__PURE__*/ _const("input_id", ($scope) => {
	_attr_class($scope["#button/0"], $scope.input_id);
	_text($scope["#text/1"], $scope.input_id);
	$input_id__script($scope);
});
const $input = ($scope, input) => $input_id($scope, input.id);
var reordered_default = /*@__PURE__*/ _template("__tests__/reordered.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<div id=log></div><!><!><!><!><!>";
const $walks = "b%/&b%b%b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_id = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_id.mjs"));
let $load_Reordered_setup = /*@__PURE__*/ _load_setup(() => import("./v:reordered.marko.setup.mjs"));
let $load_Reordered_tag_input_id = /*@__PURE__*/ _load_signal(() => import("./v:reordered.marko.input_id.mjs"));
const $await_content3__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $await_content3__v = ($scope, v) => $load_Child_tag_input_id($scope["#childScope/1"], v);
const $await_content3__$params = ($scope, $params4) => $await_content3__v($scope, $params4[0]);
const $await_content2__setup = ($scope) => {
	$load_Reordered_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $await_content2__v = ($scope, v) => $load_Reordered_tag_input_id($scope["#childScope/1"], v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $placeholder_content = _content("__tests__/template.marko_3*content", "loading");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%/&", $await_content2__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter("c", 2));
};
const $await_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $await_content__v = ($scope, v) => $load_Child_tag_input_id($scope["#childScope/1"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/2", "<!><!><!>", "b%/&", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $await_content3 = /*@__PURE__*/ _await_content("#text/4", "<!><!><!>", "b%/&", $await_content3__setup);
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/4", $await_content3__$params);
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_id($scope["#childScope/1"], "a");
	$await_content($scope);
	$await_content3($scope);
	$await_promise($scope, resolveAfter("b", 1));
	$try($scope);
	$await_promise2($scope, resolveAfter("d", 3));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:reordered.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
