// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;b%bD ;<!><!><span> </span>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", (attrs) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__attrs_isOpen = _write_guard($scope1_reason, 1);
		_if(() => {
			if (attrs.isOpen) {
				const $scope3_id = _scope_id();
				_for_of(attrs.item, (it) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_resume($scope4_id, "#text/0", it.label, 1, $scope1_reason, 2)}</em>`);
					_scope($scope4_id, {}, "__tests__/template.marko", "4:6");
				}, 0, $scope3_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_4*shell", $scope1_reason, 2);
				_html(`<span>${_text_resume($scope3_id, "#text/1", Object.keys(attrs).length, 1, $scope1_reason, 0)}</span>`);
				_scope($scope3_id, { _: _write_if($scope1_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__attrs_isOpen, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope1_reason, 1);
		_client_guard($scope1_reason, 1) && _patch_write($scope1_id, "PatchWrite:attrs_item", attrs?.item, 1);
		_write_if($scope1_reason, 1) && _scope($scope1_id, { attrs_item: _unfilled_if($scope1_reason, 1) && attrs?.item }, "__tests__/template.marko", "2:2", { attrs_item: ["attrs.item", "2:15"] });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			let $item;
			if (true) {
				$item = attrTag({ label: "x" });
			}
			const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
			Panel.content({
				isOpen: true,
				item: $item
			});
			_patch_child_end();
			_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "10:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		item: attrTag({ label: input.label + "!" })
	}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		open,
		Panel: _unfilled_if($scope0_reason, 1) && Panel,
		Tag
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "17:8"
	}) || (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", Tag, !_server_guard($scope0_reason, 1)), _content_withhold(Tag));
}, 1);
