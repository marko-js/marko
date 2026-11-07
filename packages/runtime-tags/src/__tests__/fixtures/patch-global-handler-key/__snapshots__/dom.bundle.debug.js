// template.marko
const $template = "<button>run</button>";
const $walks = " b";
const handlers = {
	a() {
		document.body.dataset.ran = "a";
	},
	b() {
		document.body.dataset.ran = "b";
	}
};
const $global_mode__script = _script("__tests__/template.marko_0_$global_mode#4", ($scope) => _on($scope["#button/0"], "click", handlers[$scope.$global.mode]));
const $global_mode = _fill_global_resume("__tests__/template.marko_0_$global_mode#4/subscribe", $global_mode__script, "mode");
const $setup = $global_mode;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
