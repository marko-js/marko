// tags/probe.marko
const $template = "<button>probe</button>";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; ;<button>probe</button>" });
var probe_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 5;
	const doubled = 10;
	_html(`<button>probe</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_patch_fill($scope0_id, "vb2", count, 1);
	_scope($scope0_id, {
		b: count,
		c: doubled
	});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "a", 0);
			probe_default({});
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
