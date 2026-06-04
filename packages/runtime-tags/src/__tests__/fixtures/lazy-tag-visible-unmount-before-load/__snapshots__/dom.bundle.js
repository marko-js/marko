// total: 277 (min) 193 (brotli)
// template.marko: 220 (min) 155 (brotli)
const $if = /* @__PURE__ */ _if(1, "<!><!><!><!>", "b%/&c", /* @__PURE__ */ _load_setup(0, 1, (/* @__PURE__ */ _load_visible_trigger(":is(body)"))(() => import("./v:child.marko.setup.mjs"))));
const $show__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
const $show = /* @__PURE__ */ _let(2, ($scope) => {
	$if($scope, $scope.c ? 0 : 1);
	$show__script($scope);
});

// total: 91 (min) 78 (brotli)
// child.marko: 0 (min) 1 (brotli)
const $template = "<span>child</span>";
const $setup = () => {};

// total: 85 (min) 73 (brotli)
// v:child.marko.setup.js: 17 (min) 18 (brotli)
const _ = [
	$template,
	"b",
	$setup
];
