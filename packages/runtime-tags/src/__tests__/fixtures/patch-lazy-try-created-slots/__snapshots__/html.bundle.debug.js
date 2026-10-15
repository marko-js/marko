// child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/child.marko_4*content": "__tests__/child.marko_4*content;D ;<em> </em>",
	"__tests__/child.marko_1_#text#0/await": "__tests__/child.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/child.marko_1*content": "__tests__/child.marko_1*content;b%;<!><!><!>",
	"__tests__/child.marko": "__tests__/child.marko;b%;<!><!><!>"
});
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_p = _write_if($scope0_reason, 0), $scope0_page = _page_render();
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
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/child.marko_1_input_p#0:3/init");
		$wi__input_p && _subscribe(_unfilled_if($scope0_reason, 0) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/child.marko", "1:2"), _client_guard($scope0_reason, 0) && "__tests__/child.marko_1_input_p#0:3/subscribe", 0);
		$wi__input_p && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("<i>loading</i>");
	}, (e) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_patch_text($scope3_id, "#text/0", e.message)}</b>`);
		_scope($scope3_id, {}, "__tests__/child.marko", "6:4");
	}, "__tests__/child.marko_2*content", "__tests__/child.marko_3*content", "__tests__/child.marko_1*content", 1, "");
	$scope0_page && _scope($scope0_id, { "ClosureScopes:input_p/4": $wi__input_p && _unfilled_if($scope0_reason, 0) && $input_p__closures }, "__tests__/child.marko", 0);
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "ready:__tests__/child.marko");
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/1");
			$Child_withLoadAssets({ p: input.p });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { input_p: _unfilled_if($scope0_reason, 0) && input.p }, "__tests__/template.marko", 0, { input_p: ["input.p"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.p, !_server_guard($scope0_reason, 1));
}, 1);
