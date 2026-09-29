// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/child.marko0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal_patch(() => import("./v:child.marko.input_label.mjs"), "ready:__tests__/child.marko");
const $await_content2__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $await_content2__second = ($scope, second) => $load_Child_tag_input_label($scope["#childScope/1"], second);
const $await_content2__$params = ($scope, $params3) => $await_content2__second($scope, $params3[0]);
const $await_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $await_content__first = ($scope, first) => $load_Child_tag_input_label($scope["#childScope/1"], first);
const $await_content__$params = ($scope, $params2) => $await_content__first($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%/&", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$await_content2($scope);
}
const $input_first = $await_promise;
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%/&", $await_content2__setup);
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $input_second = $await_promise2;
const $input = ($scope, input) => {
	$input_first($scope, input.first);
	$input_second($scope, input.second);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
