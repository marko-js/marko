// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<i> </i>";
_shells({ a: `a !a3;${((_w0) => ` b/${_w0}&`)($Inner_content__walks)};${((_w0) => `<button>+</button>${_w0}`)($Inner_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_x = _updates_from($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	const Inner = { content: _content("a0", ({ k }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__k = _filled_guard($scope1_reason, 0);
		_html(`<i>${_text_mark($scope1_id, "a", input.x + k, 1, (1 | $uf__input_x) << 1, 0)}</i>`);
		_patch_render($scope1_id, "a1", [_filled_guard($scope0_reason, 0) && ">e", $fg__k && "d"], (1 | $uf__input_x) << 1, 0);
		_subscribe(_unfilled_if((1 | $uf__input_x) << 1, 0) && $wi__input_x && $input_x__closures, _scope($scope1_id, {
			d: $wi__input_x && k,
			_: ($wi__input_x || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}), _client_guard((1 | $uf__input_x) << 1, 0) && "a2") || $fg__k && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xd", k, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	Inner.content({ k: n });
	_patch_child_end();
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: input.x,
		f: n,
		g: $wi__input_x && $input_x__closures,
		b: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 0));
}, 1);
