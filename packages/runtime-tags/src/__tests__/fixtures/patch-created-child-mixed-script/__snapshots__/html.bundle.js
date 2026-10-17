// tags/child/index.marko
const $template = "<p> </p><button>+</button>";
const $walks = "D l b";
_shells({ b: "b b2!b0;D l ;<p> </p><button>+</button>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<p>${_patch_text($scope0_id, "a", input.x, void 0, $scope0_reason, 0)}</p><button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1", 1, 1);
	_server_guard($scope0_reason, 0) && _patch_effect($scope0_id, "eb1", "e");
	_patch_init($scope0_id, "b2", 1);
	_patch_value($scope0_id, "vb3", n, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.x,
		f: n
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "we", input.x, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0) => `a0;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			child_default({ x: input.a });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && input.a }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va1", input.a, !_server_guard($scope0_reason, 1));
}, 1);
