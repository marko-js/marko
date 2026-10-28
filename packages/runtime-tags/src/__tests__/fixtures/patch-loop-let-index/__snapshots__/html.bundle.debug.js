// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<ul></ul>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;D bD l ;<li> <span> </span><button>+</button></li>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.labels, (label) => {
		const $scope1_id = _scope_id();
		let picks = 0;
		_html(`<li>${_text_resume($scope1_id, "#text/0", label, 1, $scope0_reason, 0)}<span>${_text_resume($scope1_id, "#text/1", picks)}</span><button>+</button>${_el_resume($scope1_id, "#button/2")}</li>`);
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", picks, 1);
		_scope($scope1_id, { picks }, "__tests__/template.marko", "2:4", { picks: "5:12" });
	}, 0, $scope0_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
