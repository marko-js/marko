// tags/child.marko
const $template = "<div></div>";
const $setup$1 = [[], []];
_shells({ b: "b; ;<div></div>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_page = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2), $cg__input_page = _client_guard($scope0_reason, 1), $cg__input_n = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$global();
	_html(`<div></div>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b1", 1, ($fg__input_page || $fg__input_n) && ($cg__input_page || $cg__input_n ? 2 : 1), [$fg__input_page && "d", $fg__input_n && "e"], "b2", $scope0_reason, 0) || _script($scope0_id, "b0", 1, ($fg__input_page || $fg__input_n) && ($cg__input_page || $cg__input_n ? 2 : 1), [$fg__input_page && "d", $fg__input_n && "e"]);
	_scope($scope0_id, {
		d: input.page,
		e: input.n
	}) || ($fg__input_page && _patch_write($scope0_id, "xd", input.page, !_server_guard($scope0_reason, 1)), $fg__input_n && _patch_write($scope0_id, "xe", input.n, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)(" b")};${((_w0) => `${_w0}<button>go</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let page = "p";
	_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		page,
		n: input.n
	});
	_patch_child_end();
	_html(`<button>go</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: page,
		a: _existing_scope($childScope)
	});
}, 1);
