// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; b D ;<span></span><button> </button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x + input.a;
			_html(`<span></span>${_el_mark($scope1_id, "#span/0")}<button>${_text_mark($scope1_id, "#text/2", x)}</button>${_el_mark($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_script($scope1_id, "__tests__/template.marko_1_y#5");
			_patch_render($scope1_id, "__tests__/template.marko_1_input_a#0:4_x#3/setup", _filled_guard($scope0_reason, 1) && ">input_a");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_x#3/fill", x, 1);
			_scope($scope1_id, {
				x,
				y,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", {
				x: "2:8",
				y: "3:8"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_a && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_a#0:4/setup", "input_a");
	_scope($scope0_id, { input_a: input.a }, "__tests__/template.marko", 0, { input_a: ["input.a"] }) || $fg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 1));
}, 1);
