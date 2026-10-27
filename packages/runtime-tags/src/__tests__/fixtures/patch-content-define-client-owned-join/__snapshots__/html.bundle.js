// template.marko
const $Label_content__walks = "D l";
const $Label_content__template = "<p> </p>";
_shells({ a: /*@__PURE__*/ (() => `a !a3;${((_w0) => `b/${_w0}& b`)($Label_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Label_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_suffix = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Label = { content: _content("a0", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_patch_text($scope1_id, "a", n + input.suffix, void 0, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0)}</p>`);
		_subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && $wi__input_suffix && $input_suffix__closures, _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 0)) && n,
			_: ($wi__input_suffix || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && "a2") || _filled_guard($scope1_reason, 0) && _client_guard($scope0_reason, 0) && _patch_fill($scope1_id, "va1", n, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "a", 0);
	Label.content({ n: count });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: input.suffix,
		f: count,
		g: $wi__input_suffix && $input_suffix__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
