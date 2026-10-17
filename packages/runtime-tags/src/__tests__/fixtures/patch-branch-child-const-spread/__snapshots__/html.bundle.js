// tags/card/index.marko
const $template = "<div id=fixed> </div>";
const $walks = " D l";
_shells({ b: "b !b0; D ;<div id=fixed> </div>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div id=fixed${_patch_attrs_partial(input.attrs, { id: 1 }, "a", $scope0_id, "div", void 0, $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.title, void 0, $scope0_reason, 1)}</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a !; ;<main></main>",
	a0: /*@__PURE__*/ ((_w0) => `a0;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "a");
			card_default({
				attrs: {
					class: "x",
					"data-a": "1"
				},
				title: input.title
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && input.title }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va1", input.title, !_server_guard($scope0_reason, 1));
}, 1);
