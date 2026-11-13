// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Parent_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:parent.marko.setup.mjs"));
function $setup($scope) {
	$load_Parent_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<button class=child> </button>";
const $walks = " D l";
const $item = /*@__PURE__*/ _let("item/5", ($scope) => $item_name($scope, $scope.item?.name));
const $item_name = /*@__PURE__*/ _const("item_name", ($scope) => _text($scope["#text/1"], $scope.item_name));
const $input_item = $item;
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$item($scope, { ...$scope.item });
	console.log("child", $scope.item.name);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_item($scope, input.item);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// parent.marko
const $template = "<button class=parent>parent</button><!><!><!>";
const $walks = " b%/&b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_item = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_item.mjs"));
const $placeholder_content = _content_resume("__tests__/parent.marko_4*content", "loading");
const $await_content2__first = /*@__PURE__*/ _closure_get("first/5", ($scope) => $load_Child_tag_input_item($scope["#childScope/1"], $scope._._._.first), ($scope) => $scope._._._);
const $await_content2__setup = ($scope) => {
	$await_content2__first($scope);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%/&", $await_content2__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter("third", 2));
};
const $await_content__second = /*@__PURE__*/ _const("second", ($scope) => $load_Child_tag_input_item($scope["#childScope/2"], $scope.second));
const $await_content__try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $await_content__setup__script = _script("__tests__/parent.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log("later", JSON.stringify($scope.second));
}));
const $await_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
	$await_content__try($scope);
	$await_content__setup__script($scope);
};
const $await_content__$params = ($scope, $params2) => $await_content__second($scope, { name: $params2[0] });
const $first = /*@__PURE__*/ _const("first", ($scope) => $load_Child_tag_input_item($scope["#childScope/2"], $scope.first));
const $await_content = /*@__PURE__*/ _await_content("#text/3", "<button class=later>later</button><!><!><!>", " b%/&b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/3", $await_content__$params);
const $setup__script = _script("__tests__/parent.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log("parent", JSON.stringify($scope.first));
}));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
	$await_content($scope);
	$first($scope, { name: "first" });
	$await_promise($scope, resolveAfter("second", 1));
	$setup__script($scope);
}
var parent_default = /*@__PURE__*/ _template("__tests__/parent.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:parent.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
