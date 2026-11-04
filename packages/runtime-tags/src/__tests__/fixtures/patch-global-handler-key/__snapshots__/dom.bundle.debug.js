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
const $setup__$global_mode__script = _fill_global_script("__tests__/template.marko_0_$global_mode#4", ($scope) => _on($scope["#button/0"], "click", handlers[$scope.$global.mode]), "mode");
const $setup__$global_mode = $setup__$global_mode__script;
const $setup = $setup__$global_mode;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
