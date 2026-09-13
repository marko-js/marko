// page.marko
const ITEMS = ["a", "b"];
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/page.marko": "__tests__/page.marko;b%;<!><!><!>",
	"__tests__/page.marko_1*shell": "__tests__/page.marko_1*shell;D l%;<span> </span><!><!>",
	"__tests__/page.marko_2*shell": "__tests__/page.marko_2*shell,<p>last</p>"
});
var page_default = _template_persisted("__tests__/page.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(ITEMS, (m) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_patch_text($scope1_id, "#text/0", m)}</span>`);
		_if(() => {
			if (m === "b") {
				const $scope2_id = _scope_id();
				_html("<p>last</p>");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, 0, 0, void 0, void 0, ["__tests__/page.marko_2*shell"]);
		_scope($scope1_id, {}, "__tests__/page.marko", "2:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 0, void 0, void 0, "__tests__/page.marko_1*shell", 0, 0);
}, 0, 0);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			page_default({});
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, () => [page_default]);
