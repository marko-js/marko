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
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D0${_w0}&%b l`)("b")};${((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template)}`)(),
	a1: "a1 a4;Db%;<p>big <!></p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $childScope = _peek_scope_id($scope0_id, "a", 0, $cg__input_n && 1);
	let double = doubler_default({ value: input.n });
	$cg__input_n && _var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	_if(() => {
		if (double > 4) {
			const $scope1_id = _scope_id();
			_html(`<p>big ${_text_resume($scope1_id, "a", count, 2)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		h: count,
		a: _existing_scope($childScope)
	});
}, 1);
