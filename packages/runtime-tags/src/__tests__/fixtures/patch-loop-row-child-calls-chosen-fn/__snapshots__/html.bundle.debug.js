// tags/label-view.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label-view.marko": "__tests__/tags/label-view.marko; ;<output></output>" });
var label_view_default = _template("__tests__/tags/label-view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label-view.marko_0_input#2", 1, $fg__input);
	_scope($scope0_id, { input }, "__tests__/tags/label-view.marko", 0, { input: 0 }) || $fg__input && _patch_write($scope0_id, "PatchMarkedWrite:input", input, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><button>noop</button>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><button>noop</button>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_title__OR__input_items = _unfilled_if($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 2), $sg__input_title = _server_guard($scope0_reason, 1), $fg__input_title2 = _filled_guard($scope0_reason, 1), $ui__input_items = _unfilled_if($scope0_reason, 2), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_title2 && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const up = _bind_resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id, 1);
	const low = _bind_resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id, 1);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $fg__input_title = _filled_guard($scope0_reason, 1), $fg__input_items = _filled_guard($scope0_reason, 2);
		$fg__input_items && _unfilled_if($scope0_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:item_upper", item?.upper, !_server_guard($scope0_reason, 2));
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		label_view_default({ get: item.upper ? up : low });
		_patch_child_end();
		_patch_render($scope1_id, "__tests__/template.marko_1_up#0:5_low#0:6_item_upper#3/setup", (($fg__input_title ? " >up" : "") + ($fg__input_title ? " >input_title" : "") + ($fg__input_title ? " >low" : "") + ($fg__input_items ? " item_upper" : "")).slice(1), $scope0_reason, 0);
		_scope($scope1_id, {
			item_upper: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && item?.upper,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "3:2", { item_upper: ["item.upper", "3:6"] });
	}, "id", $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 2);
	_html("<button>noop</button>");
	$fg__input_title2 && $cg__input_items && _patch_render($scope0_id, "__tests__/template.marko_1_up#0:5/setup", "up input_title");
	$fg__input_title2 && $cg__input_items && _patch_render($scope0_id, "__tests__/template.marko_1_low#0:6/setup", "low input_title");
	_scope($scope0_id, {
		input_title: input.title,
		up: $wi__input_items && $ui__input_title__OR__input_items && up,
		low: $wi__input_items && $ui__input_title__OR__input_items && low
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		up: "1:8",
		low: "2:8"
	}) || ($fg__input_title2 && $ui__input_items && _patch_write($scope0_id, "PatchMarkedWrite:up", up, !$sg__input_title), $fg__input_title2 && $ui__input_items && _patch_write($scope0_id, "PatchMarkedWrite:low", low, !$sg__input_title));
}, 1);
