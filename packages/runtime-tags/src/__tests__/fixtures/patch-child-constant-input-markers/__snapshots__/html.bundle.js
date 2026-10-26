// tags/badge.marko
const $template = "<span> </span>";
const $walks = " D l";
const $setup$1 = [[], []];
_shells({ b: "b; D ;<span> </span>" });
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span${_patch_attr_class($scope0_id, "aa$class", ["badge", input.tone], $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 1)}</span>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1], ["b>", $setup$1], ["c>", $setup$1], ["d>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1, _w2, _w3) => `D/${_w0}&/${_w1}&/${_w2}&/${_w3}&%b D m`)($walks, $walks, $walks, $walks)};${((_w0, _w1, _w2, _w3) => `<main>${_w0}${_w1}${_w2}${_w3}<!><button> </button></main>`)($template, $template, $template, $template)}`)(),
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([[], []], ["b>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `D%c/${_w0}&l`)($walks)};${/*@__PURE__*/ ((_w0) => `<p><!> ${_w0}</p>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	badge_default({
		label: "New",
		tone: "info"
	});
	_set_scope_reason(0);
	const $childScope2 = _patch_child($scope0_id, "b");
	badge_default({
		label: "Sale",
		tone: "warn"
	});
	_set_scope_reason(0);
	const $childScope3 = _patch_child($scope0_id, "c");
	badge_default({
		label: "Hot",
		tone: "info"
	});
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope4 = _patch_child($scope0_id, "d");
	badge_default({
		label: input.status,
		tone: "info"
	});
	_for_of(input.items, (p) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "a", p.name, void 0, $scope0_reason, 1)} `);
		_set_scope_reason(0);
		const $childScope5 = _patch_child($scope1_id, "b");
		badge_default({
			label: "Item",
			tone: "info"
		});
		_html("</p>");
		$scope0_page && _scope($scope1_id, { b: _existing_scope($childScope5) });
	}, "id", $scope0_id, "e", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 1);
	_html(`<button>${_text_resume($scope0_id, "g", count)}</button>${_el_resume($scope0_id, "f")}</main>`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		l: count,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2),
		c: _existing_scope($childScope3),
		d: _existing_scope($childScope4)
	});
}, 1);
