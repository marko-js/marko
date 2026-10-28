// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
_shells({ a: /*@__PURE__*/ (() => `a !a4;${((_w0) => `b/${_w0}& b`)($Outer_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Outer_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Inner = { content: _content("a1", ({ v }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__v = _write_guard($scope1_reason, 0), $wi__v = _write_if($scope1_reason, 0);
		_if(() => {
			if (v) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", input.label, $wg__input_label)}</p>`);
				($wi__input_label || $wi__v) && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label);
				return 0;
			}
		}, $scope1_id, "a", $wg__v, $wg__v, 0, 0, 1);
		($wi__input_label || $wi__v) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	const Outer = { content: _content("a2", ({ a, b }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_set_scope_reason(_mask_group($scope3_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope3_id, "a", 0);
		Inner.content({ v: a || b });
		_patch_child_end();
		_scope($scope3_id, {
			d: (_unfilled_if($scope3_reason, 2) || _unfilled_if($scope3_reason, 0) || _unfilled_if($scope3_reason, 1)) && a,
			e: _unfilled_if($scope3_reason, 1) && b,
			a: _existing_scope($childScope)
		}) || _filled_guard($scope3_reason, 2) && _client_guard($scope3_reason, 1) && _patch_fill($scope3_id, "va3", b, !_server_guard($scope3_reason, 2));
	}, $scope0_id) };
	_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	Outer.content({
		a: true,
		b: input.flag
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: input.label,
		g: n,
		h: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 0));
}, 1);
