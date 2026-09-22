// template.marko
_shells({
	a0: "a0,Loading",
	a1: "a1;b%;<!><!><!>",
	a2: "a2;b%;<!><!><!>",
	a3: "a3;b%;<!><!><!>",
	a: "a !a8; b%;<button>go</button><!><!>",
	a4: "a4; D ;<a> </a>"
});
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const params = $global$1.data.params;
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", $global$1.data.items, (items) => {
			const $scope2_id = _scope_id();
			_for_of(items, (item) => {
				const $scope3_id = _scope_id();
				_unfilled_if() && _script($scope3_id, "a7");
				_html(`<a${_patch_attr($scope3_id, "a", "href", `?q=${params.q.trim()}&i=${item}`)}>${_patch_text($scope3_id, "b", item)}</a>${_el_resume($scope3_id, "a")}`);
				_scope($scope3_id, {});
			}, 0, $scope2_id, "a", 1, $scope0_page, $scope0_page, void 0, void 0, "a4");
			$scope0_page && _scope($scope2_id, {});
		}, 1, "a2", 1);
		_global_subscribe("a6", $scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("a0", $scope0_id) }) });
	_global_subscribe("a5", $scope0_id);
	_script($scope0_id, "a8");
	$scope0_page && _scope($scope0_id, {});
}, 1, 1);
