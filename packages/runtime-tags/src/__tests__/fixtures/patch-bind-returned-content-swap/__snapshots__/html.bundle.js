// tags/child.marko
const $setup$1 = [[], []];
_shells({
	b0: "b0 b7!b1",
	b: "b !,"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const $return = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "b", input.label, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "c", count, 2)}</em>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b1");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "b2" : "b3");
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id) };
	_patch_fill($scope0_id, "vb5", count, 1);
	_scope($scope0_id, {
		c: input.label,
		d: count,
		f: _write_if($scope0_reason, 0) && $input_label__closures,
		g: $count__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb4", input.label, !_server_guard($scope0_reason, 0));
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&0${_w1}&b%b D l`)("", "")};${((_w0, _w1) => `<!>${_w0}${_w1}<!><button> </button>`)("", "")}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 0);
	let a = child_default({ label: "A" });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "c", 1);
	let b = child_default({ label: "B" });
	_patch_child_end();
	_dynamic_tag($scope0_id, "e", input.first ? a : b, {}, 18, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html(`<button>${_text_resume($scope0_id, "g", n)}</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		k: n,
		l: _unfilled_if($scope0_reason, 0) && a,
		m: _unfilled_if($scope0_reason, 0) && b,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
