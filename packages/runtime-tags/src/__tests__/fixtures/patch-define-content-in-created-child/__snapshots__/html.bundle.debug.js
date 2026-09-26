// tags/wrap.marko
const $template$1 = "<button id=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !__tests__/tags/wrap.marko_0; b%;<button id=toggle>toggle</button><!><!>" });
var wrap_default = _template_patch("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row__OR__input_label = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.row, { label: input.label }, 0, 0, $sg__input_row__OR__input_label);
			_scope($scope1_id, {}, "__tests__/tags/wrap.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/wrap.marko_0");
	_patch_value($scope0_id, "__tests__/tags/wrap.marko2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_row: input.row,
		input_label: input.label,
		open
	}, "__tests__/tags/wrap.marko", 0, {
		input_row: ["input.row"],
		input_label: ["input.label"],
		open: "1:6"
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/tags/wrap.marko0", input.row), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "__tests__/tags/wrap.marko1", input.label));
}, 0, 1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Row = { content: _content_resume("__tests__/template.marko_2*content", ({ label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<em>${_patch_text($scope2_id, "#text/0", label)}</em>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 5);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			wrap_default({
				row: Row,
				label: input.label
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$scope0_page && _scope($scope0_id, {
		input_label: input.label,
		Row
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		Row: "1:9"
	});
}, 1, () => [wrap_default]);
