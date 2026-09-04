// tags/widget/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/widget/index.marko_2*content": "__tests__/tags/widget/index.marko_2*content,<em>bad</em>",
	"__tests__/tags/widget/index.marko_1*content": "__tests__/tags/widget/index.marko_1*content,<em>ok</em>",
	"__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko;b%;<!><!><!>"
});
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/tags/widget/index.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html("<em>ok</em>");
	}, $scope0_id), { catch: attrTag({ content: _content_record("__tests__/tags/widget/index.marko_2*content", $scope0_id) }) });
}, 0, 0);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			widget_default({});
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1, () => [widget_default]);
