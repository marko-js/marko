// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell __tests__/template.marko_1_input_label#0:6/init __tests__/template.marko_1_open#0:8/init __tests__/template.marko_1_#childScope#0/init;${/*@__PURE__*/ ((_w0) => `b0${_w0}&D l%c`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<b> </b><!><!>`)($Panel_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_label = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 2), $wg__isOpen = _write_guard($scope2_reason, 1), $wi__label = _write_if($scope2_reason, 2), $wi__isOpen__OR__label = _write_if($scope2_reason, 0);
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "#text/0", label, $wg__label)}</em>`);
				$wi__isOpen__OR__label && _scope($scope3_id, { _: $wi__label && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope2_id, "#text/0", _write_guard($scope2_reason, 0), $wg__isOpen, 0, 0, 1);
		const $return = label + (isOpen ? "Y" : "N");
		$wi__isOpen__OR__label && _scope($scope2_id, {
			isOpen: $wi__label && isOpen,
			label: _write_if($scope2_reason, 1) && label
		}, "__tests__/template.marko", "2:2", {
			isOpen: "2:17",
			label: "2:25"
		});
		return $return;
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			let ret = Panel.content({
				isOpen: true,
				label: input.label
			});
			_filled_guard($scope0_reason, 1) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill3", ret);
			_client_guard($scope0_reason, 1) && _var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_ret#4/var");
			_html(`<b>${_patch_text($scope1_id, "#text/2", ret, void 0, $scope0_reason, 1)}</b>`);
			if ($scope0_page) _if(() => {
				if (open) {
					const $scope4_id = _scope_id();
					_html(`<span>${_text_resume($scope4_id, "#text/0", ret, $wg__input_label)}</span>`);
					_scope($scope4_id, {}, "__tests__/template.marko", "11:4");
					return 0;
				}
			}, $scope1_id, "#text/3", 1, 1, 0, 0, 1);
			_scope($scope1_id, {
				ret,
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "8:2", { ret: "9:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:Panel", Panel, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		open,
		Panel: _write_if($scope0_reason, 2) && Panel,
		Tag
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "15:8"
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", Tag, !_server_guard($scope0_reason, 2)), _content_withhold(Tag));
}, 1);
