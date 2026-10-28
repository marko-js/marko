// tags/panel.marko
const $template = "<button class=count> </button><button class=open>open</button><!><!><!>";
const $walks = " D l b%b%c";
const summarize = (data) => ({ n: data.items.length });
function rows(data, summary) {
	return data.items.map((id) => ({
		id,
		name: id.toUpperCase() + summary.n
	}));
}
const $setup$1 = [[], ["b2"]];
_shells({
	b: "b !b2; D l b%b%;<button class=count> </button><button class=open>open</button><!><!><!>",
	b0: "b0 b8;D%c%;<p><!>/<!></p>"
});
var panel_default = _template("b", (input) => {
	_scope_reason();
	_page_render();
	const $scope0_id = _scope_id();
	const data = $global().data;
	const summary = summarize(data);
	const pending = rows(data, summary);
	let count = 0;
	let open = false;
	_html(`<button class=count>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}<button class=open>open</button>${_el_resume($scope0_id, "c")}`);
	_if(() => {}, $scope0_id, "d");
	_for_of(pending, (row) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", row.name, 1, 4, 0)}/${_text_resume($scope2_id, "b", count, 2)}</p>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, "id", $scope0_id, "e", 1, void 0, void 0, void 0, void 0, "b0");
	_fill_global_subscribe("b1", $scope0_id);
	_script($scope0_id, "b2");
	_patch_fill($scope0_id, "vb5", count, 1);
	_patch_fill($scope0_id, "vb6", open, 1);
	_scope($scope0_id, {
		g: summary,
		j: pending?.length,
		k: count,
		l: open
	}) || (_patch_fill($scope0_id, "vb3", summary), _patch_fill($scope0_id, "vb4", pending?.length));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
