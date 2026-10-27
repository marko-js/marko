// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Panel_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<button>toggle</button>`)($Panel_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $open__closures = new Set();
	let open = false;
	const Panel = { content: _content("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0);
		if ($scope0_page) _if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", label, $wg__label)}</em>`);
				_scope($scope2_id, {}, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
		_subscribe($open__closures, _scope($scope1_id, {
			label,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { label: "2:17" }), "__tests__/template.marko_1_open#0:5/subscribe") || _filled_guard($scope1_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", label, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	Panel.content({ label: input.label });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		open,
		"ClosureScopes:open/6": $open__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
