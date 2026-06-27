// template.marko
let $load_Child_setup = /* @__PURE__ */ _load_setup(0, 1, () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
_enable_catch();
const $if_content__setup = ($scope) => {
	$load_Child_setup($scope);
	$load_Child_tag_input_value($scope.b, 1);
};
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("b1", "<div id=error> </div>", "D l", 0, $catch_content__$params);
const $placeholder_content = _content_resume("b0", "<div id=loading>loading</div>", "b");
const $try_content__if = /* @__PURE__ */ _if(0, "<!><!><!><!>", "b%/&c", $if_content__setup);
const $try_content__show = /* @__PURE__ */ _closure_get(2, ($scope) => $try_content__if($scope, $scope._.c ? 0 : 1));
const $show = /* @__PURE__ */ _let(2, /* @__PURE__ */ _closure($try_content__show));
const $setup__script = _script("b3", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));

// child.marko
const $template = "<span id=child> </span>";
const $setup = () => {};
throw new Error("load failed");
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
