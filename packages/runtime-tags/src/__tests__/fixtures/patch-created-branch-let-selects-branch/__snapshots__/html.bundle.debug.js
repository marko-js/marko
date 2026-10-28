// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_open = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let open = input.open;
			_if(() => {
				if (open) {
					const $scope2_id = _scope_id();
					_html(`<span>${_text_resume($scope2_id, "#text/0", input.label, 1, $scope0_reason, 2)}</span>`);
					_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_label ? "__tests__/template.marko_2_input_label#0:5/init" : "__tests__/template.marko_2_input_label#0:5/subscribe");
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"), $cg__input_label && "__tests__/template.marko_2_input_label#0:5/subscribe");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, 1, 1, 0, 0, ["__tests__/template.marko_2*shell"], $cg__input_open << 1, 0);
			$cg__input_open && _patch_init($scope1_id, "__tests__/template.marko_1_input_open#0:4/init");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_open: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.open,
		input_label: input.label,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.open, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
