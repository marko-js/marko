// tags/label-view.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label-view.marko": "__tests__/tags/label-view.marko; ;<output></output>" });
var label_view_default = _template("__tests__/tags/label-view.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label-view.marko_0_input#2", 1, _filled_guard($scope0_reason, 0), "input");
	_scope($scope0_id, { input }, "__tests__/tags/label-view.marko", 0, { input: 0 }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input", input, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><button>noop</button>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><button>noop</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 2), $sg__input_title = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const up = _bind_resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "PatchMarkedWrite:item_upper", item?.upper, !_server_guard($scope0_reason, 2));
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		label_view_default(_patch_live($childScope, { get: item.upper ? up : low }, $scope1_id, ">up >low item_upper"));
		_patch_child_end();
		(_filled_guard($scope0_reason, 1) && !$cg__input_items || _filled_guard($scope0_reason, 1) && !$cg__input_items || _filled_guard($scope0_reason, 2)) && _patch_join_init($scope1_id, "__tests__/template.marko_1_up#0:5_low#0:6_item_upper#3/init", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && ">up", _filled_guard($scope0_reason, 1) && ">low", _filled_guard($scope0_reason, 2) && "item_upper");
		_scope($scope1_id, {
			item_upper: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && item?.upper,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "3:2", { item_upper: ["item.upper", "3:6"] });
	}, "id", $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 2);
	_html("<button>noop</button>");
	_scope($scope0_id, {
		input_title: input.title,
		up: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && up,
		low: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && low
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		up: "1:8",
		low: "2:8"
	}) || (_filled_guard($scope0_reason, 1) && ($cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", up) : _patch_write($scope0_id, "PatchMarkedWrite:up", up, !$sg__input_title)), _filled_guard($scope0_reason, 1) && ($cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1/unpatched", low) : _patch_write($scope0_id, "PatchMarkedWrite:low", low, !$sg__input_title)));
}, 1);
