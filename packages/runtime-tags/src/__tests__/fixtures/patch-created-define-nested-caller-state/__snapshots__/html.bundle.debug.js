// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Outer_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Outer_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Outer_content__template)}`)(),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	const Inner = { content: _content("__tests__/template.marko_1*content", ({ v, show }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wg__show = _write_guard($scope1_reason, 1);
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "#text/0", v, void 0, $scope1_reason, 0)}</em>`);
				_client_guard($scope1_reason, 0) && _patch_init($scope3_id, "__tests__/template.marko_3_v#1:3/init");
				$scope1_page && _scope($scope3_id, { _: _write_if($scope1_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__show, void 0, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope1_reason, 1);
		$scope1_page ? _write_if($scope1_reason, 1) && _scope($scope1_id, { v: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 0)) && v }, "__tests__/template.marko", "2:2", { v: "2:17" }) : _filled_guard($scope1_reason, 0) && _client_guard($scope1_reason, 1) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", v, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	const Outer = { content: _content("__tests__/template.marko_2*content", ({ v, show }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		_set_scope_reason(_mask_group($scope2_reason, 0) << 1 | _mask_group($scope2_reason, 1) << 3);
		const $childScope = _patch_child($scope2_id, "#childScope/0", 0);
		Inner.content({
			v,
			show
		});
		_patch_child_end();
		$scope2_page && _scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "7:2");
	}, $scope0_id) };
	_set_scope_reason(2 | _mask_group($scope0_reason, 0) << 3);
	const $childScope2 = _patch_child($scope0_id, "#childScope/0", 1);
	Outer.content({
		v: count,
		show: input.show
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
