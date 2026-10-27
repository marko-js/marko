// template.marko
const $template = "<button> </button><ul></ul>";
const $walks = " D l b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l ;<button> </button><ul></ul>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_n#0:6/init;D%c%c%;<li><!>:<!>:<!></li>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "#text/0", item, void 0, $scope0_reason, 0)}:${_patch_text($scope1_id, "#text/1", $global$1.x, 2)}:${_text_resume($scope1_id, "#text/2", n, 2)}</li>`);
		_fill_global_subscribe("__tests__/template.marko_1_$global_x#0:12", $scope0_id);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
	}, 0, $scope0_id, "#ul/2", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
