// tags/child.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<i> </i>";
const $template = /*@__PURE__*/ ((_w0) => `<button>+</button>${_w0}`)($Inner_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($Inner_content__walks);
const $setup$1 = [["b>"], ["b3"]];
_shells({
	b0: `b0;${$Inner_content__walks};${$Inner_content__template}`,
	b: `b b>!b3;${((_w0) => ` b/${_w0}&`)($Inner_content__walks)};${((_w0) => `<button>+</button>${_w0}`)($Inner_content__template)}`
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_x = _updates_from($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	const Inner = { content: _content("b0", ({ k }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<i>${_text_mark($scope1_id, "a", input.x + k, 1, (1 | $uf__input_x) << 1, 0)}</i>`);
		_unfilled_if((1 | $uf__input_x) << 1, 0) && _patch_subscribe($scope1_id, "b1");
		_patch_render($scope1_id, "b2", _filled_guard($scope0_reason, 0) && ">e", (1 | $uf__input_x) << 1, 0);
		_subscribe(_unfilled_if((1 | $uf__input_x) << 1, 0) && $wi__input_x && $input_x__closures, _scope($scope1_id, {
			d: $wi__input_x && k,
			_: ($wi__input_x || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}), _client_guard((1 | $uf__input_x) << 1, 0) && "b1");
	}, $scope0_id, 0) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	Inner.content({ k: n });
	_patch_child_end();
	_script($scope0_id, "b3");
	_patch_fill($scope0_id, "vb4", n, 1);
	_scope($scope0_id, {
		e: input.x,
		f: n,
		g: $wi__input_x && $input_x__closures,
		b: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({ x: input.x });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
