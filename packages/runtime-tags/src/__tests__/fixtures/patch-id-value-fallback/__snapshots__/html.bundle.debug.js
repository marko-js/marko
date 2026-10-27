// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_patch_attr($scope0_id, "PatchAttr:#label/0 for", "for", uid, $scope0_reason, 0)}>${_patch_text($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_patch_attr($scope0_id, "PatchAttr:#input/2 id", "id", uid, $scope0_reason, 0)}${_patch_attr($scope0_id, "PatchAttr:#input/2 aria-describedby", "aria-describedby", input.heading, $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $template = "<h1>Fields</h1><label>second</label><input><!><label>local</label><input><button>toggle</button>";
const $walks = " b b b%b b b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b b b%b b b ;<h1>Fields</h1><label>second</label><input><!><label>local</label><input><button>toggle</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const heading = input.heading || _id("heading");
	const second = _id("second");
	_html(`<h1${_patch_attr($scope0_id, "PatchAttr:#h1/0 id", "id", heading, $scope0_reason, 0)}>Fields</h1>${_el_resume($scope0_id, "#h1/0", _mask_group($scope0_reason, 0))}<label${_patch_attr($scope0_id, "PatchAttr:#label/1 for", "for", second, 0, 0)}>second</label>${_el_resume($scope0_id, "#label/1", 0)}<input${_patch_attr($scope0_id, "PatchAttr:#input/2 id", "id", second, 0, 0)}>${_el_resume($scope0_id, "#input/2", 0)}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 5);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
		field_default({
			name: item.key,
			uid: item.uid,
			heading
		});
		_patch_child_end();
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_heading#0:11/init");
		$scope0_page && _scope($scope1_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "3:2");
	}, "key", $scope0_id, "#text/3", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 1);
	let local = "given";
	const localId = local || _id("localId");
	_html(`<label${_attr("for", localId)}>local</label>${_el_resume($scope0_id, "#label/4")}<input${_attr("id", localId)}>${_el_resume($scope0_id, "#input/5")}<button>toggle</button>${_el_resume($scope0_id, "#button/6")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		heading: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && heading,
		local
	}, "__tests__/template.marko", 0, {
		heading: "1:5",
		local: "4:6"
	}) : _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", heading, !_server_guard($scope0_reason, 0));
}, 1);
