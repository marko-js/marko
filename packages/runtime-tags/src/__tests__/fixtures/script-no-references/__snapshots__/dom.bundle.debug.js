// template.marko
const $template = "<div id=foo></div>";
const $walks = "b";
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	{
		const el = document.getElementById("foo");
		el.innerHTML = "foo";
		$signal($scope, 0).onabort = () => el.innerHTML = "";
	}
});
function $setup($scope) {
	$signalReset($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b", $setup);
