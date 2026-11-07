// tags/host.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/host.marko_2*content": "__tests__/tags/host.marko_2*content;D%c%;<i><!>:<!></i>",
	"__tests__/tags/host.marko": "__tests__/tags/host.marko;b%;<!><!><!>",
	"__tests__/tags/host.marko_1*shell": "__tests__/tags/host.marko_1*shell;b%;<!><!><!>"
});
var host_default = _template("__tests__/tags/host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_wrap__OR__input_items = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_wrap__OR__input_items__OR__input_label = _write_if($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 5), $fg__input_wrap = _filled_guard($scope0_reason, 6), $fg__input_items = _filled_guard($scope0_reason, 7), $cg__input_show = _client_guard($scope0_reason, 5), $fg__input_label = _filled_guard($scope0_reason, 8), $cg__input_show__OR__input_wrap__OR__input_items = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let $item;
			forOf(input.items, (entry) => {
				$item = attrTags($item, { content: _content_resume("__tests__/tags/host.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_html(`<i>${_text_mark($scope2_id, "#text/0", entry.text, 1, 4, 0)}:${_text_mark($scope2_id, "#text/1", input.label, 2, $scope0_reason, 8)}</i>`);
					_unfilled_if($scope0_reason, 8) && _patch_subscribe($scope2_id, "__tests__/tags/host.marko_2_input_label#0:6/subscribe", _client_guard($scope0_reason, 8));
					_subscribe(_unfilled_if($scope0_reason, 8) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_wrap__OR__input_items__OR__input_label && _scope_with_id($scope1_id) }, "__tests__/tags/host.marko", "4:8"));
				}, $scope1_id, ($scope) => $scope0_page ? [
					{ entry_text: entry?.text },
					{ input_label: input.label },
					{ _: $scope($scope0_id) }
				] : [{ entry_text: entry?.text }]) });
			});
			_dynamic_tag($scope1_id, "#text/0", input.wrap, { item: $item }, 1, 0, 0, $wg__input_wrap__OR__input_items, $scope0_reason, 2, 0, 6, void 0, 0, "__tests__/tags/host.marko_2*content");
			_patch_render($scope1_id, "__tests__/tags/host.marko_1_input_wrap#0:4_input_items#0:5/setup", [_filled_guard($scope0_reason, 6) && ">input_wrap", _filled_guard($scope0_reason, 7) && ">input_items"], $scope0_reason, 2);
			$wi__input_show__OR__input_wrap__OR__input_items__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/host.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/host.marko_1*shell"], $scope0_reason, 5);
	$fg__input_wrap && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/host.marko_1_input_wrap#0:4/setup", "input_wrap");
	$fg__input_items && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/host.marko_1_input_items#0:5/setup", "input_items");
	$fg__input_label && (_client_branch_if("__tests__/tags/host.marko_2*content", $scope0_id) || $cg__input_show__OR__input_wrap__OR__input_items) && _patch_subscribers($scope0_id, "__tests__/tags/host.marko_0_input_label#6/subscribers", "input_label");
	_scope($scope0_id, {
		input_wrap: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.wrap,
		input_items: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.items,
		input_label: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 8)) && input.label,
		"ClosureScopes:input_label/9": _write_if($scope0_reason, 8) && $input_label__closures
	}, "__tests__/tags/host.marko", 0, {
		input_wrap: ["input.wrap"],
		input_items: ["input.items"],
		input_label: ["input.label"]
	}) || ($fg__input_wrap && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_wrap", input.wrap, !_server_guard($scope0_reason, 6)), $fg__input_items && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_items", input.items, !_server_guard($scope0_reason, 7)), $fg__input_label && (_client_branch_if("__tests__/tags/host.marko_2*content", $scope0_id) || $cg__input_show__OR__input_wrap__OR__input_items) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 8)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)("b%c")};${((_w0) => `<main>${_w0}</main>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 3) << 5 | _updates_from($scope0_reason, 0) << 7 | _updates_from($scope0_reason, 1) << 9 | _updates_from($scope0_reason, 2) << 11 | _updates_from($scope0_reason, 3) << 15 | _updates_from($scope0_reason, 4) << 17);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 1);
	host_default({
		show: input.show,
		items: input.items,
		label: input.label,
		wrap: attrTag({ content: _content_resume("__tests__/template.marko_1*content", ({ item }) => {
			const $scope1_reason = _scope_reason(), $wg__item = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_patch_write($scope1_id, "PatchMarkedWrite:item", item);
			let open = true;
			_html(`<button class=toggle>toggle</button>${_el_mark($scope1_id, "#button/0")}`);
			_if(() => {
				if (open) {
					const $scope2_id = _scope_id();
					_for_of(item, (entry) => {
						const $scope3_id = _scope_id();
						_dynamic_tag($scope3_id, "#text/0", entry.content, {}, 0, 0, 0, $wg__item);
						_write_if($scope1_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "6:17");
					}, 0, $scope2_id, "#text/0", $wg__item, $wg__item);
					_scope($scope2_id, {}, "__tests__/template.marko", "6:8");
					return 0;
				}
			}, $scope1_id, "#text/1");
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_render($scope1_id, "__tests__/template.marko_2_item#1:4/setup", "item");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", open, 1);
			_scope($scope1_id, {
				item,
				open
			}, "__tests__/template.marko", "3:6", {
				item: "3:14",
				open: "4:12"
			});
		}, $scope0_id, void 0, 1) })
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
