// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_open = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let open = input.open;
			_if(() => {
				if (open) {
					const $scope2_id = _scope_id();
					_html(`<span>${_text_mark($scope2_id, "#text/0", input.label, $wg__input_label)}</span>`);
					$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:5/subscribe");
					_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {}, "__tests__/template.marko", "3:4"), $cg__input_label && "__tests__/template.marko_2_input_label#0:5/subscribe", $wg__input_label);
					return 0;
				}
			}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_open#0:4/setup");
			_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_open#1/fill", open, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_open && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_open#0:4/setup", "input_open");
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label");
	_scope($scope0_id, {
		input_open: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.open,
		input_label: input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_label: ["input.label"]
	}) || ($fg__input_open && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_open", input.open, !_server_guard($scope0_reason, 1)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
