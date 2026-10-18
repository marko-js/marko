// tags/card.marko
_shells({ b: "b," });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $return = { fn: _resume(function() {
		return "f:" + input.label;
	}, "b0", $scope0_id) };
	$scope0_page ? _scope($scope0_id, { c: input.label }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wc", input.label, !_server_guard($scope0_reason, 0));
	return $return;
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ (() => `a0 !a2;${/*@__PURE__*/ ((_w0) => `0${_w0}&D%c%l b`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<p><!> <!></p><button>show</button>`)("")}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			let r = card_default({ label: input.label });
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "wf", r, !_server_guard($scope0_reason, 1));
			_client_guard($scope0_reason, 1) && _var($scope1_id, "b", $childScope, "a1");
			let shown = "-";
			_html(`<p>${_patch_text($scope1_id, "c", r.fn(), void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "d", shown, 2)}</p><button>show</button>${_el_resume($scope1_id, "e")}`);
			_script($scope1_id, "a2");
			_patch_value($scope1_id, "va3", shown, 1);
			_scope($scope1_id, {
				f: r,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && input.label }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 1));
}, 1);
