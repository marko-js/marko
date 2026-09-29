// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<b> </b>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%bD ;<!><!><span> </span>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_show__closures = new Set();
	const $input_label__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", input.a, (a) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_patch_text($scope4_id, "#text/0", a, void 0, $scope0_reason, 3)}</b>`);
					_scope($scope4_id, {}, "__tests__/template.marko", "4:8");
				}, 1, "__tests__/template.marko_4*content");
				$scope0_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"), _client_guard($scope0_reason, 3) && "__tests__/template.marko_2_input_a#0:4/subscribe", 0);
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
		_html(`<span>${_patch_text($scope1_id, "#text/1", input.label, void 0, $scope0_reason, 4)}</span>`);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_show#0:3/subscribe"), _client_guard($scope0_reason, 4) && "__tests__/template.marko_1_input_label#0:5/subscribe");
	}, () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<i>loading</i>");
	}, void 0, "__tests__/template.marko_3*content", void 0, "__tests__/template.marko_1*content", 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		input_a: _source_if($scope0_reason, 2) && input.a,
		"ClosureScopes:input_a/7": $input_a__closures,
		"ClosureScopes:input_show/6": $input_show__closures,
		"ClosureScopes:input_label/8": $input_label__closures
	}, "__tests__/template.marko", 0, { input_a: ["input.a"] });
}, 1, 0);
