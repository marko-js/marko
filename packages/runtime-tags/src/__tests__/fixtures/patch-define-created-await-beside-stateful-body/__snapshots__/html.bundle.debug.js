// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
_shells({
	"__tests__/template.marko_2*content": /*@__PURE__*/ (() => `__tests__/template.marko_2*content __tests__/template.marko_2_input_label#0:7/init __tests__/template.marko_2_#childScope#0/init __tests__/template.marko_2_#childScope#1/init;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)(),
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_1_#text#0/await": /*@__PURE__*/ (() => `__tests__/template.marko_1_#text#0/await __tests__/template.marko_2_input_label#0:7/init __tests__/template.marko_2_#childScope#0/init __tests__/template.marko_2_#childScope#1/init;${((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)(),
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_show__OR__input_promise__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_3*content", ({ isOpen, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__label = _write_guard($scope3_reason, 2), $wg__isOpen = _write_guard($scope3_reason, 1);
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "#text/0", label, $wg__label)}</em>`);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope3_id, "#text/0", _write_guard($scope3_reason, 0), $wg__isOpen, 0, 0, 1);
		_write_if($scope3_reason, 1) && _scope($scope3_id, { label }, "__tests__/template.marko", "2:2", { label: "2:25" });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_filled_guard($scope0_reason, 2) && _patch_value($scope2_id, "PatchValue:__tests__/template.marko_fill4", value);
				_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 5);
				const $childScope = _patch_child($scope2_id, "#childScope/0");
				Panel.content({
					isOpen: true,
					label: value
				});
				_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 3) << 5);
				const $childScope2 = _patch_child($scope2_id, "#childScope/1");
				Panel.content({
					isOpen: true,
					label: input.label
				});
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					_: $wi__input_show__OR__input_promise__OR__input_label && _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope),
					"#childScope/1": _existing_scope($childScope2)
				}, "__tests__/template.marko", "8:4"), "__tests__/template.marko_2_input_label#0:7/subscribe");
			}, 1, "__tests__/template.marko_2*content");
			$wi__input_show__OR__input_promise__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:Panel", Panel, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_promise: _write_if($scope0_reason, 1) && input.promise,
		input_label: input.label,
		open,
		Panel: _write_if($scope0_reason, 4) && Panel,
		Tag,
		"ClosureScopes:input_label/15": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_promise: ["input.promise"],
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "13:8"
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.promise, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill3", Tag, !_server_guard($scope0_reason, 4)));
}, 1);
