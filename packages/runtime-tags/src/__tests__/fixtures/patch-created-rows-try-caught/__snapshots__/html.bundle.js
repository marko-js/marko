// tags/thrower.marko
_shells({ c: "c;b%;<!><!><!>" });
var thrower_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", (() => {
		throw new Error("probe");
	})(), {}, 2, 0, 0, 0, 0, 0);
});

// tags/outer.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["b2"]];
_shells({ b: "b !b2; b%;<button>x</button><!><!>" });
var outer_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [1];
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			_scope_id();
			_patch_child(0);
			thrower_default({});
			_patch_child_end();
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("error");
		}, 0, "b0", "b1");
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b");
	_script($scope0_id, "b2");
	_patch_fill($scope0_id, "vb3", rows, 1);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%;<h1>Rows whose try catches</h1><!><!>",
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<h1>Rows whose try catches</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({});
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a0"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
