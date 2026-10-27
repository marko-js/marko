// template.marko
const $template = "<main><!><!><button> </button></main>";
const $walks = "D%b%b D m";
function boom(error) {
	throw error;
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b%b D ;<main><!><!><button> </button></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_error__closures = new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_error ? "__tests__/template.marko_1_input_error#0:6/init" : "__tests__/template.marko_1_input_error#0:6/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope1_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), $cg__input_error && "__tests__/template.marko_1_input_error#0:6/subscribe");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_patch_text($scope3_id, "#text/0", err)}</b>`);
		_scope($scope3_id, {}, "__tests__/template.marko", "8:6");
	}, void 0, "__tests__/template.marko_3*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_try($scope0_id, "#text/1", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_error ? "__tests__/template.marko_2_input_error#0:6/init" : "__tests__/template.marko_2_input_error#0:6/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope2_id, {
			_: $wi__input_error && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_error/8": $wi__input_error && 1
		}, "__tests__/template.marko", "10:4"), $cg__input_error && "__tests__/template.marko_2_input_error#0:6/subscribe");
	}, void 0, (err) => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_html(`<i>${_patch_text($scope4_id, "#text/0", err.message)}</i>`);
		_scope($scope4_id, {}, "__tests__/template.marko", "12:6");
	}, void 0, "__tests__/template.marko_4*content", "__tests__/template.marko_2*content", 1, 1, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/3", count)}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:input_error/8": $wi__input_error && _unfilled_if($scope0_reason, 0) && $input_error__closures
	}, "__tests__/template.marko", 0, { count: "4:6" });
}, 1);
