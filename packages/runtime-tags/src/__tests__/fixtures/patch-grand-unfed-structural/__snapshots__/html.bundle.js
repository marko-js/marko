// tags/badge/index.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $setup$1 = [[], []];
_shells({
	b: "b;b%bD ;<!><!><p> </p>",
	b0: "b0,<em>on</em>"
});
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_html("<em>on</em>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["b0"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "b", input.text, 1, $scope0_reason, 1)}</p>`);
	_scope($scope0_id, {});
});

// tags/wrap/index.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<div class=wrap>${_w0}</div>`)($template)}`)() });
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=wrap>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	badge_default({ text: input.label });
	_patch_child_end();
	_html("</div>");
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.a,
		f: show
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.a, !_server_guard($scope0_reason, 0));
}, 1);
