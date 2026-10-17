// template.marko
const $Row_content__walks = "D l b";
const $Row_content__template = "<p> </p><div></div>";
_shells({ a: /*@__PURE__*/ (() => `a !a3;${((_w0) => `b/${_w0}& b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	const Row = { content: _content("a0", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<p>${_patch_text($scope1_id, "a", a + b, void 0, $scope1_reason, 0)}</p><div></div>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "a1");
		_server_guard($scope1_reason, 1) && _patch_effect($scope1_id, "ea1", "e");
		_patch_write($scope1_id, "wf", b, !(_filled_guard($scope1_reason, 2) && _client_guard($scope1_reason, 1)));
		_patch_join_init($scope1_id, "a2", $scope1_reason, 0);
		$scope1_page ? _scope($scope1_id, {
			e: a,
			f: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 0)) && b
		}) : _filled_guard($scope1_reason, 1) && _patch_write($scope1_id, "we", a, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	Row.content({
		a: input.a,
		b: n
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "va4", n, 1);
	$scope0_page && _scope($scope0_id, {
		f: n,
		a: _existing_scope($childScope)
	});
}, 1);
