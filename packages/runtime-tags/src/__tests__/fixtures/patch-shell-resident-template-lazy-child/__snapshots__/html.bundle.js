// counter.marko
_shells({ a: "a;D ;<b> </b>" });
var counter_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</b>`);
	_scope($scope0_id, {});
});

// lazy.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$3 = [[], ["b0"]];
_shells({ b: "b !b0; D%c%;<button><!>:<!></button>" });
var lazy_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", count, 1);
	_scope($scope0_id, { g: count });
});

// other.marko
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "b", flush, "_b");
const $setup$2 = _shell_setup([[], []], ["c>", $setup$3]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup$2)};${((_w0) => `D l%b/${_w0}&b`)($walks$1)};${((_w0) => `<i> </i><!>${_w0}<!>`)($template$1)}`)() });
var other_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</i>`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "c", 0);
	$Lazy_withLoadAssets({ label: input.label });
	_patch_child_end();
	_scope($scope0_id, { c: _existing_scope($childScope) });
});

// tags/chooser.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["e0"]];
_shells({ e: "e !e0; b%;<button>toggle</button><!><!>" });
var chooser_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b");
	_script($scope0_id, "e0");
	_patch_fill($scope0_id, "ve3", show, 1);
	_scope($scope0_id, {
		e: input.Tag,
		f: input.label,
		g: show
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "ve1", input.Tag, !_server_guard($scope0_reason, 1)), _content_withhold(input.Tag), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "ve2", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label));
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ d: /*@__PURE__*/ (() => `d${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)() });
var template_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_which = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.which ? counter_default : other_default, { label: input.label }, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _patch_child($scope0_id, "b", 1);
	chooser_default({
		Tag: input.which ? counter_default : other_default,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.which,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label,
		b: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "vd0", input.which, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.which), _filled_guard($scope0_reason, 2) && $cg__input_which && _patch_fill($scope0_id, "vd1", input.label, !_server_guard($scope0_reason, 2)), $cg__input_which && _content_withhold(input.label));
}, 1);
