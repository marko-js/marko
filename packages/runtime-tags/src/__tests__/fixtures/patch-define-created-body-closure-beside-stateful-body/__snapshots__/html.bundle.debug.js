// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell >#childScope/0>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_label = _server_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", ({ isOpen }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wg__isOpen = _write_guard($scope1_reason, 0);
		const label = input.label + "?";
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "#text/0", label, void 0, $scope0_reason, 1)}</em>`);
				_client_guard($scope0_reason, 1) && _patch_init($scope3_id, "__tests__/template.marko_3_label#1:4/init");
				$scope1_page && _scope($scope3_id, { _: $wi__input_label && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__isOpen, void 0, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope1_reason, 0);
		$scope1_page ? _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			label: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope0_reason, 1)) && label,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { label: "3:10" }), "__tests__/template.marko_1_input_label#0:5/subscribe", $wg__isOpen) : _filled_guard($scope0_reason, 1) && _client_guard($scope1_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill3", label, !$sg__input_label);
		$wg__isOpen || _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
			const $childScope = _patch_child($scope2_id, "#childScope/0", 0, void 0, $scope0_id);
			Panel.content({ isOpen: input.open });
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "__tests__/template.marko_2_input_open#0:7/init");
			$scope0_page && _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, { isOpen: !open }, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		input_open: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.open,
		open,
		Panel: _unfilled_if($scope0_reason, 4) && Panel,
		Tag,
		"ClosureScopes:input_label/14": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_open: ["input.open"],
		open: "1:6",
		Panel: "2:9",
		Tag: "11:8"
	}) : (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !$sg__input_label), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.open, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);
