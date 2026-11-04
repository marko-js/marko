// template.marko
const $Info_content__walks = "D%c%l";
const $Info_content__template = "<p><!>:<!></p>";
_shells({
	a: "a !a4;b%b ;<!><!><button>+</button>",
	a3: `a3 >a>a1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_id = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Info = { content: _content("a0", ({ id }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<p>${_text_mark($scope2_id, "a", id, 1, $scope2_reason, 0)}:${_text_mark($scope2_id, "b", count, 2)}</p>`);
		_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0, 0, $scope0_id);
			Info.content({ id: input.id });
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a2");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a3"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	$fg__input_id && $cg__input_show && _patch_render($scope0_id, "a2", "f");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.id,
		g: count,
		i: $count__closures
	}) || $fg__input_id && $cg__input_show && _patch_write($scope0_id, "xf", input.id, !_server_guard($scope0_reason, 2));
}, 1);
