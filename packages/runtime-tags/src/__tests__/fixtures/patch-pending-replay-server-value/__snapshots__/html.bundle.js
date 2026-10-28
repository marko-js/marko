// template.marko
_shells({
	a1: "a1",
	a2: "a2;b%;<!><!><!>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;b%;<!><!><!>",
	a: "a !a7; b%;<button>go</button><!><!>",
	a0: "a0; D ;<a> </a>"
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
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
				_html(`<a${_attr("href", `?q=${params.q.trim()}&i=${item}`, $scope3_id, "aa$href")}>${_text_resume($scope3_id, "b", item, void 0, 4, 0)}</a>${_el_resume($scope3_id, "a")}`);
				_scope($scope3_id, {});
			}, 0, $scope2_id, "a", 1, void 0, void 0, void 0, void 0, "a0");
			_scope($scope2_id, {});
		}, 1, "a2", 1);
		_fill_global_subscribe("a5", $scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("Loading");
	}, void 0, "a1", void 0, "a4", void 0, void 0, 2);
	_fill_global_subscribe("a6", $scope0_id);
	_script($scope0_id, "a7");
	_scope($scope0_id, {});
}, 1);
