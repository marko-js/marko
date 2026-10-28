// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(error) {
	throw error;
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<b> </b>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<i> </i>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_error__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_html(`<p>${_text_resume($scope4_id, "#text/0", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope4_id, $cg__input_error ? "__tests__/template.marko_4_input_error#0:4/init" : "__tests__/template.marko_4_input_error#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope4_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), $cg__input_error && "__tests__/template.marko_4_input_error#0:4/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wg__err_status = _write_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		_if(() => {
			if (err.status === 404) {
				const $scope2_id = _scope_id();
				_html(`<b>${_text_resume($scope2_id, "#text/0", input.label, 1, $scope0_reason, 0)}</b>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_label ? "__tests__/template.marko_2_input_label#0:3/init" : "__tests__/template.marko_2_input_label#0:3/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:6"), "__tests__/template.marko_2_input_label#0:3/subscribe");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(`<i>${_text_resume($scope3_id, "#text/0", input.label, 1, $scope0_reason, 0)}</i>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_label ? "__tests__/template.marko_3_input_label#0:3/init" : "__tests__/template.marko_3_input_label#0:3/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_label/5": $wi__input_label && 1
				}, "__tests__/template.marko", "8:6"), "__tests__/template.marko_3_input_label#0:3/subscribe");
				return 1;
			}
		}, $scope1_id, "#text/0", 1, $wg__err_status, 1, 0, 0, ["__tests__/template.marko_2*shell", "__tests__/template.marko_3*shell"]);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4");
	}, 0, "__tests__/template.marko_1*content", "__tests__/template.marko_4*content", 1, 1, 1);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_error/6": $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
