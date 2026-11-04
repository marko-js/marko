// template.marko
const $Label_content__walks = "D l";
const $Label_content__template = "<p> </p>";
_shells({ a: `a !a3;${((_w0) => `b/${_w0}& b`)($Label_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Label_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_suffix = _write_if($scope0_reason, 0), $fg__input_suffix = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Label = { content: _content("a0", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__n = _filled_guard($scope1_reason, 0);
		_html(`<p>${_text_mark($scope1_id, "a", n + input.suffix, 1, (1 | _updates_from($scope0_reason, 0)) << 1, 0)}</p>`);
		_patch_render($scope1_id, "a1", [_filled_guard($scope0_reason, 0) && ">e", $fg__n && "d"], (1 | _updates_from($scope0_reason, 0)) << 1, 0);
		_subscribe(_unfilled_if((1 | _updates_from($scope0_reason, 0)) << 1, 0) && $wi__input_suffix && $input_suffix__closures, _scope($scope1_id, {
			d: _unfilled_if($scope0_reason, 0) && n,
			_: ($wi__input_suffix || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}), _client_guard((1 | _updates_from($scope0_reason, 0)) << 1, 0) && "a2") || $fg__n && _client_guard($scope0_reason, 0) && _patch_write($scope1_id, "xd", n, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Label.content({ n: count });
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	$fg__input_suffix && _patch_subscribers($scope0_id, "a4", "e");
	_scope($scope0_id, {
		e: input.suffix,
		f: count,
		g: $wi__input_suffix && $input_suffix__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_suffix && _patch_write($scope0_id, "xe", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
