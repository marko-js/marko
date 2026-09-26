// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
function boom() {
	throw new Error("boom");
}
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D%b%;<em><!><!></em>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_message__closures = new Set();
	const $input_boom__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.message, void 0, $scope0_reason, 1)}${_patch_text($scope1_id, "#text/1", input.boom ? boom() : "", 2, $scope0_reason, 2)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_message__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_1_input_message#3/subscribe"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_boom#4/subscribe");
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2*content", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _source_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "#text/0", err.message, $sg__err_message)}</b>`);
		_source_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "7:6");
	}, $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_message": $input_message__closures,
		"ClosureScopes:input_boom": $input_boom__closures
	}, "__tests__/template.marko", 0);
}, 1, 0);
