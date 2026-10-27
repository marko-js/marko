// tags/doubler/index.marko
const $template = "<span>x2</span>";
const $setup$1 = [[], []];
_shells({ b: "b,<span>x2</span>" });
var doubler_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	return double;
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D0${_w0}&%b l`)("b")};${((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "a", 0, 1);
	let double = doubler_default({ value: count });
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	if ($scope0_page) _if(() => {
		if (double > 2) {
			const $scope1_id = _scope_id();
			_html("<p>big</p>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: count,
		a: _existing_scope($childScope)
	});
}, 1);
