// tags/struct/index.marko
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0,<div>a</div>",
	b1: "b1,<span>b</span>"
});
var struct_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_mode = _write_if($scope0_reason, 0), $wg__input_mode = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.mode) {
			const $scope1_id = _scope_id();
			_html("<div>a</div>");
			$wi__input_mode && _scope($scope1_id, {});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<span>b</span>");
			$wi__input_mode && _scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_mode, void 0, void 0, void 0, ["b0", "b1"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			struct_default({ mode: false });
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", show, 1);
	$scope0_page && _scope($scope0_id, { c: show });
}, 1);
