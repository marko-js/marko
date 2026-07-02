// template.marko
const $template = "<button>inc <!></button><div><!>|<!>|<!></div>";
const $walks = " Db%lD%c%c%l";
const $pattern2 = ($scope, $pattern) => {
	(([, , ...others]) => $others($scope, others))($pattern);
	$first($scope, $pattern[0]);
	$second2($scope, $pattern[1]);
};
const $others = ($scope, others) => _text($scope["#text/4"], others.join(","));
const $first = ($scope, first) => _text($scope["#text/2"], first);
const $second3 = ($scope, second) => _text($scope["#text/3"], second);
const $second2 = ($scope, $second) => $second3($scope, void 0 !== $second ? $second : "dflt");
const $input_list = $pattern2;
const $n = /* @__PURE__ */ _let("n/13", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_list($scope, input.list);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
