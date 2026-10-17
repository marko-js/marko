// template.marko
_shells({
	a: "a !a4;E l%b ;<main><h1> </h1><!><button>+</button></main>",
	a0: "a0;b%;<!><!><!>",
	a1: "a1 a9 a10;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _write_guard($scope0_reason, 2), $wi__input_title = _write_if($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.heading, void 0, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<p>${_text_resume($scope2_id, "a", input.title + "@0")}</p>`);
					_subscribe($count__closures, _subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 3) && "a2"), "a3");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_inner, void 0, void 0, void 0, ["a1"], $scope0_reason, 2);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a4");
	_patch_value($scope0_id, "va7", count, 1);
	$scope0_page ? _scope($scope0_id, {
		h: _unfilled_if($scope0_reason, 1) && input.inner,
		i: input.title,
		j: count,
		l: $wi__input_title && $input_title__closures,
		m: $count__closures
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va5", input.inner, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "va6", input.title, !_server_guard($scope0_reason, 3)));
}, 1);
