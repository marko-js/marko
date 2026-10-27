// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(error) {
	throw error;
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_error__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_error ? "__tests__/template.marko_2_input_error#0:4/init" : "__tests__/template.marko_2_input_error#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), $cg__input_error && "__tests__/template.marko_2_input_error#0:4/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "#text/0", err.message)} ${_patch_text($scope1_id, "#text/1", input.label, 2, $scope0_reason, 0)}</b>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "__tests__/template.marko_1_input_label#0:3/init" : "__tests__/template.marko_1_input_label#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_1_input_label#0:3/subscribe");
	}, void 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1, 1, 1);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 0) && $input_label__closures,
		"ClosureScopes:input_error/6": $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
