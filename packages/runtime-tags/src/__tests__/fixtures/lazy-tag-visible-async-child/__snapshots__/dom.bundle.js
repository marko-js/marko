// total: 314 (min) 191 (brotli)
// template.marko: 256 (min) 168 (brotli)
const $load_Child_trigger = /* @__PURE__ */ _load_visible_trigger(":is(body)", { rootMargin: "100px" });
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_setup = /* @__PURE__ */ _load_setup(2, 3, $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $count__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
const $count = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$count__script($scope);
});

// total: 1016 (min) 473 (brotli)
// child.marko: 100 (min) 84 (brotli)
const $template = "<!><!><!>";
const $await_content__count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$await_content__count($scope, $scope.e + 1);
}));
const $await_content__count = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$await_content__count__script($scope);
});
const $await_content__value = ($scope, value) => $await_content__count($scope, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /* @__PURE__ */ _await_content(0, "<button class=child>child <!></button>", " Db%l");
const $await_promise = /* @__PURE__ */ _await_promise(0, $await_content__$params);
const $setup = $await_content;
const $input_value = ($scope, input_value) => $await_promise($scope, resolveAfter(input_value, 1));

// total: 87 (min) 75 (brotli)
// v:child.marko.setup.js: 17 (min) 18 (brotli)
const _ = [
	$template,
	"b%c",
	$setup
];
