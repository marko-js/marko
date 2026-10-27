// template.marko
const $template = "<button> </button><div><input><label> </label></div><div><input></div><!><!>";
const $walks = " D lD b D mD l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D lD b D mD l%;<button> </button><div><input><label> </label></div><div><input></div><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; ;<input>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const x = _id("x");
	const $x = _id("$x");
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}<div><input${_patch_attr($scope0_id, "PatchAttr:#input/2 id", "id", x, 0, 0)}>${_el_resume($scope0_id, "#input/2", 0)}<label${_patch_attr($scope0_id, "PatchAttr:#label/3 for", "for", x, 0, 0)}>${_text_resume($scope0_id, "#text/4", n)}</label>${_el_resume($scope0_id, "#label/3", 0)}</div><div><input${_patch_attr($scope0_id, "PatchAttr:#input/5 id", "id", $x, 0, 0)}>${_el_resume($scope0_id, "#input/5", 0)}</div>`);
	_for_of([{ k: "a b" }, { k: "a]" }], (item) => {
		const $scope1_id = _scope_id();
		const y = _id("y");
		_html(`<input${_patch_attr($scope1_id, "PatchAttr:#input/0 id", "id", y, 0, 0)}>${_el_resume($scope1_id, "#input/0", 0)}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "5:2");
	}, "k", $scope0_id, "#text/6", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", 0, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
