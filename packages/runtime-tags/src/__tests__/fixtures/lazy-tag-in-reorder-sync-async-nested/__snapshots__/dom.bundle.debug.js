// async-child.marko
const $template = "<button><!>:<!></button><!><!>";
const $walks = " D%c%l%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
let $load_Child_tag_input_shared = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_shared.mjs"));
const $await_content__input_label__OR__v = /*@__PURE__*/ _or(4, ($scope) => $load_Child_tag_input_label($scope["#childScope/1"], `${$scope._.input_label}-${$scope.v}`));
const $await_content__input_label = /*@__PURE__*/ _closure_get("input_label/10", $await_content__input_label__OR__v, 0, "__tests__/async-child.marko_1_input_label#0:6/subscribe");
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	$await_content__input_shared($scope);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $await_content__input_shared = /*@__PURE__*/ _closure_get("input_shared/11", ($scope) => $load_Child_tag_input_shared($scope["#childScope/1"], $scope._.input_shared), 0, "__tests__/async-child.marko_1_input_shared#0:7/subscribe");
const $await_content__v = /*@__PURE__*/ _const("v", $await_content__input_label__OR__v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $count = /*@__PURE__*/ _let("count/9", ($scope) => _text($scope["#text/2"], $scope.count));
const $await_content = /*@__PURE__*/ _await_content("#text/3", "<!><!><!>", "b%/&", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/3", $await_content__$params);
const $setup__script = _script("__tests__/async-child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + $scope.input_shared_n);
}));
function $setup($scope) {
	$await_content($scope);
	$count($scope, 0);
	$await_promise($scope, resolveAfter("nested", 2));
	$setup__script($scope);
}
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_attr_class($scope["#button/0"], $scope.input_label);
	_text($scope["#text/1"], $scope.input_label);
	$input_label__closure($scope);
});
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_shared($scope, input.shared);
};
const $input_shared__closure = /*@__PURE__*/ _closure($await_content__input_shared);
const $input_shared = /*@__PURE__*/ _const("input_shared", ($scope) => {
	$input_shared_n($scope, $scope.input_shared?.n);
	$input_shared__closure($scope);
});
const $input_shared_n = /*@__PURE__*/ _const("input_shared_n");
var async_child_default = /*@__PURE__*/ _template("__tests__/async-child.marko", $template, $walks, $setup, $input);

// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + $scope.input_shared_n);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => {
	_attr_class($scope["#button/0"], input_label);
	_text($scope["#text/1"], input_label);
};
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_shared($scope, input.shared);
};
const $input_shared = ($scope, input_shared) => $input_shared_n($scope, input_shared?.n);
const $input_shared_n = /*@__PURE__*/ _const("input_shared_n");
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<!><!><!><!><!>";
const $walks = "b%/&b%b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
let $load_Child_tag_input_shared = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_shared.mjs"));
let $load_AsyncChild_setup = /*@__PURE__*/ _load_setup(() => import("./v:async-child.marko.setup.mjs"));
let $load_AsyncChild_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:async-child.marko.input_label.mjs"));
let $load_AsyncChild_tag_input_shared = /*@__PURE__*/ _load_signal(() => import("./v:async-child.marko.input_shared.mjs"));
const $placeholder_content = _content("__tests__/template.marko_4*content", "loading");
const $await_content2__shared = /*@__PURE__*/ _closure_get("shared/5", ($scope) => $load_Child_tag_input_shared($scope["#childScope/1"], $scope._.shared));
const $await_content2__setup = ($scope) => {
	$await_content2__shared($scope);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $await_content2__v = ($scope, v) => $load_Child_tag_input_label($scope["#childScope/1"], v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $await_content__shared = /*@__PURE__*/ _closure_get("shared/5", ($scope) => {
	$load_Child_tag_input_shared($scope["#childScope/1"], $scope._._.shared);
	$load_AsyncChild_tag_input_shared($scope["#childScope/3"], $scope._._.shared);
}, ($scope) => $scope._._);
const $await_content__setup = ($scope) => {
	$await_content__shared($scope);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_AsyncChild_setup($scope, $scope["#childScope/3"], $scope["#text/2"]);
};
const $await_content__v = ($scope, v) => {
	$load_Child_tag_input_label($scope["#childScope/1"], v);
	$load_AsyncChild_tag_input_label($scope["#childScope/3"], `${v}-async`);
};
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!><!>", "b%/&b%/&", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("reordered", 1));
};
const $shared = /*@__PURE__*/ _const("shared", ($scope) => $load_Child_tag_input_shared($scope["#childScope/1"], $scope.shared));
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $await_content2 = /*@__PURE__*/ _await_content("#text/3", "<!><!><!>", "b%/&", $await_content2__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/3", $await_content2__$params);
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_label($scope["#childScope/1"], "main");
	$await_content2($scope);
	$shared($scope, { n: 1 });
	$try($scope);
	$await_promise($scope, resolveAfter("streamed", 3));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:async-child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
