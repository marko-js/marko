// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
function boom() {
	throw new Error("boom");
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<b> </b>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D%b%;<em><!><!></em>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_message = _client_guard($scope0_reason, 1), $cg__input_boom = _client_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_message__closures = new Set();
	const $input_boom__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.message, void 0, $scope0_reason, 1)}${_patch_text($scope1_id, "#text/1", input.boom ? boom() : "", 2, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_message ? "__tests__/template.marko_1_input_message#0:3/init" : "__tests__/template.marko_1_input_message#0:3/subscribe");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_boom ? "__tests__/template.marko_1_input_boom#0:4/init" : "__tests__/template.marko_1_input_boom#0:4/subscribe");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_message__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"), $cg__input_message && "__tests__/template.marko_1_input_message#0:3/subscribe"), $cg__input_boom && "__tests__/template.marko_1_input_boom#0:4/subscribe");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		const $scope2_id = _scope_id();
		_html(`<b>${_patch_text($scope2_id, "#text/0", err.message)}</b>`);
		$scope2_page && _scope($scope2_id, {}, "__tests__/template.marko", "7:6");
	}, void 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_message/5": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_message__closures,
		"ClosureScopes:input_boom/6": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_boom__closures
	}, "__tests__/template.marko", 0);
}, 1);
