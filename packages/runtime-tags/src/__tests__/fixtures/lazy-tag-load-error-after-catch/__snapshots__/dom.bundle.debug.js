// child.marko
const $template = "<span>child</span>";
const $walks = "b";
const $setup = () => {};
throw new Error("load failed");
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b", $setup);

// template.marko
const $template = "<button id=toggle>toggle</button><button id=load>load</button><!><!>";
const $walks = " c%c";
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "#load");
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/2", " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $if_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$await_content($scope);
	$if_content__await_promise($scope, rejectAfter(new Error("rejected"), 1));
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", "caught: <!>", "b%", 0, $catch_content__$params);
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!><!>", "b%/&b%", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $try_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_1_show#2/subscribe");
const $try_content__setup = $try_content__show;
const $show__closure = /*@__PURE__*/ _closure($try_content__show);
const $show = /*@__PURE__*/ _let("show/2", $show__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
