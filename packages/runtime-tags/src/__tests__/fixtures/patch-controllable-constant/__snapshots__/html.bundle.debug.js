// template.marko
const $template = "<main><textarea></textarea><select><option value=a>A</option><option value=b>B</option></select><p> </p><button> </button></main>";
const $walks = "D b bD l D m";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b bD l D ;<main><textarea></textarea><select><option value=a>A</option><option value=b>B</option></select><p> </p><button> </button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><textarea>${_attr_textarea_value($scope0_id, "#textarea/0", "hello", void 0, "PatchControl:2#textarea/0", 0, 0)}</textarea>`);
	_attr_select_value($scope0_id, "#select/1", "b", void 0, () => {
		_html(`<select><option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option></select>`);
	}, "PatchControl:3#select/1", 0, 0);
	_html(`<p>${_text_resume($scope0_id, "#text/2", input.note, void 0, $scope0_reason, 0)}</p><button>${_text_resume($scope0_id, "#text/4", count)}</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
