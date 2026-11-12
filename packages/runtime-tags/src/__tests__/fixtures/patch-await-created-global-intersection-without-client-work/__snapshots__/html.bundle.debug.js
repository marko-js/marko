// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<p> </p>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_p = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.p, (x) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "#text/0", x + ":" + $global$1.f, 1, (2 | _updates_from($scope0_reason, 2)) << 1, 0)}</p>`);
				_global_subscribe("__tests__/template.marko_2_$global_f#0:10/subscribe", $scope2_id);
				_scope($scope2_id, { x: _unfilled_if($scope0_reason, 2) && x }, "__tests__/template.marko", "2:4", { x: "2:10" });
			}, 1, "__tests__/template.marko_2*content", _unfilled_if($scope0_reason, 2) && 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_p#0:4/setup");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$fg__input_p && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/template.marko_1_input_p#0:4/setup", "input_p");
	_scope($scope0_id, { input_p: _write_if($scope0_reason, 1) && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.p }, "__tests__/template.marko", 0, { input_p: ["input.p"] }) || $fg__input_p && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !_server_guard($scope0_reason, 2));
}, 1);
