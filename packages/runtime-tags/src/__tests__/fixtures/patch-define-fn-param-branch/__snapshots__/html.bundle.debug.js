// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Panel_content__walks);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<button>toggle</button>`)($Panel_content__template)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content("__tests__/template.marko_1*content", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0), $scope1_page = _page_render();
		_if(() => {
			if (isOpen()) {
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "#text/0", label, void 0, $scope1_reason, 1)}</em>`);
				_scope($scope2_id, { _: _write_if($scope1_reason, 1) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__isOpen, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
		$scope1_page ? _write_if($scope1_reason, 0) && _scope($scope1_id, { label: _unfilled_if($scope1_reason, 0) && label }, "__tests__/template.marko", "2:2", { label: "2:25" }) : _filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 0) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill1", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	_set_scope_reason(2 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Panel.content({
		isOpen: function() {
			return open;
		},
		label: input.label
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", open, 1);
	$scope0_page && _scope($scope0_id, {
		open,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
