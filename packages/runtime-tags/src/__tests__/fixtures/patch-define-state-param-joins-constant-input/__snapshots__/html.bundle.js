// tags/child.marko
const $Label_content__walks = "D l";
const $Label_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<button>+</button>${_w0}`)($Label_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($Label_content__walks);
const $setup$1 = [["b>"], ["b3"]];
_shells({
	b0: `b0;${$Label_content__walks};${$Label_content__template}`,
	b: `b b>!b3;${((_w0) => ` b/${_w0}&`)($Label_content__walks)};${((_w0) => `<button>+</button>${_w0}`)($Label_content__template)}`
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_suffix = _updates_from($scope0_reason, 0), $wi__input_suffix = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	const Label = { content: _content("b0", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__n = _filled_guard($scope1_reason, 0);
		_html(`<p>${_text_mark($scope1_id, "a", n + input.suffix, 1, (1 | $uf__input_suffix) << 1, 0)}</p>`);
		_unfilled_if((1 | $uf__input_suffix) << 1, 0) && _patch_subscribe($scope1_id, "b1");
		_patch_render($scope1_id, "b2", [_filled_guard($scope0_reason, 0) && ">e", $fg__n && "d"], (1 | $uf__input_suffix) << 1, 0);
		_subscribe(_unfilled_if((1 | $uf__input_suffix) << 1, 0) && $wi__input_suffix && $input_suffix__closures, _scope($scope1_id, {
			d: $wi__input_suffix && n,
			_: ($wi__input_suffix || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}), _client_guard((1 | $uf__input_suffix) << 1, 0) && "b1") || $fg__n && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xd", n, !_server_guard($scope1_reason, 0));
	}, $scope0_id, 0) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	Label.content({ n: count });
	_patch_child_end();
	_script($scope0_id, "b3");
	_patch_fill($scope0_id, "vb4", count, 1);
	_scope($scope0_id, {
		e: input.suffix,
		f: count,
		g: $wi__input_suffix && $input_suffix__closures,
		b: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.suffix, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)($walks)};${((_w0) => `${_w0}<span> </span>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({ suffix: "a" });
	_patch_child_end();
	_html(`<span>${_text_mark($scope0_id, "b", input.x, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
