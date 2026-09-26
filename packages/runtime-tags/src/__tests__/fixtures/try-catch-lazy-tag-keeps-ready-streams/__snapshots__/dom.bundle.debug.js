// child.marko
const $template = "<button id=child> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// other.marko
const $template = "<button id=other> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/other.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var other_default = /*@__PURE__*/ _template("__tests__/other.marko", $template, $walks, $setup);

// template.marko
const $template = "<!><!><!><!><!>";
const $walks = "b%/&b%b%c";
let $load_Other_setup = /*@__PURE__*/ _load_setup(() => import("./v:other.marko.setup.mjs"));
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", " ", " ", 0, $catch_content__$params);
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/2", "<p> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $try_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$await_content($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("caught"), 1));
};
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!><!>", "b%/&b%", $try_content__setup);
const $await_content2 = /*@__PURE__*/ _await_content("#text/3", "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/3", $await_content2__$params);
function $setup($scope) {
	$load_Other_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$await_content2($scope);
	$try($scope, {
		placeholder: attrTag({ content: $placeholder_content($scope) }),
		catch: attrTag({ content: $catch_content($scope) })
	});
	$await_promise($scope, resolveAfter("done", 2));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:other.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
