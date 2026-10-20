// template.marko
const $Panel_content__walks = "D l%c";
const $Panel_content__template = "<span> </span><!><!>";
const $template = "<!><!><!><button id=t>toggle</button>";
const $walks = "b%b%b b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button id=t>toggle</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D%b%;<em><!><!></em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $open__closures = new Set();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		let n = 1;
		_html(`<span>${_text_resume($scope2_id, "#text/0", open ? "o" : "c")}</span>`);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_patch_text($scope3_id, "#text/0", label, void 0, $scope2_reason, 1)}${_patch_text($scope3_id, "#text/1", n, 2)}</em>`);
				_scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope2_id, "#text/1", 1, _write_guard($scope2_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 0);
		_patch_write($scope2_id, "PatchWrite:n", n, 1);
		_patch_init($scope2_id, "__tests__/template.marko_2_open#0:8/init", 1);
		$scope2_page ? _subscribe($open__closures, _scope($scope2_id, {
			label: _unfilled_if($scope2_reason, 0) && label,
			n: _unfilled_if($scope2_reason, 0) && n,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			label: "2:25",
			n: "3:8"
		}), "__tests__/template.marko_2_open#0:8/subscribe") : _filled_guard($scope2_reason, 1) && _client_guard($scope2_reason, 0) && _patch_value($scope2_id, "PatchValue:__tests__/template.marko_fill3", label, !_server_guard($scope2_reason, 1));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "#childScope/0", $scope0_id);
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: "y"
	});
	_html(`<button id=t>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:Panel", Panel, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: _unfilled_if($scope0_reason, 0) && input.label,
		open,
		Panel: _write_if($scope0_reason, 2) && Panel,
		Tag,
		"ClosureScopes:open/14": $open__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "10:8"
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", Tag, !_server_guard($scope0_reason, 2)));
}, 1);
