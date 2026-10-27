// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
function boom(error) {
	throw error;
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_error__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_error ? "__tests__/template.marko_1_input_error#0:3/init" : "__tests__/template.marko_1_input_error#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope1_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"), $cg__input_error && "__tests__/template.marko_1_input_error#0:3/subscribe");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		let shown = err.message;
		_html(`<button>${_text_resume($scope2_id, "#text/1", shown)}</button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2");
		_patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill0", shown, 1);
		_scope($scope2_id, { shown }, "__tests__/template.marko", "7:6", { shown: "8:12" });
	}, void 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_html("</main>");
	_scope($scope0_id, { "ClosureScopes:input_error/4": $wi__input_error && _unfilled_if($scope0_reason, 0) && $input_error__closures }, "__tests__/template.marko", 0);
}, 1);
