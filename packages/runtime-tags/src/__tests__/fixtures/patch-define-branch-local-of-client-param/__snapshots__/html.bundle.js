// template.marko
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
_shells({
	a: /*@__PURE__*/ (() => `a !a7;${((_w0) => `b/${_w0}& b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template)}`)(),
	a4: "a4 a10;D l%;<p> </p><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Row = { content: _content("a5", ({ value }) => {
		const $scope1_id = _scope_id(), $scope1_reason = _scope_reason();
		_write_guard($scope1_reason, 0);
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				const doubled = value * 2;
				_html(`<p>${_text_resume($scope2_id, "a", input.label, 1, $scope0_reason, 1)}</p>`);
				_if(() => {}, $scope2_id, "b", 1, 1, 0, 0, 1);
				_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_label ? "a0" : "a1");
				_client_guard($scope1_reason, 0) && _patch_init($scope2_id, "a2");
				_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
					c: doubled,
					_: _scope_with_id($scope1_id)
				}), $cg__input_label && "a1"), "a3");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope1_id, {
			d: $wi__input_show && value,
			_: _scope_with_id($scope0_id)
		}), $cg__input_show && "a6", $wg__input_show);
		$wg__input_show || _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({ value: n });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		g: n,
		i: _write_if($scope0_reason, 1) && $input_label__closures,
		j: $n__closures,
		h: $wi__input_show && $input_show__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "va8", input.label, !_server_guard($scope0_reason, 1));
}, 1);
