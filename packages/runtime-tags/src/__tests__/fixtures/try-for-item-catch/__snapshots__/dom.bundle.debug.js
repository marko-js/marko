// template.marko
const $template = "<div></div><!><!>";
const $walks = " b%c";
const $catch_content__err = ($scope, err) => _text($scope["#text/0"], err);
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content = _content_resume("__tests__/template.marko_3*content", " ", " ", 0, $catch_content__$params);
const $for_content__clickCount = /*@__PURE__*/ _closure_get("clickCount", ($scope) => _text($scope["#text/0"], (() => {
	if ($scope._._.clickCount > 1) throw new Error("ERROR!");
})()), ($scope) => $scope._._);
const $for_content__setup = $for_content__clickCount;
const $try_content__clickCount__script = _script("__tests__/template.marko_1_clickCount#2", ($scope) => _el_read($scope._["#div/0"]).textContent = $scope._.clickCount);
const $try_content__clickCount = /*@__PURE__*/ _closure_get("clickCount", $try_content__clickCount__script);
const $try_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "-- <!>", "b%", $for_content__setup);
const $try_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$clickCount($scope._, +$scope._.clickCount + 1);
}));
const $try_content__setup = ($scope) => {
	$try_content__clickCount($scope);
	$try_content__for($scope, [[1, 2]]);
	$try_content__setup__script($scope);
};
const $clickCount__closure = /*@__PURE__*/ _closure($try_content__clickCount, $for_content__clickCount);
const $clickCount = /*@__PURE__*/ _let("clickCount/2", $clickCount__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<button>inc</button><!><!>", " b%", $try_content__setup);
function $setup($scope) {
	$clickCount($scope, 0);
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
