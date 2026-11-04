// tags/toggle.marko
const $template = "<div><button class=open>toggle</button><!></div>";
const $walks = "D b%l";
const $setup = [[], ["b1"]];
_shells({ b: "b !b1;D b%;<div><button class=open>toggle</button><!></div>" });
var toggle_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<div><button class=open>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_html("</div>");
	_script($scope0_id, "b1");
	$fg__input_content && _patch_render($scope0_id, "b0", "e");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a0: "a0",
	a: "a !a2;D%b D ;<main><!><button class=count> </button></main>",
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			toggle_default({ content: _content_resume("a0", () => {
				_scope_reason();
				_scope_id();
				_html("<em>static body</em>");
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_html(`<button class=count>${_text_mark($scope0_id, "c", count)}</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { g: count });
}, 1);
