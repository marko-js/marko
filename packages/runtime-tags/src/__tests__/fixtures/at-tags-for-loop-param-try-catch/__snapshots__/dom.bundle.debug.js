// template.marko
const $template = "<button>inc</button><div><!></div><div><!></div>";
const $walks = " bD%lD%l";
const $catch_content2__err_message = ($scope, err_message) => _text($scope["#text/1"], err_message);
const $catch_content2__$params = ($scope, $params5) => $catch_content2__err_message($scope, $params5[0]?.message);
const $catch_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_4*content", "caught <!>: <!>", "b%c%", 0, $catch_content2__$params), { label($scope) {
	_text($scope["#text/0"], $scope.label);
} });
_resumed["__tests__/template.marko_4*content"] = $catch_content2;
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/1"], err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_3*content", "caught <!>: <!>", "b%c%", 0, $catch_content__$params), { label($scope) {
	_text($scope["#text/0"], $scope.label);
} });
_resumed["__tests__/template.marko_3*content"] = $catch_content;
const $try_content2__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("sync");
})());
const $try_content__clicks = /*@__PURE__*/ _closure_get("clicks", ($scope) => _text($scope["#text/0"], (() => {
	if ($scope._.clicks) throw new Error("click");
	return $scope._.clicks;
})()), 0, "__tests__/template.marko_1_clicks#3/subscribe");
const $try_content__setup = $try_content__clicks;
const $try2 = /*@__PURE__*/ _try("#text/2", "clicks <!>", "b%", $try_content__setup);
const $clicks__closure = /*@__PURE__*/ _closure($try_content__clicks);
const $clicks = /*@__PURE__*/ _let("clicks/3", ($scope) => {
	let $catch2;
	forOf([`update ${$scope.clicks}`], (label) => {
		$catch2 = attrTags($catch2, { content: $catch_content2($scope, { label }) });
	});
	$try2($scope, { catch: $catch2 });
	$clicks__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/1", " ", " ", $try_content2__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, +$scope.clicks + 1);
}));
function $setup($scope) {
	let $catch;
	forOf(["render"], (label) => {
		$catch = attrTags($catch, { content: $catch_content($scope, { label }) });
	});
	$clicks($scope, 0);
	$try($scope, { catch: $catch });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
