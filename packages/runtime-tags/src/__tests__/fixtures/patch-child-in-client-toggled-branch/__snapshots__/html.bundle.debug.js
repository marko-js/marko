// tags/my-tag.marko
const $template$1 = "<!><!><span> </span>";
const $walks$1 = "b%bD l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/my-tag.marko": "__tests__/tags/my-tag.marko !;b%bD ;<!><!><span> </span>" });
var my_tag_default = _template("__tests__/tags/my-tag.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $fg__input_value = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "#text/0", input.value, $wg__input_value)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/my-tag.marko_1_input_value#0:4/setup");
			_scope($scope1_id, {}, "__tests__/tags/my-tag.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<span>${_text_mark($scope0_id, "#text/1", input.value, 1, $scope0_reason, 0)}</span>`);
	_script($scope0_id, "__tests__/tags/my-tag.marko_0_input_value#4", 1, $fg__input_value, "input_value");
	$fg__input_value && _patch_render($scope0_id, "__tests__/tags/my-tag.marko_1_input_value#0:4/setup", "input_value");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/my-tag.marko_0_open#5/fill", open, 1);
	_scope($scope0_id, { input_value: input.value }, "__tests__/tags/my-tag.marko", 0, { input_value: ["input.value"] }) || $fg__input_value && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>toggle</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_value = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			my_tag_default({ value: input.value });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_value#0:4/setup");
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_value && _patch_render($scope0_id, "__tests__/template.marko_1_input_value#0:4/setup", "input_value");
	_scope($scope0_id, {
		input_value: input.value,
		show
	}, "__tests__/template.marko", 0, {
		input_value: ["input.value"],
		show: "1:6"
	}) || $fg__input_value && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 0));
}, 1);
