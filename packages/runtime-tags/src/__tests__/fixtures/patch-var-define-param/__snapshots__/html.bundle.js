// tags/labeler.marko
const $template = "<span> </span>";
_shells({ b: "b;D ;<span> </span>" });
var labeler_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</span>`);
	const $return = "[" + input.title + "]";
	_scope($scope0_id, {});
	return $return;
});

// template.marko
const $Row_content__walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l");
const $Row_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template);
_shells({ a: /*@__PURE__*/ (() => `a !a4;${((_w0) => `b/${_w0}& b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_suffix = _client_guard($scope0_reason, 0), $wi__input_suffix = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Row = { content: _content("a1", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $cg__value = _client_guard($scope1_reason, 0);
		_set_scope_reason((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1);
		const $childScope = _patch_child($scope1_id, "a", 0, ($cg__input_suffix || $cg__value) && 1);
		let label = labeler_default({ title: value + input.suffix });
		($cg__input_suffix || $cg__value) && _var($scope1_id, "b", $childScope, "a0");
		_patch_child_end();
		_html(`<p>${_text_resume($scope1_id, "c", label, void 0, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0)}</p>`);
		_subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && $wi__input_suffix && $input_suffix__closures, _scope($scope1_id, {
			f: $wi__input_suffix && value,
			_: ($wi__input_suffix || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 0)) << 1, 0) && "a3") || _filled_guard($scope1_reason, 0) && $cg__input_suffix && _patch_fill($scope1_id, "va2", value, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope2 = _patch_child($scope0_id, "a", 1);
	Row.content({ value: n });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: input.suffix,
		f: n,
		g: $wi__input_suffix && $input_suffix__closures,
		a: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
