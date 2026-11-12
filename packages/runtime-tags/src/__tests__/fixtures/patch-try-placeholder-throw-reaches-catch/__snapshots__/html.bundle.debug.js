// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(m) {
	throw new Error(m);
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content,<em>loading</em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<em>caught</em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_client = _any_client_guard($scope0_reason), $cg__input_err = _client_guard($scope0_reason, 0), $wi__input_err = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_err__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "#text/0", input.err ? boom(input.err) : "ok", 1, $scope0_reason, 0)}</p>`);
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_err#0:3/subscribe", $cg__input_err);
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_err__closures, _scope($scope2_id, { _: $wi__input_err && _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4"), $cg__input_err && "__tests__/template.marko_2_input_err#0:3/subscribe");
		}, () => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			_html("<em>loading</em>");
		}, void 0, "__tests__/template.marko_4*content", void 0, "__tests__/template.marko_2*content", 1, 0, 2);
		$wi__input_err && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
	}, void 0, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<em>caught</em>");
	}, 0, "__tests__/template.marko_3*content", "__tests__/template.marko_1*content", 1, 0, 1);
	_scope($scope0_id, { "ClosureScopes:input_err/4": $wi__input_err && _unfilled_if($scope0_reason, 0) && $input_err__closures }, "__tests__/template.marko", 0);
}, 1);
