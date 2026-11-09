// template.marko
const $template = "<div> </div><button>before</button>";
const $walks = "D l b";
const updateText = $updateText;
const $onClick__script = _script("__tests__/template.marko_0_onClick#3", ($scope) => _on($scope["#button/1"], "click", $scope.onClick));
const $onClick = /*@__PURE__*/ _const("onClick", $onClick__script);
function $setup($scope) {
	_text($scope["#text/0"], function(a, b) {
		return a + b;
	}(1, 2));
	$onClick($scope, updateText);
}
function $updateText(ev) {
	ev.target.textContent = "after";
}
_resumed["__tests__/template.marko_0/updateText"] = $updateText;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
