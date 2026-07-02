// template.marko
const $template = "<div></div><!><!>";
const $walks = " b%c";
_enable_catch();
const $catch_content__err = ($scope, err) => _text($scope["#text/0"], err);
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content = _content_resume("__tests__/template.marko_2_content", " ", " b", 0, $catch_content__$params);
const $try_content__clickCount__script = _script("__tests__/template.marko_1_clickCount", ($scope) => _el_read($scope._["#div/0"]).textContent = $scope._.clickCount);
const $try_content__clickCount = /* @__PURE__ */ _closure_get("clickCount", ($scope) => {
	_text($scope["#text/1"], (() => {
		if ($scope._.clickCount > 1) throw new Error("ERROR!");
	})());
	$try_content__clickCount__script($scope);
});
const $try_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$clickCount($scope._, $scope._.clickCount + 1);
}));
const $try_content__setup = ($scope) => {
	$try_content__clickCount($scope);
	$try_content__setup__script($scope);
};
const $clickCount__closure = /* @__PURE__ */ _closure($try_content__clickCount);
const $clickCount = /* @__PURE__ */ _let("clickCount/2", $clickCount__closure);
const $try = /* @__PURE__ */ _try("#text/1", "<button>inc</button> -- <!>", " c%b", $try_content__setup);
function $setup($scope) {
	$clickCount($scope, 0);
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
