// template.marko
_shells({
	a: "a !a2;D%b ;<main><!><button>+</button></main>",
	a0: "a0 a4;D ;<p> </p>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = "[" + input.title + "]";
			_filled_guard($scope0_reason, 1) ? _patch_value($scope1_id, "a0", label) : _patch_init($scope1_id, "a1");
			_html(`<p>${_text_resume($scope1_id, "a", label + " #0")}</p>`);
			_scope($scope1_id, {
				b: label,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_page && _scope($scope0_id, {
		f: _source_if($scope0_reason, 0) && input.title,
		g: count
	});
}, 1, 0);
