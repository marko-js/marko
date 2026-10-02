// child.marko
const $template = "<button class=child> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + Object.keys($scope.input_shared).length);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_shared($scope, input.shared);
const $input_shared = /*@__PURE__*/ _const("input_shared");
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_shared = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_shared.mjs"));
const $await_content3__c = ($scope, c) => _text($scope["#text/0"], c);
const $await_content3__$params = ($scope, $params4) => $await_content3__c($scope, $params4[0]);
const $placeholder_content3__shared = /*@__PURE__*/ _const("shared", ($scope) => $load_Child_tag_input_shared($scope["#childScope/1"], $scope.shared));
const $placeholder_content3__count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/3"], $scope.count));
const $placeholder_content3__setup__script = _script("__tests__/template.marko_8", ($scope) => _on($scope["#button/2"], "click", function() {
	$placeholder_content3__count($scope, $scope.count + Object.keys($scope.shared).length);
}));
const $placeholder_content3__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$placeholder_content3__shared($scope, { n: 1 });
	$placeholder_content3__count($scope, 0);
	$placeholder_content3__setup__script($scope);
};
const $placeholder_content3 = _content("__tests__/template.marko_8*content", "<!><!><button class=placeholder> </button>", "b%/&b D ", $placeholder_content3__setup);
const $await_content3 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content3__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content3__$params);
const $try_content3__setup = ($scope) => {
	$await_content3($scope);
	$try_content3__await_promise($scope, resolveAfter("c", 3));
};
const $await_content2__b = ($scope, b) => _text($scope["#text/0"], b);
const $await_content2__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content3__setup, $placeholder_content3);
const $await_content2__setup = ($scope) => $await_content2__try($scope);
const $await_content2__$params = ($scope, $params3) => $await_content2__b($scope, $params3[0]);
const $placeholder_content2 = _content("__tests__/template.marko_5*content", "middle");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "%b%", $await_content2__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, resolveAfter("b", 1));
};
const $await_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $await_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content2__setup, $placeholder_content2);
const $await_content__setup = ($scope) => $await_content__try($scope);
const $await_content__$params = ($scope, $params2) => $await_content__a($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_2*content", "outer");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "%b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("a", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
