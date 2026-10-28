// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<p> </p>";
_shells({ a: /*@__PURE__*/ (() => `a !a3;${((_w0) => `D/${_w0}&%b l`)($Panel_content__walks)};${((_w0) => `<main>${_w0}<!><button>+</button></main>`)($Panel_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Panel = { content: _content_resume("a0", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", value + input.title, 1, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0)}</p>`);
		$cg__input_title && _patch_write($scope1_id, "xd", value, !(_filled_guard($scope1_reason, 0) && $cg__input_title));
		_patch_init_entry($scope1_id, "a1", [_filled_guard($scope0_reason, 0) && ">f", _filled_guard($scope1_reason, 0) && "d"], (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0);
		_subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && $wi__input_title && $input_title__closures, _scope($scope1_id, {
			d: _unfilled_if($scope0_reason, 0) && value,
			_: _scope_with_id($scope0_id)
		}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && "a2");
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Panel.content({ value: "s" });
	_patch_child_end();
	_dynamic_tag($scope0_id, "b", input.dyn ? Panel : null, { value: n }, 8);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a3");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.title);
	_scope($scope0_id, {
		f: input.title,
		g: input.dyn,
		h: n,
		i: Panel,
		k: $wi__input_title && $input_title__closures,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.dyn, !_server_guard($scope0_reason, 1)), _content_withhold(input.dyn));
}, 1);
