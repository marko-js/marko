// tags/panel.marko
const $template$1 = "<button class=count> </button><button class=open>open</button><!><!><!>";
const $walks$1 = " D l b%b%c";
const summarize = (data) => ({ n: data.items.length });
function rows(data, summary) {
	return data.items.map((id) => ({
		id,
		name: id.toUpperCase() + summary.n
	}));
}
const $setup$1 = [[], ["__tests__/tags/panel.marko_0"]];
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !__tests__/tags/panel.marko_0; D l b%b%;<button class=count> </button><button class=open>open</button><!><!><!>",
	"__tests__/tags/panel.marko_2*shell": "__tests__/tags/panel.marko_2*shell __tests__/tags/panel.marko_2_count#0:10/init;D%c%;<p><!>/<!></p>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const data = $global$1.data;
	const summary = summarize(data);
	const pending = rows(data, summary);
	let count = 0;
	let open = false;
	_html(`<button class=count>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}<button class=open>open</button>${_el_resume($scope0_id, "#button/2")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p class=summary>${_text_resume($scope1_id, "#text/0", JSON.stringify(summary), $scope0_page)}</p><p class=total>${_text_resume($scope1_id, "#text/1", pending.length, $scope0_page)}</p>`);
			_scope($scope1_id, {}, "__tests__/tags/panel.marko", "12:2");
			return 0;
		}
	}, $scope0_id, "#text/3");
	_for_of(pending, (row) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", row.name, void 0, 4, 0)}/${_text_resume($scope2_id, "#text/1", count, 2)}</p>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "16:2");
	}, "id", $scope0_id, "#text/4", 1, void 0, void 0, void 0, void 0, "__tests__/tags/panel.marko_2*shell");
	_fill_global_subscribe("__tests__/tags/panel.marko_0_$global_data#4", $scope0_id);
	_script($scope0_id, "__tests__/tags/panel.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill2", count, 1);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill3", open, 1);
	_scope($scope0_id, {
		summary,
		pending_length: pending?.length,
		count,
		open
	}, "__tests__/tags/panel.marko", 0, {
		summary: "6:8",
		pending_length: ["pending.length", "7:8"],
		count: "8:6",
		open: "9:6"
	}) || (_patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0", summary), _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill1", pending?.length));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	panel_default({});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
