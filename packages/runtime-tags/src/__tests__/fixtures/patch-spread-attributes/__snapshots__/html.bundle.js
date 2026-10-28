// template.marko
_shells({
	a: "a !a3 a4;D D l%b D ;<main><a> </a><!><button> </button></main>",
	a2: "a2 !a0; ;<img>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><a${_patch_attrs({
		href: "/static",
		...input.attrs
	}, "a", $scope0_id, "a", void 0, $scope0_reason, 0)}>${_text_resume($scope0_id, "b", input.label, void 0, $scope0_reason, 1)}</a>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<img${_patch_attrs({
				alt: "hero",
				...input.img
			}, "a", $scope1_id, "img", void 0, $scope0_reason, 3)}>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a2"], $scope0_reason, 2);
	_html(`<button>${_text_resume($scope0_id, "e", count)}</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a3");
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		k: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.img,
		l: count
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va5", input.img, !_server_guard($scope0_reason, 3)), $cg__input_show && _content_withhold(input.img));
}, 1);
