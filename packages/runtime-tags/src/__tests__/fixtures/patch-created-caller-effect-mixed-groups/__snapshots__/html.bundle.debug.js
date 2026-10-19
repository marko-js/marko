// tags/probe.marko
const $template$1 = "<p>probe</p>";
const $walks$1 = "b";
_shells({ "__tests__/tags/probe.marko": "__tests__/tags/probe.marko,<p>probe</p>" });
var probe_default = _template("__tests__/tags/probe.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<p>probe</p>");
	_script($scope0_id, "__tests__/tags/probe.marko_0_input_label#2_input_count#3", 0, 1);
	(_filled_guard($scope0_reason, 1) || _filled_guard($scope0_reason, 2)) && _patch_effect($scope0_id, _client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? "PatchQueuedEffect:__tests__/tags/probe.marko_0_input_label#2_input_count#3" : "PatchEffect:__tests__/tags/probe.marko_0_input_label#2_input_count#3", "input_label input_count");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/probe.marko_0_input_label#2_input_count#3/init");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		input_count: input.count
	}, "__tests__/tags/probe.marko", 0, {
		input_label: ["input.label"],
		input_count: ["input.count"]
	}) : (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchWrite:input_label", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchWrite:input_count", input.count, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell __tests__/template.marko_1_count#0:7/init;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			probe_default({
				label: input.label,
				count
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: _unfilled_if($scope0_reason, 0) && input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
