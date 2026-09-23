// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !;E l%;<main><h1> </h1><!></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $input_promise__closures = new Set();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_await($scope2_id, "#text/0", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "#text/0", value, void 0, $scope0_reason, 1)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "4:6");
		}, 1, "__tests__/template.marko_3*content", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
		$scope0_page && _resume_branch($scope2_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>loading ${_text_resume($scope1_id, "#text/0", input.title, $sg__input_title * 2)}</em>`);
		_script($scope1_id, "__tests__/template.marko_1_input_title#4", $sg__input_title);
		_subscribe(_source_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:6"));
		$sg__input_title || _resume_branch($scope1_id);
	}, $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		"ClosureScopes:input_title": $input_title__closures,
		"ClosureScopes:input_promise": $input_promise__closures
	}, "__tests__/template.marko", 0, { input_title: ["input.title"] }) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
}, 1, 0);
