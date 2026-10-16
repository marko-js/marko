// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Show_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Show_content__walks);
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content __tests__/template.marko_1_count#0:5/init;${_w0};${_w1}`)($Show_content__walks, $Show_content__template),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Show_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Show_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	const Show = { content: _content_elide("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__value = _write_guard($scope1_reason, 0), $scope1_page = _page_render();
		if ($scope0_page) _if(() => {
			if (count > 0 && value) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", value, $wg__value)}</p>`);
				_scope($scope2_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
		$scope1_page ? _subscribe($count__closures, _scope($scope1_id, {
			value,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { value: "2:16" }), "__tests__/template.marko_1_count#0:5/subscribe") : _filled_guard($scope1_reason, 0) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill1", value, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Show.content({ value: input.label });
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, {
		count,
		"ClosureScopes:count/6": $count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
