// template.marko
_shells({
	a0: "a0;b%;<!><!><!>",
	a1: "a1;b%;<!><!><!>",
	a2: "a2;b%;<!><!><!>",
	a: "a !a8; b%;<button>go</button><!><!>",
	a3: "a3; D ;<a> </a>"
});
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $params_q__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	const params = $global$1.data.params;
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", $global$1.data.items, (items) => {
			const $scope2_id = _scope_id();
			_for_of(items, (item) => {
				const $scope3_id = _scope_id();
				_html(`<a${_patch_attr($scope3_id, "a", "href", `?q=${params.q.trim()}&i=${item}`)}>${_patch_text($scope3_id, "b", item)}</a>${_el_resume($scope3_id, "a")}`);
				_subscribe(_unfilled_if() && $params_q__closures, _scope($scope3_id, {}), "a6");
			}, 0, $scope2_id, "a", 1, 1, $scope0_page, void 0, void 0, "a3");
			_scope($scope2_id, {});
		}, 1, "a0", 1);
		_global_subscribe("a5", $scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("Loading");
	}, void 0, "a7", void 0, "a2");
	_global_subscribe("a4", $scope0_id);
	_script($scope0_id, "a8");
	$scope0_page && _scope($scope0_id, {});
}, 1, 1);
