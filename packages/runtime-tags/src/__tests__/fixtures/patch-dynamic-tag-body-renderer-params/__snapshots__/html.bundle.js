// tags/host.marko
const $template = "<button class=flag>f</button><!><!><!>";
const $walks = " b%b%c";
_shells({
	b0: "b0,",
	b: "b !b5; b%b%;<button class=flag>f</button><!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 4);
	const $scope0_page = _page_render(), $wg__input_wrap__OR__input_native = _write_guard($scope0_reason, 1), $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let flag = false;
	_html(`<button class=flag>f</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", input.native ? "section" : input.wrap, {}, _content_resume("b0", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_html(`<i>${_patch_text($scope3_id, "a", input.label, void 0, $scope0_reason, 7)}</i>`);
				_unfilled_if($scope0_reason, 7) && _patch_init($scope3_id, _client_guard($scope0_reason, 7) ? "b2" : "b3");
				_subscribe(_unfilled_if($scope0_reason, 7) && $input_label__closures, _scope($scope3_id, { _: $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _scope_with_id($scope2_id) }));
			}, $scope2_id, ($scope) => $scope0_page ? [{ i: input.label }, { _: $scope($scope0_id) }] : []), 0, $wg__input_wrap__OR__input_native, void 0, 2, $scope0_reason, 1);
			_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "b4");
			$wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 5), void 0, void 0, void 0, ["b1"], $scope0_reason, 5);
	_script($scope0_id, "b5");
	_patch_value($scope0_id, "vb11", flag, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.wrap,
		h: _write_if($scope0_reason, 0) && input.native,
		i: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 7)) && input.label,
		j: flag,
		m: _write_if($scope0_reason, 7) && $input_label__closures
	}) : (_filled_guard($scope0_reason, 4) && (_client_guard($scope0_reason, 5) || _client_guard($scope0_reason, 6) ? _patch_value($scope0_id, "vb7", input.wrap) : _patch_value($scope0_id, "vb6", input.wrap, !_server_guard($scope0_reason, 4))), _filled_guard($scope0_reason, 6) && (_client_guard($scope0_reason, 4) || _client_guard($scope0_reason, 5)) && _patch_value($scope0_id, "vb8", input.native, !_server_guard($scope0_reason, 6)), _filled_guard($scope0_reason, 7) && (_client_guard($scope0_reason, 5) ? _patch_value($scope0_id, "vb9", input.label, !_server_guard($scope0_reason, 7)) : _content_withheld("b0") && _patch_value($scope0_id, "vb10", input.label)));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<main>${_w0}</main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 3) << 13 | _mask_group($scope0_reason, 4) << 15);
	const $childScope = _patch_child($scope0_id, "a");
	host_default({
		show: input.show,
		native: input.native,
		label: input.label,
		wrap: attrTag({ content: _content_resume("a1", ({ content }) => {
			const $scope1_reason = _scope_reason(), $wg__content = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			let open = true;
			_html(`<button class=toggle>t</button>${_el_resume($scope1_id, "a")}`);
			if ($scope0_page) _if(() => {
				{
					const $scope2_id = _scope_id();
					_dynamic_tag($scope2_id, "a", content, {}, 0, 0, $wg__content);
					_scope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "b");
			_script($scope1_id, "a0");
			_scope($scope1_id, {
				e: content,
				f: open
			});
		}, $scope0_id) })
	});
	_html("</main>");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
