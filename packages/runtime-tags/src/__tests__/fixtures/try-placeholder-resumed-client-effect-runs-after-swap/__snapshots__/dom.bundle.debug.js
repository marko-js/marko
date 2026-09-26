// template.marko
const $template = "<button id=show>show</button><!><!>";
const $walks = " b%c";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $if_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log("inner clicked");
}));
const $if_content__setup = $if_content__setup__script;
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<button id=inner>inner</button>", " ", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $try_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_1_show#2/subscribe");
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<div> </div>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $try_content__setup = ($scope) => {
	$try_content__show($scope);
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("server", 1));
};
const $show__closure = /*@__PURE__*/ _closure($try_content__show);
const $show = /*@__PURE__*/ _let("show/2", $show__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!><!>", "b%b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
