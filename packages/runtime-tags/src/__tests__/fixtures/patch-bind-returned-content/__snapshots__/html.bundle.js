// tags/child.marko
const $setup$1 = [[], []];
_shells({
	b0: "b0 b7!b1",
	b: "b !,"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const $return = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "b", input.label, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "c", count, 2)}</em>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b1");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "b2" : "b3");
		$scope1_page && _subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id) };
	_patch_fill($scope0_id, "vb5", count, 1);
	$scope0_page ? _scope($scope0_id, {
		c: input.label,
		d: count,
		f: _write_if($scope0_reason, 0) && $input_label__closures,
		g: $count__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb4", input.label, !_server_guard($scope0_reason, 0));
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `0${_w0}&b%b D l`)("")};${((_w0) => `<!>${_w0}<!><button> </button>`)("")}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", $cg__input_label && 1);
	let content = child_default({ label: input.label });
	$cg__input_label && _var($scope0_id, "b", $childScope, "a0");
	_dynamic_tag($scope0_id, "c", content, {}, 0, 0, 0, void 0, 2, 0, 0);
	_html(`<button>${_text_resume($scope0_id, "e", n)}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope)
	});
}, 1);
