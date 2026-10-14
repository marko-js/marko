// child.marko
const $template = "<!><!><!>";
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>",
	a: "a;b%;<!><!><!>"
});
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_p = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_p__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.p, (v) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_patch_text($scope4_id, "a", v, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope4_id, {});
		}, 1, "a0", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "a3");
		$wi__input_p && _subscribe(_unfilled_if($scope0_reason, 0) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a4", 0);
		$wi__input_p && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, (e) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_patch_text($scope3_id, "a", e.message)}</b>`);
		_scope($scope3_id, {});
	}, "a5", "a6", "a2", 1, "");
	$scope0_page && _scope($scope0_id, { e: $wi__input_p && _unfilled_if($scope0_reason, 0) && $input_p__closures });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
_shells({
	b: "b !; ;<main></main>",
	b0: /*@__PURE__*/ (() => `b0;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "b");
			$Child_withLoadAssets({ p: input.p });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && input.p }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", input.p);
}, 1);
