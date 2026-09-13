// tags/card/index.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
_shells({
	"__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko !; ;<section></section>",
	"__tests__/tags/card/index.marko_1*shell": "__tests__/tags/card/index.marko_1*shell; D lD ;<h2> </h2><p> </p>"
});
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<h2${_patch_attr_class($scope1_id, "#h2/0", input.title, $scope0_reason, 3)}>${_patch_text($scope1_id, "#text/1", input.title, void 0, $scope0_reason, 3)}</h2>${_el_resume($scope1_id, "#h2/0")}<p>${_patch_text($scope1_id, "#text/2", input.note, void 0, $scope0_reason, 4)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/tags/card/index.marko_1*shell"], $scope0_reason, 2);
	_html(`</section>${_el_resume($scope0_id, "#section/0", $sg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		input_note: input.note
	}, "__tests__/tags/card/index.marko", 0, {
		input_title: ["input.title"],
		input_note: ["input.note"]
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "__tests__/tags/card/index.marko0", input.title), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "__tests__/tags/card/index.marko1", input.note));
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)(" b"), ((_w0) => `<main>${_w0}</main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 9);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({
		show: input.show,
		title: "fixed",
		note: input.note
	});
	_html("</main>");
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [card_default]);
