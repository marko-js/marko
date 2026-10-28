// tags/badge/index.marko
const $template = "<div><!><i> </i></div>";
const $walks = "D%bD m";
const $setup$1 = [[], []];
_shells({
	b: "b;D%bD ;<div><!><i> </i></div>",
	b1: "b1;D ;<b> </b>"
});
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.label) {
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "a", input.label, void 0, $scope0_reason, 0)}</b>`);
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["b1"], $scope0_reason, 0);
	_html(`<i>${_text_resume($scope0_id, "b", input.note, void 0, $scope0_reason, 1)}</i></div>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& D m`)($walks)};${((_w0) => `<main>${_w0}<button> </button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	badge_default({
		label: "hi",
		note: input.title
	});
	_patch_child_end();
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	});
}, 1);
