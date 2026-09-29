// child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/child.marko_4*content": "__tests__/child.marko_4*content;D ;<em> </em>",
	"__tests__/child.marko_1_#text#0/await": "__tests__/child.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/child.marko_1*content": "__tests__/child.marko_1*content;b%;<!><!><!>",
	"__tests__/child.marko": "__tests__/child.marko;b%;<!><!><!>"
});
var child_default = _template_patch("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_p__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.p, (v) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_patch_text($scope4_id, "#text/0", v, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope4_id, {}, "__tests__/child.marko", "2:4");
		}, 1, "__tests__/child.marko_4*content", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/child.marko", "1:2"), _client_guard($scope0_reason, 0) && "__tests__/child.marko_1_input_p#0:3/subscribe", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<i>loading</i>");
	}, (e) => {
		const $scope3_reason = _scope_reason(), $sg__e_message = _source_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`<b>${_text_resume($scope3_id, "#text/0", e.message, $sg__e_message)}</b>`);
		_source_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/child.marko", "6:4");
	}, "__tests__/child.marko_2*content", "__tests__/child.marko_3*content", "__tests__/child.marko_1*content");
	$scope0_page && _scope($scope0_id, { "ClosureScopes:input_p/4": $input_p__closures }, "__tests__/child.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", void 0, 1);
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c"), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/1", $childScope);
			$Child_withLoadAssets({ p: input.p });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, { input_p: input.p }, "__tests__/template.marko", 0, { input_p: ["input.p"] });
}, 1, () => [$Child_withLoadAssets]);
