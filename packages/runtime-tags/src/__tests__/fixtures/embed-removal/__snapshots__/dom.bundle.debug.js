// template.marko
const $template = "<button>Cleanup</button>";
const $walks = " b";
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	$signal($scope, 0).onabort = () => {
		console.log("cleaned up");
	};
	_on($scope["#button/0"], "click", function() {
		document.body.innerHTML = "";
	});
});
function $setup($scope) {
	$signalReset($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup);
