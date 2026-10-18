// tags/card.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D ;<p> </p>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let o = input.opts;
	const f = o.list[0];
	_html(`<p>${_text_resume($scope0_id, "#text/0", f())}</p>`);
	_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/tags/card.marko_fill0", { list: { 0: o?.list?.[0] } }, 1);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			card_default({ opts: { list: [...input.items, _resume(() => "f:" + input.label, "__tests__/template.marko_1/opts", $scope1_id)] } });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 4);
	$scope0_page ? _scope($scope0_id, {
		input_items: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.items,
		input_label: _write_if($scope0_reason, 0) && input.label
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.items, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && (_client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 6)) : _patch_write($scope0_id, "PatchWrite:input_label", input.label, !_server_guard($scope0_reason, 6))));
}, 1);
