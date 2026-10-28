// template.marko
_shells({
	a1: "a1;D ;<em> </em>",
	a: "a !a5;D%b ;<main><!><button>interactive</button></main>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_p = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of([1, 2], (n) => {
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.p, (value) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_resume($scope2_id, "a", value + n, 1, $scope0_reason, 0)}</em>`);
			$cg__input_p && _patch_init($scope2_id, "a0");
			_scope($scope2_id, {});
		}, 1, "a1");
		$cg__input_p && _patch_write($scope1_id, "wc", n, 1);
		$cg__input_p && _patch_init($scope1_id, "a4");
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			c: _unfilled_if($scope0_reason, 0) && n,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a3", 0, 0);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {});
}, 1);
