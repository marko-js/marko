// tags/badge.marko
const $template$1 = "<span> </span>";
const $walks$1 = " D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/badge.marko": "__tests__/tags/badge.marko; D ;<span> </span>" });
var badge_default = _template("__tests__/tags/badge.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span${_patch_attr_class($scope0_id, "PatchAttr:#span/0 class", ["badge", input.tone], $scope0_reason, 0)}>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 1)}</span>${_el_resume($scope0_id, "#span/0", _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, {}, "__tests__/tags/badge.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `<main>${_w0}${_w1}${_w2}${_w3}<!><button> </button></main>`)($template$1, $template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `D/${_w0}&/${_w1}&/${_w2}&/${_w3}&%b D m`)($walks$1, $walks$1, $walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1], ["#childScope/2>", $setup$1], ["#childScope/3>", $setup$1]);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1, _w2, _w3) => `D/${_w0}&/${_w1}&/${_w2}&/${_w3}&%b D m`)($walks$1, $walks$1, $walks$1, $walks$1)};${((_w0, _w1, _w2, _w3) => `<main>${_w0}${_w1}${_w2}${_w3}<!><button> </button></main>`)($template$1, $template$1, $template$1, $template$1)}`)(),
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `D%c/${_w0}&l`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<p><!> ${_w0}</p>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	badge_default({
		label: "New",
		tone: "info"
	});
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1", 1);
	badge_default({
		label: "Sale",
		tone: "warn"
	});
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope3 = _patch_child($scope0_id, "#childScope/2", 2);
	badge_default({
		label: "Hot",
		tone: "info"
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope4 = _patch_child($scope0_id, "#childScope/3", 3);
	badge_default({
		label: input.status,
		tone: "info"
	});
	_patch_child_end();
	_for_of(input.items, (p) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "#text/0", p.name, void 0, $scope0_reason, 1)} `);
		_set_scope_reason(0);
		const $childScope5 = _patch_child($scope1_id, "#childScope/1", 4);
		badge_default({
			label: "Item",
			tone: "info"
		});
		_patch_child_end();
		_html("</p>");
		_scope($scope1_id, { "#childScope/1": _existing_scope($childScope5) }, "__tests__/template.marko", "7:4");
	}, "id", $scope0_id, "#text/4", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/6", count)}</button>${_el_resume($scope0_id, "#button/5")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2),
		"#childScope/2": _existing_scope($childScope3),
		"#childScope/3": _existing_scope($childScope4)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
