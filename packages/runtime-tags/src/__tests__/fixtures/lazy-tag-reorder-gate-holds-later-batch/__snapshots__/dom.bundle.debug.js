// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $shared = /*@__PURE__*/ _let("shared/7");
const $input_shared = $shared;
const $count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + $scope.shared[$scope.input_label]);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_attr_class($scope["#button/0"], $scope.input_label);
	_text($scope["#text/1"], $scope.input_label);
});
const $input = ($scope, input) => {
	$input_shared($scope, input.shared);
	$input_label($scope, input.label);
};
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<!><!><!><!><!>";
const $walks = "b%/&b%b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_label.mjs"));
let $load_Child_tag_input_shared = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_shared.mjs"));
const $await_content2__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_3*content", "loading");
const $await_content__shared = /*@__PURE__*/ _closure_get("shared/5", ($scope) => $load_Child_tag_input_shared($scope["#childScope/1"], $scope._.shared));
const $await_content__setup = ($scope) => {
	$await_content__shared($scope);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $await_content__$params = ($scope, $params3) => $load_Child_tag_input_label($scope["#childScope/1"], $params3[0]);
const $try_content__shared = /*@__PURE__*/ _closure_get("shared/5", ($scope) => $load_Child_tag_input_shared($scope["#childScope/1"], $scope._.shared));
const $await_content2 = /*@__PURE__*/ _await_content("#text/2", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$try_content__shared($scope);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_label($scope["#childScope/1"], "held");
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter("done", 2));
};
const $shared = /*@__PURE__*/ _const("shared");
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!><!>", "b%/&b%", $try_content__setup, $placeholder_content);
const $await_content = /*@__PURE__*/ _await_content("#text/3", "<!><!><!>", "b%/&", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/3", $await_content__$params);
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_label($scope["#childScope/1"], "first");
	$load_Child_tag_input_shared($scope["#childScope/1"], { first: 3 });
	$await_content($scope);
	$shared($scope, {
		held: 1,
		streamed: 2
	});
	$try($scope);
	$await_promise($scope, resolveAfter("streamed", 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
