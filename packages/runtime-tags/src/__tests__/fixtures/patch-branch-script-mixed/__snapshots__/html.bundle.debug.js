// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell,<p>promo</p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_value = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_text_mark($scope0_id, "#text/0", input.title, 1, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_patch_render($scope1_id, "__tests__/template.marko_1_input_value#0:6_$global_brand#0:8/setup", [_filled_guard($scope0_reason, 2) && ">input_value", ">$global_brand"], (2 | _updates_from($scope0_reason, 2)) << 1, 0) || _script($scope1_id, "__tests__/template.marko_1_input_value#0:6_$global_brand#0:8", 0, _filled_guard($scope0_reason, 2), ">input_value");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html("</main>");
	_fill_global_subscribe("__tests__/template.marko_0_$global_brand#8/subscribe", $scope0_id, 1);
	$fg__input_value && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/template.marko_1_input_value#0:6/setup", "input_value");
	_scope($scope0_id, { input_value: input.value }, "__tests__/template.marko", 0, { input_value: ["input.value"] }) || $fg__input_value && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 2));
}, 1);
