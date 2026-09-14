// template.marko
_shells({ a: "a !a0; b%;<button>t</button><!><!>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button>t</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		if (input.opts.show && on) {
			const $scope1_id = _scope_id();
			_html("<span>shown</span>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		f: input.opts?.show,
		g: on
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.opts?.show);
}, 1, 0);
