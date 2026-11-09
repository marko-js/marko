// tags/labeler.marko
const $template = "<span> </span>";
_shells({ b: "b;D ;<span> </span>" });
var labeler_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</span>`);
	const $return = "[" + input.title + "]";
	_scope($scope0_id, {});
	return $return;
});

// template.marko
const $Row_content__walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l");
const $Row_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template);
_shells({ a: `a !a4;${((_w0) => `/${_w0}& b`)($Row_content__walks)};${((_w0) => `${_w0}<button>+</button>`)($Row_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_suffix = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Row = { content: _content("a1", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__value = _filled_guard($scope1_reason, 0);
		_set_scope_reason((1 | _updates_from($scope0_reason, 0)) << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0, _unfilled_if((1 | _updates_from($scope0_reason, 0)) << 1, 0) && 1);
		let label = labeler_default({ title: value + input.suffix });
		_unfilled_if((1 | _updates_from($scope0_reason, 0)) << 1, 0) && _var($scope1_id, "b", $childScope, "a0");
		_patch_child_end();
		_html(`<p>${_text_mark($scope1_id, "c", label, 1, (1 | _updates_from($scope0_reason, 0)) << 1, 0)}</p>`);
		_patch_render($scope1_id, "a2", [_filled_guard($scope0_reason, 0) && ">e", $fg__value && "f"], (1 | _updates_from($scope0_reason, 0)) << 1, 0);
		_subscribe(_unfilled_if((1 | _updates_from($scope0_reason, 0)) << 1, 0) && $wi__input_suffix && $input_suffix__closures, _scope($scope1_id, {
			f: _unfilled_if($scope0_reason, 0) && value,
			_: ($wi__input_suffix || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), _client_guard((1 | _updates_from($scope0_reason, 0)) << 1, 0) && "a3") || $fg__value && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xf", value, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	Row.content({ value: n });
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: input.suffix,
		f: n,
		g: $wi__input_suffix && $input_suffix__closures,
		a: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
