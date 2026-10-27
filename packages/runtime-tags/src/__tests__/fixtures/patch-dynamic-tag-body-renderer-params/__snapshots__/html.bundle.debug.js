// tags/host.marko
const $template$1 = "<button class=flag>f</button><!><!><!>";
const $walks$1 = " b%b%c";
const $setup$1 = [[], ["__tests__/tags/host.marko_0"]];
_shells({
	"__tests__/tags/host.marko_3*content": "__tests__/tags/host.marko_3*content",
	"__tests__/tags/host.marko": "__tests__/tags/host.marko !__tests__/tags/host.marko_0; b%b%;<button class=flag>f</button><!><!><!>",
	"__tests__/tags/host.marko_2*shell": "__tests__/tags/host.marko_2*shell;b%;<!><!><!>"
});
var host_default = _template("__tests__/tags/host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_wrap = _write_guard($scope0_reason, 4), $scope0_page = _page_render(), $wg__input_wrap__OR__input_native = _write_guard($scope0_reason, 1), $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label = _write_if($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let flag = false;
	_html(`<button class=flag>f</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (flag) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.wrap, {}, 0, 0, 0, $wg__input_wrap);
			_scope($scope1_id, {}, "__tests__/tags/host.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "#text/0", input.native ? "section" : input.wrap, {}, 10, _content_resume("__tests__/tags/host.marko_3*content", () => {
				const $scope3_id = _scope_id();
				const $scope3_reason = _scope_reason();
				_html(`<i>${_patch_text($scope3_id, "#text/0", input.label, void 0, $scope0_reason, 7)}</i>`);
				_unfilled_if($scope0_reason, 7) && _patch_init($scope3_id, _client_guard($scope0_reason, 7) ? "__tests__/tags/host.marko_3_input_label#0:8/init" : "__tests__/tags/host.marko_3_input_label#0:8/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 7) && $input_label__closures, _scope($scope3_id, { _: $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _scope_with_id($scope2_id) }, "__tests__/tags/host.marko", "5:6"));
			}, $scope2_id, ($scope) => $scope0_page ? [{ input_label: input.label }, { _: $scope($scope0_id) }] : []), 0, $wg__input_wrap__OR__input_native, $scope0_reason, 1);
			_patch_join_init($scope2_id, "__tests__/tags/host.marko_2_input_wrap#0:5_input_native#0:7/init", $scope0_reason, 1, _filled_guard($scope0_reason, 4) && ">input_wrap", _filled_guard($scope0_reason, 6) && ">input_native");
			$wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/host.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 5), void 0, void 0, void 0, ["__tests__/tags/host.marko_2*shell"], $scope0_reason, 5);
	_script($scope0_id, "__tests__/tags/host.marko_0");
	_filled_guard($scope0_reason, 6) && $cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/host.marko_fill1/unpatched", input.native) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_native", input.native, !(_filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 4)));
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/host.marko_fill3", flag, 1);
	_scope($scope0_id, {
		input_wrap: input.wrap,
		input_native: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.native,
		input_label: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 7)) && input.label,
		flag,
		"ClosureScopes:input_label/12": _write_if($scope0_reason, 7) && $input_label__closures
	}, "__tests__/tags/host.marko", 0, {
		input_wrap: ["input.wrap"],
		input_native: ["input.native"],
		input_label: ["input.label"],
		flag: "1:6"
	}) || (_filled_guard($scope0_reason, 4) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/host.marko_fill0/unpatched", input.wrap) : _patch_fill($scope0_id, "PatchFill:__tests__/tags/host.marko_fill0", input.wrap, !_server_guard($scope0_reason, 4))), _content_withhold(input.wrap), _filled_guard($scope0_reason, 7) && _content_withheld("__tests__/tags/host.marko_3*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/host.marko_fill2", input.label, !_server_guard($scope0_reason, 7)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks$1)};${((_w0) => `<main>${_w0}</main>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 3) << 13 | _mask_group($scope0_reason, 4) << 15);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 1);
	host_default({
		show: input.show,
		native: input.native,
		label: input.label,
		wrap: attrTag({ content: _content_resume("__tests__/template.marko_1*content", ({ content }) => {
			const $scope1_reason = _scope_reason(), $wg__content = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_content_withhold(content), _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", content);
			let open = true;
			_html(`<button class=toggle>t</button>${_el_resume($scope1_id, "#button/0")}`);
			if ($scope0_page) _if(() => {
				if (open) {
					const $scope2_id = _scope_id();
					_dynamic_tag($scope2_id, "#text/0", content, {}, 0, 0, 0, $wg__content);
					_scope($scope2_id, {}, "__tests__/template.marko", "6:8");
					return 0;
				}
			}, $scope1_id, "#text/1");
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", open, 1);
			_scope($scope1_id, {
				content,
				open
			}, "__tests__/template.marko", "3:6", {
				content: "3:14",
				open: "4:12"
			});
		}, $scope0_id) })
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
