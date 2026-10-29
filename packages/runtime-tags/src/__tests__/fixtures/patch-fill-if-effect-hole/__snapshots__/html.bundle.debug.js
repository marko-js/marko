// template.marko
const $template = "<h1> </h1><!><button> </button>";
const $walks = "D l%b D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D l%b D ;<h1> </h1><!><button> </button>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_input_label#0:6_count#0:8/init!__tests__/template.marko_1_input_label#0:6;D ;<p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", input.label + ": " + count)}</p>`);
			_script($scope1_id, "__tests__/template.marko_1_input_label#0:6");
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:6/init");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/3", count)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "2:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
