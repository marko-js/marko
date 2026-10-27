// counter.marko
const $template$4 = "<b> </b>";
const $walks$4 = "D l";
const $setup$4 = [[], []];
_shells({ "__tests__/counter.marko": "__tests__/counter.marko;D ;<b> </b>" });
var counter_default = _template("__tests__/counter.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</b>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/counter.marko", 0);
});

// lazy.marko
const $template$3 = "<button><!>:<!></button>";
const $walks$3 = " D%c%l";
const $setup$3 = [[], ["__tests__/lazy.marko_0"]];
_shells({ "__tests__/lazy.marko": "__tests__/lazy.marko !__tests__/lazy.marko_0; D%c%;<button><!>:<!></button>" });
var lazy_default = _template("__tests__/lazy.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/lazy.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/lazy.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/lazy.marko", 0, { count: "1:6" });
});

// other.marko
const $template$2 = /*@__PURE__*/ ((_w0) => `<i> </i><!>${_w0}<!>`)($template$3);
const $walks$2 = /*@__PURE__*/ ((_w0) => `D l%b/${_w0}&b`)($walks$3);
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "__tests__/lazy.marko", flush, "ready:__tests__/lazy.marko");
const $setup$2 = _shell_setup([[], []], ["#childScope/2>", $setup$3]);
_shells({ "__tests__/other.marko": /*@__PURE__*/ (() => `__tests__/other.marko${_shell_marker($setup$2)};${((_w0) => `D l%b/${_w0}&b`)($walks$3)};${((_w0) => `<i> </i><!>${_w0}<!>`)($template$3)}`)() });
var other_default = _template("__tests__/other.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<i>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</i>`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/2", 0);
	$Lazy_withLoadAssets({ label: input.label });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { "#childScope/2": _existing_scope($childScope) }, "__tests__/other.marko", 0);
});

// tags/chooser.marko
const $template$1 = "<button>toggle</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/chooser.marko_0"]];
_shells({ "__tests__/tags/chooser.marko": "__tests__/tags/chooser.marko !__tests__/tags/chooser.marko_0; b%;<button>toggle</button><!><!>" });
var chooser_default = _template("__tests__/tags/chooser.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_Tag__OR__input_label = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.Tag, { label: input.label }, 0, 0, 0, $wg__input_Tag__OR__input_label);
			$scope0_page && _scope($scope1_id, {}, "__tests__/tags/chooser.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/chooser.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/chooser.marko_fill2", show, 1);
	$scope0_page ? _scope($scope0_id, {
		input_Tag: input.Tag,
		input_label: input.label,
		show
	}, "__tests__/tags/chooser.marko", 0, {
		input_Tag: ["input.Tag"],
		input_label: ["input.label"],
		show: "1:6"
	}) : (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/chooser.marko_fill0", input.Tag, !_server_guard($scope0_reason, 1)), _content_withhold(input.Tag), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/chooser.marko_fill1", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks$1)};${((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_which = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.which ? counter_default : other_default, { label: input.label }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 1);
	chooser_default({
		Tag: input.which ? counter_default : other_default,
		label: input.label
	});
	_patch_child_end();
	$scope0_page ? _scope($scope0_id, {
		input_which: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.which,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.which, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.which), _filled_guard($scope0_reason, 2) && $cg__input_which && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 2)), $cg__input_which && _content_withhold(input.label));
}, 1);
