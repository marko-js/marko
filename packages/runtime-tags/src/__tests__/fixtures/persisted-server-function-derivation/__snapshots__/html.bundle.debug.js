// tags/panel.marko
const summarize = (data) => ({ n: data.items.length });
function rows(data, summary) {
	return data.items.map((id) => ({
		id,
		name: id.toUpperCase() + summary.n
	}));
}
const $template$1 = "<button class=count> </button><button class=open>open</button><!><!><!>";
const $walks$1 = " D l b%b%c";
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !__tests__/tags/panel.marko_0; D l b%b%;<button class=count> </button><button class=open>open</button><!><!><!>",
	"__tests__/tags/panel.marko_2*shell": "__tests__/tags/panel.marko_2*shell __tests__/tags/panel.marko_2_count#11/init;D%c%;<p><!>/<!></p>"
});
var panel_default = _template_persisted("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const data = $global$1.data;
	const summary = summarize(data);
	const pending = rows(data, summary);
	let count = 0;
	let open = false;
	_html(`<button class=count>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}<button class=open>open</button>${_el_resume($scope0_id, "#button/2")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p class=summary>${_text_resume($scope1_id, "#text/0", JSON.stringify(summary))}</p><p class=total>${_text_resume($scope1_id, "#text/1", pending.length)}</p>`);
			_scope($scope1_id, {}, "__tests__/tags/panel.marko", "12:2");
			return 0;
		}
	}, $scope0_id, "#text/3");
	_for_of(pending, (row) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "#text/0", row.name)}/${_text_resume($scope2_id, "#text/1", count, 2)}</p>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "16:2");
	}, "id", $scope0_id, "#text/4", 1, 1, $scope0_page, void 0, void 0, "__tests__/tags/panel.marko_2*shell");
	_global_subscribe("__tests__/tags/panel.marko_0_$global_data#6/global", $scope0_id);
	_script($scope0_id, "__tests__/tags/panel.marko_0");
	_patch_value($scope0_id, "__tests__/tags/panel.marko2", count, 1);
	_patch_value($scope0_id, "__tests__/tags/panel.marko3", open, 1);
	$scope0_page ? _scope($scope0_id, {
		summary,
		pending_length: pending?.length,
		count,
		open
	}, "__tests__/tags/panel.marko", 0, {
		summary: "6:8",
		pending_length: ["pending.length", "7:8"],
		count: "8:6",
		open: "9:6"
	}) : (_patch_value($scope0_id, "__tests__/tags/panel.marko0", summary), _patch_value($scope0_id, "__tests__/tags/panel.marko1", pending?.length));
}, 0, 1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&b`)($walks$1), ((_w0) => `${_w0}<!>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	panel_default({});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [panel_default]);
