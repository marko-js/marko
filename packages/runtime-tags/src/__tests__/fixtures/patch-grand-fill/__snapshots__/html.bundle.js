// tags/card/tags/badge/index.marko
const $template = "<em> </em>";
const $setup$1 = [[], []];
_shells({ c: "c;D ;<em> </em>" });
var badge_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.text, void 0, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/card/index.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `D l/${_w0}&`)("D l")};${((_w0) => `<h3> </h3>${_w0}`)($template)}`)() });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<h3>${_text_resume($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h3>`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "b", 0);
	badge_default({ text: input.subtitle });
	_patch_child_end();
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.title,
		f: input.subtitle,
		g: show
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", input.title, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va2", input.subtitle, !_server_guard($scope0_reason, 2)));
}, 1);
