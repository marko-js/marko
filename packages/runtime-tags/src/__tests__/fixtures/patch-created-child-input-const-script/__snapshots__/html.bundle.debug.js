// tags/probe.marko
const $template$1 = "<p>probe</p>";
const $walks$1 = "b";
_shells({ "__tests__/tags/probe.marko": "__tests__/tags/probe.marko !__tests__/tags/probe.marko_0_input_label#2_opts_items#4_opts_label#5,<p>probe</p>" });
var probe_default = _template_patch("__tests__/tags/probe.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const opts = {
		label: input.label,
		items: []
	};
	_html("<p>probe</p>");
	_script($scope0_id, "__tests__/tags/probe.marko_0_input_label#2_opts_items#4_opts_label#5", 0);
	_patch_effect($scope0_id, "__tests__/tags/probe.marko_0_input_label#2_opts_items#4_opts_label#5", "input_label opts_items opts_label");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		opts_items: opts.items,
		opts_label: opts.label
	}, "__tests__/tags/probe.marko", 0, {
		input_label: ["input.label"],
		opts_items: ["opts.items", "1:8"],
		opts_label: ["opts.label", "1:8"]
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "input_label", input.label), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "opts_items", opts.items), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "opts_label", opts.label));
}, 0, 0);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $template$1)
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			probe_default({ label: input.label });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$scope0_page && _scope($scope0_id, { input_label: input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1, () => [probe_default]);
