// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
function boom(error) {
	throw error;
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content !__tests__/template.marko_4_err_cause_code#3",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content !__tests__/template.marko_3",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko;D%b%;<main><!><!></main>"
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
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_error ? "__tests__/template.marko_1_input_error#0:4/init" : "__tests__/template.marko_1_input_error#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope1_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"), $cg__input_error && "__tests__/template.marko_1_input_error#0:4/subscribe");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_patch_write($scope3_id, "PatchWrite:err_message", err?.message);
		_html(`<b>${_patch_text($scope3_id, "#text/0", err.message)}</b><button>log</button>${_el_resume($scope3_id, "#button/1")}`);
		_script($scope3_id, "__tests__/template.marko_3");
		_scope($scope3_id, { err_message: err?.message }, "__tests__/template.marko", "7:6", { err_message: ["err.message", "7:13"] });
	}, void 0, "__tests__/template.marko_3*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_try($scope0_id, "#text/1", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_error ? "__tests__/template.marko_2_input_error#0:4/init" : "__tests__/template.marko_2_input_error#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope2_id, {
			_: $wi__input_error && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_error/5": $wi__input_error && 1
		}, "__tests__/template.marko", "12:4"), $cg__input_error && "__tests__/template.marko_2_input_error#0:4/subscribe");
	}, void 0, (err) => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_patch_write($scope4_id, "PatchWrite:err_cause_code", err?.cause?.code);
		_script($scope4_id, "__tests__/template.marko_4_err_cause_code#3", 0);
		_scope($scope4_id, { err_cause_code: err?.cause?.code }, "__tests__/template.marko", "14:6", { err_cause_code: ["err.cause.code", "14:13"] });
	}, void 0, "__tests__/template.marko_4*content", "__tests__/template.marko_2*content", 1, 1, 1);
	_html("</main>");
	_scope($scope0_id, { "ClosureScopes:input_error/5": $wi__input_error && _unfilled_if($scope0_reason, 0) && $input_error__closures }, "__tests__/template.marko", 0);
}, 1);
