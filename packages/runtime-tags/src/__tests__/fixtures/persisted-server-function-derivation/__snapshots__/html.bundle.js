// tags/panel.marko
const summarize = (data) => ({ n: data.items.length });
function rows(data, summary) {
	return data.items.map((id) => ({
		id,
		name: id.toUpperCase() + summary.n
	}));
}
const $template = "<button class=count> </button><button class=open>open</button><!><!><!>";
const $walks = " D l b%b%c";
_shells({
	b: "b !b2; D l b%b%;<button class=count> </button><button class=open>open</button><!><!><!>",
	b0: "b0 b5;D%c%;<p><!>/<!></p>"
});
var panel_default = _template_persisted("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const data = $global().data;
	const summary = summarize(data);
	const pending = rows(data, summary);
	let count = 0;
	let open = false;
	_html(`<button class=count>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}<button class=open>open</button>${_el_resume($scope0_id, "c")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "d");
	_for_of(pending, (row) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", row.name)}/${_text_resume($scope2_id, "b", count, 2)}</p>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, "id", $scope0_id, "e", 1, 1, $scope0_page, void 0, void 0, "b0");
	_global_subscribe("b1", $scope0_id);
	_script($scope0_id, "b2");
	_patch_value($scope0_id, "b2", count, 1);
	_patch_value($scope0_id, "b3", open, 1);
	$scope0_page ? _scope($scope0_id, {
		h: summary,
		k: pending?.length,
		l: count,
		m: open
	}) : (_patch_value($scope0_id, "b0", summary), _patch_value($scope0_id, "b1", pending?.length));
}, 0, 1);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `/${_w0}&b`)($walks), ((_w0) => `${_w0}<!>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	panel_default({});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [panel_default]);
