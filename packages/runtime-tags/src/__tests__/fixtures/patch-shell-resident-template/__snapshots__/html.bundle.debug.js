// counter.marko
const $template$3 = "<b> </b>";
const $walks$3 = "D l";
_shells({ "__tests__/counter.marko": "__tests__/counter.marko;D ;<b> </b>" });
var counter_default = _template("__tests__/counter.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</b>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/counter.marko", 0);
});

// other.marko
const $template$2 = "<i> </i>";
const $walks$2 = "D l";
_shells({ "__tests__/other.marko": "__tests__/other.marko;D ;<i> </i>" });
var other_default = _template("__tests__/other.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<i>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</i>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/other.marko", 0);
});

// tags/chooser.marko
const $template$1 = "<button>toggle</button><!><!>";
const $walks$1 = " b%c";
_shells({ "__tests__/tags/chooser.marko": "__tests__/tags/chooser.marko !__tests__/tags/chooser.marko_0; b%;<button>toggle</button><!><!>" });
var chooser_default = _template("__tests__/tags/chooser.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_Tag__OR__input_label = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.Tag, { label: input.label }, 0, 0, $wg__input_Tag__OR__input_label);
			_scope($scope1_id, {}, "__tests__/tags/chooser.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/chooser.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/tags/chooser.marko_fill2", show, 1);
	$scope0_page ? _scope($scope0_id, {
		input_Tag: input.Tag,
		input_label: input.label,
		show
	}, "__tests__/tags/chooser.marko", 0, {
		input_Tag: ["input.Tag"],
		input_label: ["input.label"],
		show: "1:6"
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/tags/chooser.marko_fill0", input.Tag), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/tags/chooser.marko_fill1", input.label));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !;${((_w0) => `b%b/${_w0}&b`)($walks$1)};${((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.which ? counter_default : other_default, { label: input.label }, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/1");
	chooser_default({
		Tag: input.which ? counter_default : other_default,
		label: input.label
	});
	_patch_write($scope0_id, "PatchWrite:input_which", input.which, 1);
	_patch_write($scope0_id, "PatchWrite:input_label", input.label, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/template.marko_0_input_which#4_input_label#5/init");
	$scope0_page ? _scope($scope0_id, {
		input_which: _write_if($scope0_reason, 2) && input.which,
		input_label: _write_if($scope0_reason, 1) && input.label,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.which), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.label));
}, 1);
