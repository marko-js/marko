// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a1: "a1;b%;<!><!><!>",
	a: "a !;b%;<!><!><!>",
	a5: /*@__PURE__*/ (() => `a5 a>!a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<button>x</button>`)($Panel_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 3), $wi__input_on__OR__input_w = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			let k = input.n;
			const Panel = { content: _content("a1", ({ open }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $wg__open = _write_guard($scope2_reason, 0), $wi__open = _write_if($scope2_reason, 0);
				_if(() => {
					if (open) {
						const $scope3_id = _scope_id();
						_html(`<p>${_text_resume($scope3_id, "a", input.w, $wg__input_w)}</p>`);
						($wi__input_on__OR__input_w || $wi__open) && _subscribe($wi__input_w && $input_w__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0", $wg__input_w);
						return 0;
					}
				}, $scope2_id, "a", $wg__open, $wg__open, 0, 0, 1);
				($wi__input_on__OR__input_w || $wi__open) && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, $scope1_id, 1) };
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({ open: k });
			_patch_child_end();
			_html(`<button>x</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a2");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a3");
			_filled_guard($scope0_reason, 2) && _patch_fill($scope1_id, "va4", k, 1);
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_on, 1, 0, 0, ["a5"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.n,
		f: input.w,
		h: $wi__input_w && $input_w__closures
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va6", input.n, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va7", input.w, !_server_guard($scope0_reason, 3)));
}, 1);
