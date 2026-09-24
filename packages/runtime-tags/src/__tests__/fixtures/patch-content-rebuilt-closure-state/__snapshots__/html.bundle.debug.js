// tags/list.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
_shells({
	"__tests__/tags/list.marko": "__tests__/tags/list.marko;b%;<!><!><!>",
	"__tests__/tags/list.marko_1*shell": "__tests__/tags/list.marko_1*shell;b%;<!><!><!>"
});
var list_default = _template_patch("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		const $tag = item.content;
		_dynamic_tag($scope1_id, "#text/0", $tag, {}, 0, 0, $sg__input_item, _patch_dynamic_tag($scope1_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 0));
		$scope0_page && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", 1, $sg__input_item, $sg__input_item, void 0, void 0, "__tests__/tags/list.marko_1*shell", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
}, 0, 1);

// tags/child.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>add</button>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
_shells({
	"__tests__/tags/child.marko_1*content": "__tests__/tags/child.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/child.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/child.marko !__tests__/tags/child.marko_0;${_w0};${_w1}`)(((_w0) => ` b/${_w0}&b`)("b%c"), ((_w0) => `<button>add</button>${_w0}<!>`)($template$2)),
	"__tests__/tags/child.marko_2*shell": "__tests__/tags/child.marko_2*shell,<span>shown</span>"
});
var child_default = _template_patch("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_show__closures = new Set();
	let items = [1, 2];
	_html(`<button>add</button>${_el_resume($scope0_id, "#button/0")}`);
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content_elide("__tests__/tags/child.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html("<span>shown</span>");
					$scope0_page && _scope($scope2_id, {}, "__tests__/tags/child.marko", "5:13");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/tags/child.marko_2*shell"], $scope0_reason, 0);
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "5:6"));
			$sg__input_show || _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render(list_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "#childScope/1", $childScope);
		list_default({ item: $item });
	}
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_value($scope0_id, "__tests__/tags/child.marko1", items, 1);
	$scope0_page ? _scope($scope0_id, {
		input_show: input.show,
		items,
		"ClosureScopes:input_show": $input_show__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/tags/child.marko", 0, {
		input_show: ["input.show"],
		items: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/tags/child.marko0", input.show);
}, 0, () => [list_default]);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&b`)($walks$1), ((_w0) => `${_w0}<!>`)($template$1)) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	child_default({ show: input.show });
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [child_default]);
