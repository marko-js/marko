// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a !a4;D%b ;<main><!><button>interactive</button></main>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_promise = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", value, 1, $scope0_reason, 2)}</em>`);
				_scope($scope2_id, {});
			}, 1, "a0", _unfilled_if($scope0_reason, 2) && 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a3");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a2"], $scope0_reason, 1);
	_html(`<button>interactive</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	$fg__input_promise && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a3", "f");
	_scope($scope0_id, { f: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.promise }) || $fg__input_promise && $ui__input_show && _patch_write($scope0_id, "xf", input.promise, !_server_guard($scope0_reason, 2));
}, 1);
