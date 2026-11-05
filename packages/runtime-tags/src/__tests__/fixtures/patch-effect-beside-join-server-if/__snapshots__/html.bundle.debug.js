// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; bD l ;<button class=n>n</button><p class=j> </p><div class=e></div>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<button class=n>n</button>${_el_mark($scope1_id, "#button/0")}<p class=j>${_text_mark($scope1_id, "#text/1", input.a + n)}</p><div class=e></div>${_el_mark($scope1_id, "#div/2")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_a#0:4", 1, _filled_guard($scope0_reason, 1), ">input_a");
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_a#0:4/setup");
			_patch_render($scope1_id, "__tests__/template.marko_1_input_a#0:4_n#3/setup", _filled_guard($scope0_reason, 1) && ">input_a");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", n, 1);
			_scope($scope1_id, {
				n,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { n: "2:6" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_a && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_a#0:4/setup", "input_a");
	_scope($scope0_id, { input_a: input.a }, "__tests__/template.marko", 0, { input_a: ["input.a"] }) || $fg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 1));
}, 1);
