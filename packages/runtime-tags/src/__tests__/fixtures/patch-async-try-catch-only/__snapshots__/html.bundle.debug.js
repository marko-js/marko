// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,<em>bad</em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_message = _client_guard($scope0_reason, 0), $wi__input_message = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_message__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.message, 1, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_message ? "__tests__/template.marko_1_input_message#0:3/init" : "__tests__/template.marko_1_input_message#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_message__closures, _scope($scope1_id, { _: $wi__input_message && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), $cg__input_message && "__tests__/template.marko_1_input_message#0:3/subscribe");
	}, void 0, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<em>bad</em>");
	}, 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content", 1, 0, 1);
	_html("</main>");
	_scope($scope0_id, { "ClosureScopes:input_message/4": $wi__input_message && _unfilled_if($scope0_reason, 0) && $input_message__closures }, "__tests__/template.marko", 0);
}, 1);
