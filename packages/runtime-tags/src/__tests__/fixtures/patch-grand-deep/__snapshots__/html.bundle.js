// tags/l1/tags/l2/tags/l3/index.marko
const $template$1 = "<em> </em>";
const $setup$2 = [[], []];
_shells({ d: "d;D ;<em> </em>" });
var l3_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.note, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/l1/tags/l2/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=n> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D l");
const $setup$1 = _shell_setup([[], ["c0"]], ["c>", $setup$2]);
_shells({ c: `c${_shell_marker($setup$1)};${((_w0) => ` D l/${_w0}&`)("D l")};${((_w0) => `<button class=n> </button>${_w0}`)($template$1)}` });
var l2_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	l3_default({ note: input.note });
	_patch_child_end();
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc1", n, 1);
	_scope($scope0_id, {
		g: n,
		c: _existing_scope($childScope)
	});
});

// tags/l1/index.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: `b${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${$template}` });
var l1_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	l2_default({ note: input.note });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button class=t>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_note = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			l1_default({ note: input.note });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=t>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_note && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.note,
		f: show
	}) || $fg__input_note && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 0));
}, 1);
