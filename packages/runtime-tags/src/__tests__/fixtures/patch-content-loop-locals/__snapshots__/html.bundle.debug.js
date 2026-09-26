// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
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
	}, 0, $scope0_id, "#text/0", 1, 1, $sg__input_item, void 0, void 0, "__tests__/tags/list.marko_1*shell", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
}, 0, 1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& D l`)("b%c");
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_n#7/init;D l%;<em> </em><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `b/${_w0}& D l`)("b%c"), ((_w0) => `<!>${_w0}<button> </button>`)($template$1)),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D%;<b><!>!</b>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_show__closures = new Set();
	const $n__closures = new Set();
	let n = 0;
	_set_serialize_reason(_mask_group($scope0_reason, 1) << 1);
	let $item;
	forOf(input.labels, (label) => {
		$item = attrTags($item, { content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_filled_guard($scope0_reason, 1) && _patch_value($scope1_id, "__tests__/template.marko0", label);
			_html(`<em>${_text_resume($scope1_id, "#text/0", label + n)}</em>`);
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<b>${_patch_text($scope2_id, "#text/0", label, void 0, $scope0_reason, 1)}!</b>`);
					_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:8");
					return 0;
				}
			}, $scope1_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
			_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, {
				label,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "4:6", { label: "3:8" })));
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	list_default({ item: $item });
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		input_show: _source_if($scope0_reason, 1) && input.show,
		n,
		"ClosureScopes:input_show": $input_show__closures,
		"ClosureScopes:n": $n__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		n: "1:6"
	});
}, 1, () => [list_default]);
