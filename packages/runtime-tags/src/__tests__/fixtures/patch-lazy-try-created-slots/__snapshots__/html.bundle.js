// child.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<b> </b>",
	a2: "a2,<i>loading</i>",
	a3: "a3;D ;<em> </em>",
	a4: "a4;b%;<!><!><!>",
	a: "a;b%;<!><!><!>"
});
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_p = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_p__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.p, (v) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_text_mark($scope4_id, "a", v, 1, $scope0_reason, 0)}</em>`);
			_scope($scope4_id, {});
		}, 1, "a0", _unfilled_if($scope0_reason, 0) && 2, 1);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a5", 1);
		$wi__input_p && _subscribe(_unfilled_if($scope0_reason, 0) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a5", 0);
		$wi__input_p && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, (e) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_mark($scope3_id, "a", e.message, 1, 4, 0)}</b>`);
		_scope($scope3_id, {});
	}, "a2", "a1", "a4", 1, 1, 3);
	_scope($scope0_id, { e: $wi__input_p && _unfilled_if($scope0_reason, 0) && $input_p__closures });
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
_shells({
	b: "b; ;<main></main>",
	b1: `b1${_shell_marker([[], []], ["b>", $setup])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_p = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			$Child_withLoadAssets({ p: input.p });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 0);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_p && $cg__input_show && _patch_render($scope0_id, "b0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.p }) || $fg__input_p && $cg__input_show && _patch_write($scope0_id, "xe", input.p, !_server_guard($scope0_reason, 1));
}, 1);
