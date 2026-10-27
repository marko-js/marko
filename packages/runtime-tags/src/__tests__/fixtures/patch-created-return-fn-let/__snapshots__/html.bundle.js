// tags/card.marko
const $setup = [[], []];
_shells({ b: "b," });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input.label, !_server_guard($scope0_reason, 0));
	const $return = { fn: _bind_resume(function() {
		return "f:" + input.label;
	}, "b0", $scope0_id) };
	$scope0_page && _scope($scope0_id, { c: input.label });
	return $return;
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], ["a1"]], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button>set</button>`)("")}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "a", 0, $cg__input_label && 1);
			let r = card_default({ label: input.label });
			$cg__input_label && _var($scope1_id, "b", $childScope, "a0");
			_patch_child_end();
			_html(`<p>${_patch_text($scope1_id, "c", r.fn(), void 0, (_mask_group($scope0_reason, 1) & 1) << 1, 0, 1)}</p><button>set</button>${_el_resume($scope1_id, "d")}`);
			_script($scope1_id, "a1");
			$cg__input_label && _patch_init($scope1_id, "a2");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 1));
}, 1);
