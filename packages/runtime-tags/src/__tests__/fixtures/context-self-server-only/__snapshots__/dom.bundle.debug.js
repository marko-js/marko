// resolve-label.js
function resolveLabel($global, _marker) {
	return $global.label;
}

// labeled-region.marko
const $template$1 = "<!><em> </em><!><!>";
const $walks$1 = "bD l%c";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $label = /*@__PURE__*/ _const("label", ($scope) => _text($scope["#text/0"], $scope.label));
function $setup$1($scope) {
	$scope["#ContextValue"] = resolveLabel($scope.$global, "self_context_sentinel");
	_context_branch($scope, "__tests__/labeled-region.marko");
	$label($scope, _context_read($scope, "label", "__tests__/labeled-region.marko", "./labeled-region.marko"));
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var labeled_region_default = /*@__PURE__*/ _template("__tests__/labeled-region.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=inc> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& D l`)($walks$1);
const $LabeledRegion_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<div>static</div>", "b");
const $count = /*@__PURE__*/ _let("count/3", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $LabeledRegion_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
