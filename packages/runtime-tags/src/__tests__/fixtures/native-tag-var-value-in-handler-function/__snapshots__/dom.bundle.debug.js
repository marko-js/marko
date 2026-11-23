// template.marko
const $template = "<div></div><button></button>";
const $walks = " b b";
const $el_getter = /*@__PURE__*/ _el("#div/0");
const $mark2__script = _script("__tests__/template.marko_0_mark#2", ($scope) => _on($scope["#button/1"], "click", $scope.mark));
const $mark2 = /*@__PURE__*/ _const("mark", $mark2__script);
function $setup($scope) {
	$mark2($scope, $mark($scope));
}
const $mark = ($scope) => () => {
	const get = $el_getter($scope);
	get().textContent = "clicked";
};
_resumed["__tests__/template.marko_0/mark"] = $mark;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
