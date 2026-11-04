// tags/tree.marko
const $template = "<!><!><span> </span>";
const $walks = "b%bD l";
const $setup$1 = [[], []];
_shells({
	b: "b;b%bD ;<!><!><span> </span>",
	b2: `b2${_shell_marker([[], []], ["a>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`
});
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_depth = _unfilled_if($scope0_reason, 1), $fg__input_get = _filled_guard($scope0_reason, 2), $cg__input_depth = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			$content({
				depth: input.depth - 1,
				get: input.get
			});
			_patch_child_end();
			$cg__input_depth && _patch_render($scope1_id, "b0");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["b2"], $scope0_reason, 1);
	_html(`<span>${_text_mark($scope0_id, "b", input.depth, 1, $scope0_reason, 1)}</span>`);
	$fg__input_get && $cg__input_depth && _patch_render($scope0_id, "b1", "f");
	_scope($scope0_id, { f: ($ui__input_depth || _unfilled_if($scope0_reason, 2)) && input.get }) || $fg__input_get && $ui__input_depth && _patch_write($scope0_id, "xf", input.get, !_server_guard($scope0_reason, 2));
};
var tree_default = _template("b", $content);

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xd", input.title, !$sg__input_title);
	const getTitle = _bind_resume(() => input.title, "a0", $scope0_id);
	_set_scope_reason($uf__input_title << 1 | $uf__input_title << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	tree_default({
		depth: 2,
		get: getTitle
	});
	_patch_child_end();
	_script($scope0_id, "a1", 0, $fg__input_title, ["e", "d"]);
	_scope($scope0_id, {
		d: input.title,
		e: getTitle,
		a: _existing_scope($childScope)
	}) || $fg__input_title && _patch_write($scope0_id, "xe", getTitle, !$sg__input_title);
}, 1);
