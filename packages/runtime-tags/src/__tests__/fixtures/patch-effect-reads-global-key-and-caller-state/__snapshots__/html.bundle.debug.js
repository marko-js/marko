// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko; ;<div></div>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_page = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2), $cg__input_page = _client_guard($scope0_reason, 1), $cg__input_n = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div></div>${_el_mark($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_page#3_input_n#4", 1, ($fg__input_page || $fg__input_n) && ($cg__input_page || $cg__input_n ? 2 : 1), (($fg__input_page ? " input_page" : "") + ($fg__input_n ? " input_n" : "")).slice(1), "__tests__/tags/child.marko_0_input_page#3_input_n#4/setup", $scope0_reason, 0) || _script($scope0_id, "__tests__/tags/child.marko_0_input_page#3_input_n#4_$global_user_name#7", 1, ($fg__input_page || $fg__input_n) && ($cg__input_page || $cg__input_n ? 2 : 1));
	_scope($scope0_id, {
		input_page: input.page,
		input_n: input.n
	}, "__tests__/tags/child.marko", 0, {
		input_page: ["input.page"],
		input_n: ["input.n"]
	}) || ($fg__input_page && _patch_write($scope0_id, "PatchMarkedWrite:input_page", input.page, !_server_guard($scope0_reason, 1)), $fg__input_n && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>go</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)(" b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)(" b")};${((_w0) => `${_w0}<button>go</button>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let page = "p";
	_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({
		page,
		n: input.n
	});
	_patch_child_end();
	_html(`<button>go</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		page,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { page: "1:6" });
}, 1);
