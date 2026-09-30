// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<strong> </strong>",
	"__tests__/template.marko_2_#text#1/await": "__tests__/template.marko_2_#text#1/await;D ;<strong> </strong>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D l%;<em> </em><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D l%;<em> </em><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	const $input_a__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.a, (a) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "#text/0", a, void 0, $scope0_reason, 1)}</em>`);
			_await($scope2_id, "#text/1", input.b, (b) => {
				const $scope4_id = _scope_id();
				_html(`<strong>${_patch_text($scope4_id, "#text/0", b, void 0, $scope0_reason, 2)}</strong>`);
				_scope($scope4_id, {}, "__tests__/template.marko", "5:8");
			}, 1, "__tests__/template.marko_4*content", 1);
			_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/template.marko_2_input_b#0:4/init");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_2_input_b#0:4/subscribe");
		}, 1, "__tests__/template.marko_2*content", 1);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_a#0:3/init");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_1_input_a#0:3/subscribe", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<i>loading</i>");
	}, void 0, "__tests__/template.marko_3*content", void 0, "__tests__/template.marko_1*content", 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		input_b: _unfilled_if($scope0_reason, 1) && input.b,
		"ClosureScopes:input_b/6": _unfilled_if($scope0_reason, 2) && $input_b__closures,
		"ClosureScopes:input_a/5": _unfilled_if($scope0_reason, 1) && $input_a__closures
	}, "__tests__/template.marko", 0, { input_b: ["input.b"] });
}, 1, 0);
