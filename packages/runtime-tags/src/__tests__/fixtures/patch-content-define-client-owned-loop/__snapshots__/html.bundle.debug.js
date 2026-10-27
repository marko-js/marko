// template.marko
const $List_content__walks = " b";
const $List_content__template = "<ul></ul>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>+</button>`)($List_content__template, $List_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($List_content__walks, $List_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($List_content__walks, $List_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button>+</button>`)($List_content__template, $List_content__template)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D%b%;<li><!><!></li>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_suffix = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	let count = 1;
	const List = { content: _content("__tests__/template.marko_1*content", ({ items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wi__items = _write_if($scope1_reason, 0);
		_html("<ul>");
		_for_of(items, (item) => {
			const $scope2_id = _scope_id();
			_html(`<li>${_patch_text($scope2_id, "#text/0", item, void 0, $scope1_reason, 0)}${_patch_text($scope2_id, "#text/1", input.suffix, 2, $scope0_reason, 0)}</li>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, _client_guard($scope0_reason, 0) ? "__tests__/template.marko_2_input_suffix#0:5/init" : "__tests__/template.marko_2_input_suffix#0:5/subscribe");
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_suffix__closures, _scope($scope2_id, { _: ($wi__input_suffix || $wi__items) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"), "__tests__/template.marko_2_input_suffix#0:5/subscribe");
		}, 0, $scope1_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_2*shell", $scope1_reason, 0);
		_html(`</ul>${_el_resume($scope1_id, "#ul/0")}`);
		$scope1_page && _scope($scope1_id, { _: ($wi__input_suffix || $wi__items) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	List.content({ items: _patch_live($childScope, count % 2 ? ["a"] : ["a", "b"], $scope0_id, "") });
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1", 1);
	List.content({ items: input.items });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_suffix: input.suffix,
		count,
		"ClosureScopes:input_suffix/8": $wi__input_suffix && $input_suffix__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_suffix: ["input.suffix"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
