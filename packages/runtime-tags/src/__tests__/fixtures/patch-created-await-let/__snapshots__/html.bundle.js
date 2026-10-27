// template.marko
_shells({
	a2: "a2 !a0; D%c%;<button><!> <!></button>",
	a: "a !;b%;<!><!><!>",
	a3: "a3 !a0; D%c%;<button><!> <!></button>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (v) => {
				const $scope2_id = _scope_id();
				let open = false;
				_html(`<button>${_patch_text($scope2_id, "b", v, void 0, $scope0_reason, 2)} ${_text_resume($scope2_id, "c", "open", 2)}</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_patch_fill($scope2_id, "va1", open, 1);
				_scope($scope2_id, { f: open });
			}, 1, "a2");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a5");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a4"], $scope0_reason, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va6", input.promise, !_server_guard($scope0_reason, 2));
}, 1);
