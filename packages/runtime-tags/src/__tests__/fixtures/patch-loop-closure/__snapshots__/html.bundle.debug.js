// template.marko
const $template = "<ul></ul><button>+</button>";
const $walks = " b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b ;<ul></ul><button>+</button>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_boost#0:5/init;D bD ;<li> <span> </span></li>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let boost = 0;
	_html("<ul>");
	_for_of(input.labels, (label) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "#text/0", label, void 0, $scope0_reason, 0)}<span>${_text_resume($scope1_id, "#text/1", boost)}</span></li>`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { boost }, "__tests__/template.marko", 0, { boost: "1:6" });
}, 1);
