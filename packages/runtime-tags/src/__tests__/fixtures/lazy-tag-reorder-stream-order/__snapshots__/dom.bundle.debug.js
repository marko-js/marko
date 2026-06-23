// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $input_label__OR__shared__OR__count__script = _script("__tests__/child.marko_0_input_label_shared_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + $scope.shared[$scope.input_label]);
}));
const $input_label__OR__shared__OR__count = /* @__PURE__ */ _or(9, $input_label__OR__shared__OR__count__script, 2);
const $shared = /* @__PURE__ */ _let("shared/7", $input_label__OR__shared__OR__count);
const $input_shared = $shared;
const $count = /* @__PURE__ */ _let("count/8", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$input_label__OR__shared__OR__count($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
const $input_label = /* @__PURE__ */ _const("input_label", ($scope) => {
	_attr_class($scope["#button/0"], $scope.input_label);
	_text($scope["#text/1"], $scope.input_label);
	$input_label__OR__shared__OR__count($scope);
});
const $input = ($scope, input) => {
	$input_shared($scope, input.shared);
	$input_label($scope, input.label);
};
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_label.mjs"));
let $load_Child_tag_input_shared = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_shared.mjs"));
_enable_catch();
let $load_Child_setup2 = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
const $placeholder_content = _content_resume("__tests__/template.marko_4_content", "loading", "b");
const $await_content2__shared = /* @__PURE__ */ _closure_get("shared", ($scope) => $load_Child_tag_input_shared($scope["#childScope/1"], $scope._.shared), 0, "__tests__/template.marko_3_shared/pending");
const $await_content2__setup = ($scope) => {
	$await_content2__shared($scope);
	$load_Child_setup2($scope);
};
const $await_content2__label = ($scope, label) => $load_Child_tag_input_label($scope["#childScope/1"], label);
const $await_content2__$params = ($scope, $params3) => $await_content2__label($scope, $params3[0]);
const $await_content__shared = /* @__PURE__ */ _closure_get("shared", ($scope) => $load_Child_tag_input_shared($scope["#childScope/1"], $scope._._.shared), ($scope) => $scope._._, "__tests__/template.marko_2_shared/pending");
const $await_content__setup = ($scope) => {
	$await_content__shared($scope);
	$load_Child_setup($scope);
};
const $await_content__label = ($scope, label) => $load_Child_tag_input_label($scope["#childScope/1"], label);
const $await_content__$params = ($scope, $params2) => $await_content__label($scope, $params2[0]);
const $await_content = /* @__PURE__ */ _await_content("#text/0", "<!><!><!><!>", "b%/&c", $await_content__setup);
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("reordered", 1));
};
const $shared = /* @__PURE__ */ _const("shared");
const $try = /* @__PURE__ */ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
const $await_content2 = /* @__PURE__ */ _await_content("#text/1", "<!><!><!><!>", "b%/&c", $await_content2__setup);
const $await_promise = /* @__PURE__ */ _await_promise("#text/1", $await_content2__$params);
function $setup($scope) {
	$await_content2($scope);
	$shared($scope, {
		reordered: 1,
		streamed: 2
	});
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$await_promise($scope, resolveAfter("streamed", 2));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
