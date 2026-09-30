// child.marko
_shells({ a: "a;Db%;<span class=child>child <!></span>" });
var child_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span class=child>child ${_patch_text($scope0_id, "a", input.label, 2, $scope0_reason, 0)}</span>`);
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// other.marko
_shells({ b: "b;Db%;<span class=other>other <!></span>" });
var other_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span class=other>other ${_patch_text($scope0_id, "a", input.label, 2, $scope0_reason, 0)}</span>`);
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
withLoadAssets(child_default, "_a", void 0, 1);
_shells({
	c: "c !; ;<main></main>",
	c0: "c0 c5!c1; b%;<button>toggle</button><!><!>"
});
var template_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let alt = false;
			_html(`<button>toggle</button>${_el_resume($scope1_id, "a")}`);
			_dynamic_tag($scope1_id, "b", other_default, { label: input.label });
			_script($scope1_id, "c1");
			_patch_value($scope1_id, "c2", alt, 1);
			_scope($scope1_id, {
				c: alt,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["c0"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { e: input.label }) : _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "c3", input.label);
}, 1, 1);
