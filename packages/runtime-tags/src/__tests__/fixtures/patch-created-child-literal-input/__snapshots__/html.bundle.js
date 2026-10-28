// tags/demo-card.marko
const $template$1 = "<span class=title><!> <!></span>";
const $walks$1 = "D%c%l";
const $setup$1 = [[], []];
_shells({ b: "b;D%c%;<span class=title><!> <!></span>" });
var demo_card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=title>${_text_resume($scope0_id, "a", input.name, void 0, $scope0_reason, 0)} ${_text_resume($scope0_id, "b", input.progress, 2, $scope0_reason, 1)}</span>`);
	_scope($scope0_id, {});
});

// tags/page-b.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], ["c0"]], ["c>", $setup$1]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&`)($walks$1)};${((_w0) => `<button> </button>${_w0}`)($template$1)}`)() });
var page_b_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let progress = 0;
	_html(`<button>${_text_resume($scope0_id, "b", progress)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(8);
	const $childScope = _patch_child($scope0_id, "c", 0);
	demo_card_default({
		name: "Switch",
		progress
	});
	_patch_child_end();
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc1", progress, 1);
	_scope($scope0_id, {
		d: progress,
		c: _existing_scope($childScope)
	});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "a", 0);
			page_b_default({});
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
