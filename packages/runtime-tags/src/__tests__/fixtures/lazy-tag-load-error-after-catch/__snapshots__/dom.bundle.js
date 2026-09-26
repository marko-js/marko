// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ (/* @__PURE__ */ _load_event_trigger("click", "#load"))(() => import("./v:child.marko.setup.mjs")));
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content(2, " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(2, $await_content__$params);
const $if_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope.b, $scope.a);
	$await_content($scope);
	$if_content__await_promise($scope, rejectAfter(/* @__PURE__ */ new Error("rejected"), 1));
};
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("b1", "caught: <!>", "b%", 0, $catch_content__$params);
const $placeholder_content = _content("b0", "loading");
const $try_content__if = /*@__PURE__*/ _if(0, "<!><!><!><!>", "b%/&b%", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get(3, ($scope) => $try_content__if($scope, $scope._.c ? 0 : 1), 0, "b3");
const $show = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__show));
const $setup__script = _script("b4", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));

// child.marko
const $template = "<span>child</span>";
const $setup = () => {};
throw new Error("load failed");

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
