// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<p> </p>";
_shells({ a: `a !a3;${((_w0) => `D/${_w0}&%b l`)($Panel_content__walks)};${((_w0) => `<main>${_w0}<!><button>+</button></main>`)($Panel_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0), $fg__input_dyn = _filled_guard($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Panel = { content: _content_resume("a0", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__value = _filled_guard($scope1_reason, 0);
		_html(`<p>${_text_mark($scope1_id, "a", value + input.title, 1, (_updates_from($scope0_reason, 0) | _updates_from($scope1_reason, 0)) << 1, 0)}</p>`);
		_patch_render($scope1_id, "a1", [_filled_guard($scope0_reason, 0) && ">f", $fg__value && "d"], (_updates_from($scope0_reason, 0) | _updates_from($scope1_reason, 0)) << 1, 0);
		_subscribe(_unfilled_if((_updates_from($scope0_reason, 0) | _updates_from($scope1_reason, 0)) << 1, 0) && $wi__input_title && $input_title__closures, _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 0)) && value,
			_: _scope_with_id($scope0_id)
		}), _client_guard((_updates_from($scope0_reason, 0) | _updates_from($scope1_reason, 0)) << 1, 0) && "a2") || $fg__value && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xd", value, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Panel.content({ value: "s" });
	_patch_child_end();
	_dynamic_tag($scope0_id, "b", input.dyn ? Panel : null, { value: n }, 8);
	_html(`<button>+</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a3");
	$fg__input_title && _patch_subscribers($scope0_id, "a4", "f");
	_patch_render($scope0_id, "a5", $fg__input_dyn && "g");
	_scope($scope0_id, {
		f: input.title,
		g: input.dyn,
		h: n,
		i: Panel,
		k: $wi__input_title && $input_title__closures,
		a: _existing_scope($childScope)
	}) || ($fg__input_title && _patch_write($scope0_id, "xf", input.title, !_server_guard($scope0_reason, 0)), $fg__input_dyn && _patch_write($scope0_id, "xg", input.dyn, !_server_guard($scope0_reason, 1)));
}, 1);
