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
const $global_mode_key = /*@__PURE__*/ _global_key("mode");
const $global_mode = /*@__PURE__*/ _global_closure($global_mode_key);
const $global_mode__script = _global_script("__tests__/template.marko_0_$global_mode#4", ($scope) => _on($scope["#button/0"], "click", handlers[$scope.$global.mode]), $global_mode);
const $setup = $global_mode__script;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
