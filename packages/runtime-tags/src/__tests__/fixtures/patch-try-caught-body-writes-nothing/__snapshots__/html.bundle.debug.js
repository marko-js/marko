// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
function check(x) {
	if (x) throw new Error("boom");
	return 1;
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<b> </b>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,<em>ok</em>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_boom = _client_guard($scope0_reason, 0), $wi__input_boom = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_boom__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const y = check(input.boom);
		_html("<em>ok</em>");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_boom ? "__tests__/template.marko_1_input_boom#0:3/init" : "__tests__/template.marko_1_input_boom#0:3/subscribe");
		$wi__input_boom && _subscribe(_unfilled_if($scope0_reason, 0) && $input_boom__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4"), $cg__input_boom && "__tests__/template.marko_1_input_boom#0:3/subscribe", 0);
		$wi__input_boom && _resume_branch($scope1_id);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "#text/0", err.message, void 0, 4, 0)}</b>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "9:6");
	}, void 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_html("</main>");
	_scope($scope0_id, { "ClosureScopes:input_boom/4": $wi__input_boom && _unfilled_if($scope0_reason, 0) && $input_boom__closures }, "__tests__/template.marko", 0);
}, 1);
