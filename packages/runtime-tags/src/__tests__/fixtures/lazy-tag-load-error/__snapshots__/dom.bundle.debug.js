// child.marko
const $template = "<span id=child> </span>";
const $walks = "D l";
const $setup = () => {};
throw new Error("load failed");
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, "D l", $setup, $input);

// template.marko
const $template = "<button id=toggle>toggle</button><!><!>";
const $walks = " b%c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
_enable_catch();
const $if_content__setup = ($scope) => {
	$load_Child_setup($scope);
	$load_Child_tag_input_value($scope["#childScope/1"], 1);
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content__err = ($scope, err) => $catch_content__err_message($scope, err?.message);
const $catch_content = _content_resume("__tests__/template.marko_3_content", "<div id=error> </div>", "D l", 0, $catch_content__$params);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "<div id=loading>loading</div>", "b");
const $try_content__if = /* @__PURE__ */ _if("#text/0", "<!><!><!><!>", "b%/&c", $if_content__setup);
const $try_content__show = /* @__PURE__ */ _closure_get("show", ($scope) => $try_content__if($scope, $scope._.show ? 0 : 1));
const $try_content__setup = $try_content__show;
const $show__closure = /* @__PURE__ */ _closure($try_content__show);
const $show = /* @__PURE__ */ _let("show/2", $show__closure);
const $try = /* @__PURE__ */ _try("#text/1", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$try($scope, {
		placeholder: attrTag({ content: $placeholder_content($scope) }),
		catch: attrTag({ content: $catch_content($scope) })
	});
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
