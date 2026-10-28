// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
function boom(error) {
	throw error;
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_input_detail#0:5/subscribe",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button> </button></main>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_input_detail#0:5/subscribe!__tests__/template.marko_2_input_detail#0:5;D ;<i> </i>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_detail = _write_if($scope0_reason, 0), $cg__input_detail = _client_guard($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_detail__closures = new Set();
	const $input_error__closures = new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_text_resume($scope3_id, "#text/0", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_error ? "__tests__/template.marko_3_input_error#0:6/init" : "__tests__/template.marko_3_input_error#0:6/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope3_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), $cg__input_error && "__tests__/template.marko_3_input_error#0:6/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_resume($scope1_id, "#text/0", err.message, 1, 4, 0)}</b>`);
		_if(() => {
			if (input.detail) {
				const $scope2_id = _scope_id();
				_html(`<i>${_text_resume($scope2_id, "#text/0", input.detail, 1, $scope0_reason, 0)}</i>`);
				_script($scope2_id, "__tests__/template.marko_2_input_detail#0:5");
				$cg__input_detail && _patch_init($scope2_id, "__tests__/template.marko_2_input_detail#0:5/init");
				_subscribe($wi__input_detail && $input_detail__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_detail/8": $wi__input_detail && 1
				}, "__tests__/template.marko", "10:8"), "__tests__/template.marko_2_input_detail#0:5/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 0);
		$cg__input_detail && _patch_init($scope1_id, "__tests__/template.marko_1_input_detail#0:5/init");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_detail__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:6"), "__tests__/template.marko_1_input_detail#0:5/subscribe");
	}, void 0, "__tests__/template.marko_1*content", "__tests__/template.marko_3*content", 1, 1, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_detail: input.detail,
		count,
		"ClosureScopes:input_detail/8": $wi__input_detail && $input_detail__closures,
		"ClosureScopes:input_error/9": $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}, "__tests__/template.marko", 0, {
		input_detail: ["input.detail"],
		count: "4:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.detail, !_server_guard($scope0_reason, 0));
}, 1);
