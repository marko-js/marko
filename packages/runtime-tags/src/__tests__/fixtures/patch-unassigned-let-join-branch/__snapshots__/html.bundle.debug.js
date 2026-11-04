// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_x#0:6/setup;D ;<p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $fg__input_b = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let x = input.a;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "#text/0", x + input.b)}</p>`);
			_patch_render($scope1_id, "__tests__/template.marko_1_input_b#0:5_x#0:6/setup", _filled_guard($scope0_reason, 3) && ">input_b");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	$fg__input_b && _client_guard($scope0_reason, 2) && _patch_render($scope0_id, "__tests__/template.marko_1_input_b#0:5/setup", "input_b");
	_scope($scope0_id, {
		input_b: input.b,
		x: _write_if($scope0_reason, 0) && x
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		x: "1:6"
	}) || $fg__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 3));
}, 1);
