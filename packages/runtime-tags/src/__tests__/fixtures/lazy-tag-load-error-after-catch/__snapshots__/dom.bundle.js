// template.marko
const $load_Child_trigger = /*@__PURE__*/ _load_trigger("_a", /*@__PURE__*/ _load_event_trigger("click", "#load"));
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.setup.mjs")));
const $await_content__$params = ($scope, value) => _text($scope.a, value);
const $await_content = /*@__PURE__*/ _await_content(2, " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(2, $await_content__$params);
const $if_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope.b, $scope.a);
	$await_content($scope);
	$if_content__await_promise($scope, rejectAfter(/* @__PURE__ */ new Error("rejected"), 1));
};
const $catch_content__$params = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("b2", "caught: <!>", "b%", 0, $catch_content__$params);
const $placeholder_content = _content("b1", "loading");
const $try_content__if = /*@__PURE__*/ _if(0, "<!><!><!><!>", "b%/&b%", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get(3, ($scope) => $try_content__if($scope, $scope._.c ? 0 : 1), 0, "b0");
const $show = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__show));
const $setup__script = _script("b3", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));

// child.marko
const $template = "<span>child</span>";
const $setup = ($_) => {};
throw new Error("load failed");

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
