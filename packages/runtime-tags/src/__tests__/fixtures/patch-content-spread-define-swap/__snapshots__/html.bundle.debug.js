// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = [[], ["__tests__/template.marko_0_input_which#4_one#5_two#6"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_input_which#4_one#5_two#6; ;<div></div>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const one = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<em>one ${_patch_text($scope1_id, "#text/0", input.title, 2, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_title ? "__tests__/template.marko_1_input_title#0:3/init" : "__tests__/template.marko_1_input_title#0:3/subscribe");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
	}, $scope0_id) };
	const two = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		_html(`<strong>two ${_patch_text($scope2_id, "#text/0", input.title, 2, $scope0_reason, 0)}</strong>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_title ? "__tests__/template.marko_2_input_title#0:3/init" : "__tests__/template.marko_2_input_title#0:3/subscribe");
		$scope2_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_title/8": $wi__input_title && 1
		}, "__tests__/template.marko", "2:2"));
	}, $scope0_id) };
	_html("<div");
	_patch_attrs_content({ content: input.which ? one : two }, "#div/0", $scope0_id, "div", void 0, void 0, $scope0_reason, 1);
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_which#4_one#5_two#6");
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		one: _unfilled_if($scope0_reason, 1) && one,
		two: _unfilled_if($scope0_reason, 1) && two,
		"ClosureScopes:input_title/8": $wi__input_title && $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		one: "1:9",
		two: "2:9",
		"EventAttributes:#div/0": ["...{ content: input.which ? one : two }", "3:9"]
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.title, !_server_guard($scope0_reason, 0));
}, 1);
