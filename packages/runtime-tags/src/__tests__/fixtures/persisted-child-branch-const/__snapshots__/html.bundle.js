// tags/card/index.marko
const $template = "<section></section>";
_shells({
	b: "b !; ;<section></section>",
	b0: "b0; D lD ;<h2> </h2><p> </p>"
});
var card_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<h2${_patch_attr_class($scope1_id, "a", input.title, $scope0_reason, 3)}>${_patch_text($scope1_id, "b", input.title, void 0, $scope0_reason, 3)}</h2>${_el_resume($scope1_id, "a")}<p>${_patch_text($scope1_id, "c", input.note, void 0, $scope0_reason, 4)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_reason, 2);
	_html(`</section>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: input.note
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "b0", input.title), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "b1", input.note));
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)(" b"), ((_w0) => `<main>${_w0}</main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 9);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		show: input.show,
		title: "fixed",
		note: input.note
	});
	_html("</main>");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [card_default]);
