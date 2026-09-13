// template.marko
_shells({
	a: "a !a2;E l b%;<div><h1> </h1><button class=root>+</button><!></div>",
	a0: "a0 !a1;Db%l ;<p>Seen <!></p><button class=inner>+</button>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div><h1>${_text_resume($scope0_id, "a", input.title + " #0")}</h1><button class=root>+</button>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<p>Seen ${_text_resume($scope1_id, "a", n, 2)}</p><button class=inner>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a1");
			_patch_value($scope1_id, "a1", n, 1);
			_scope($scope1_id, { c: n });
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html("</div>");
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		f: input.title,
		h: count
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.title);
}, 1, 0);
