// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<span> </span>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,loading",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;b%;<!><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope3_id = _scope_id();
			const $await_content__value__closures = new Set();
			_try($scope3_id, "#text/0", () => {
				const $scope4_reason = _scope_reason();
				const $scope4_id = _scope_id();
				_html(`<span>${_patch_text($scope4_id, "#text/0", value, void 0, $scope0_reason, 0)}</span>`);
				_subscribe(_unfilled_if($scope0_reason, 0) && $await_content__value__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "5:8"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_4_value#3:2/subscribe");
			}, void 0, (err) => {
				const $scope5_reason = _scope_reason(), $sg__err_message = _source_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`<em>${_text_resume($scope5_id, "#text/0", err.message, $sg__err_message)}</em>`);
				_source_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "6:10");
			}, void 0, "__tests__/template.marko_5*content", "__tests__/template.marko_4*content", 1);
			$scope0_page && _scope($scope3_id, { "ClosureScopes:value/5": $await_content__value__closures }, "__tests__/template.marko", "4:6");
		}, 1, "__tests__/template.marko_3*content", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_promise#0:3/subscribe", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { "ClosureScopes:input_promise/4": $input_promise__closures }, "__tests__/template.marko", 0);
}, 1, 0);
