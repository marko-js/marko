// template.marko
const $template = "<main><h1> </h1><!><!></main>";
const $walks = "E l%b%l";
_shells({
	"__tests__/template.marko_7*content": "__tests__/template.marko_7*content;D ;<strong> </strong>",
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content,<strong>more loading</strong>",
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D ;<em> </em>",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content,<em>loading</em>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await;D ;<strong> </strong>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;E l%b%;<main><h1> </h1><!><!></main>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_more = _source_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	const $input_morePromise__closures = new Set();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 1)}</h1>`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope5_id = _scope_id();
			_html(`<em>${_patch_text($scope5_id, "#text/0", value, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope5_id, {}, "__tests__/template.marko", "4:6");
		}, 1, "__tests__/template.marko_1_#text#0/await", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("__tests__/template.marko_4*content", $scope0_id) }) }, 1);
	_if(() => {
		if (input.more) {
			const $scope2_id = _scope_id();
			_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_id = _scope_id();
				const $scope3_reason = _scope_reason();
				_await($scope3_id, "#text/0", input.morePromise, (value) => {
					const $scope7_id = _scope_id();
					_html(`<strong>${_patch_text($scope7_id, "#text/0", value, void 0, $scope0_reason, 4)}</strong>`);
					_scope($scope7_id, {}, "__tests__/template.marko", "11:8");
				}, 1, "__tests__/template.marko_3_#text#0/await");
				$scope0_page && _subscribe(_unfilled_if($scope0_reason, 4) && $input_morePromise__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "10:6"));
				$scope0_page && _resume_branch($scope3_id);
			}, $scope2_id), { placeholder: attrTag({ content: _content_shell("__tests__/template.marko_6*content", $scope2_id) }) });
			$scope0_page && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:4");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $sg__input_more, $sg__input_more, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 3);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		input_morePromise: _source_if($scope0_reason, 3) && input.morePromise,
		"ClosureScopes:input_promise": $input_promise__closures,
		"ClosureScopes:input_morePromise": $input_morePromise__closures
	}, "__tests__/template.marko", 0, { input_morePromise: ["input.morePromise"] });
}, 1, 0);
