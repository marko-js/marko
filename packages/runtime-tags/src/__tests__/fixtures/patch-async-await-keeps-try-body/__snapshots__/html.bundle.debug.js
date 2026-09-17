// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D ;<em> </em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<em>loading</em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell,<em>closed</em>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	const $input_show__closures = new Set();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 1)}</h1>`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", input.promise, (value) => {
					const $scope5_id = _scope_id();
					_html(`<em>${_patch_text($scope5_id, "#text/0", value, void 0, $scope0_reason, 3)}</em>`);
					_scope($scope5_id, {}, "__tests__/template.marko", "5:8");
				}, 1, "__tests__/template.marko_2_#text#0/await");
				$scope0_page && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6");
				return 0;
			} else {
				const $scope4_id = _scope_id();
				_html("<em>closed</em>");
				$scope0_page && _scope($scope4_id, {}, "__tests__/template.marko", "9:6");
				return 1;
			}
		}, $scope1_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_2*shell", "__tests__/template.marko_4*shell"], $scope0_reason, 2);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
		$sg__input_show || $scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("__tests__/template.marko_3*content", $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		input_promise: _source_if($scope0_reason, 2) && input.promise,
		"ClosureScopes:input_promise": $input_promise__closures,
		"ClosureScopes:input_show": $input_show__closures
	}, "__tests__/template.marko", 0, { input_promise: ["input.promise"] });
}, 1, 0);
