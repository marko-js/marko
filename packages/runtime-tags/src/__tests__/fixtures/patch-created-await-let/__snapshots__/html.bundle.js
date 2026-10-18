// template.marko
_shells({
	a0: "a0 !a3; D%c%;<button><!> <!></button>",
	a: "a;b%;<!><!><!>",
	a1: "a1 !a3; D%c%;<button><!> <!></button>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (v) => {
				const $scope2_id = _scope_id();
				let open = false;
				_html(`<button>${_patch_text($scope2_id, "b", v, void 0, $scope0_reason, 2)} ${_text_resume($scope2_id, "c", "open", 2)}</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a3");
				_patch_value($scope2_id, "va4", open, 1);
				_scope($scope2_id, { f: open });
			}, 1, "a0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 1) && input.promise }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va5", input.promise, !_server_guard($scope0_reason, 2));
}, 1);
