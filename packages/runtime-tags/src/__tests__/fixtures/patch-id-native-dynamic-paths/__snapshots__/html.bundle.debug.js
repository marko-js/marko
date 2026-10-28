// template.marko
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content; b ;<label>attr</label><input>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; b ;<label>body</label><input>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&%c`)($Wrap_content__walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!><!>`)($Wrap_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const uid = _id("uid");
		_html(`<label${_attr("for", uid, $scope1_id, "PatchAttr:#label/0 for", 0, 0)}>body</label>${_el_resume($scope1_id, "#label/0", 0)}<input${_attr("id", uid, $scope1_id, "PatchAttr:#input/1 id", 0, 0)}>${_el_resume($scope1_id, "#input/1", 0)}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	const Wrap = { content: _content("__tests__/template.marko_3*content", ({ on, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__on__OR__content = _write_guard($scope3_reason, 0), $cg__on = _client_guard($scope3_reason, 1), $cg__content = _client_guard($scope3_reason, 2);
		const Tag = on ? "p" : "div";
		_dynamic_tag($scope3_id, "#text/0", Tag, { content }, 1, 0, 0, $wg__on__OR__content, $scope3_reason, 0);
		$cg__on && _patch_write($scope3_id, "PatchMarkedWrite:content", content, !(_filled_guard($scope3_reason, 2) && $cg__on));
		$cg__content && _patch_write($scope3_id, "PatchMarkedWrite:Tag", Tag, !(_filled_guard($scope3_reason, 1) && $cg__content));
		_patch_join_init($scope3_id, "__tests__/template.marko_3_content#4_Tag#5/init", $scope3_reason, 0, _filled_guard($scope3_reason, 2) && "content", _filled_guard($scope3_reason, 1) && "Tag");
		_write_if($scope3_reason, 0) && _scope($scope3_id, {
			content: (_unfilled_if($scope3_reason, 1) || _unfilled_if($scope3_reason, 0)) && content,
			Tag: (_unfilled_if($scope3_reason, 2) || _unfilled_if($scope3_reason, 0)) && Tag
		}, "__tests__/template.marko", "2:2", {
			content: "2:20",
			Tag: "3:10"
		});
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const Tag = item.on ? "p" : "div";
		_dynamic_tag($scope2_id, "#text/0", Tag, { content: attrTag({ content: _content("__tests__/template.marko_4*content", () => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			const uid = _id("uid~1");
			_html(`<label${_attr("for", uid, $scope4_id, "PatchAttr:#label/0 for", 0, 0)}>attr</label>${_el_resume($scope4_id, "#label/0", 0)}<input${_attr("id", uid, $scope4_id, "PatchAttr:#input/1 id", 0, 0)}>${_el_resume($scope4_id, "#input/1", 0)}`);
			_scope($scope4_id, {}, "__tests__/template.marko", "8:12");
		}, $scope2_id, 1) }) }, 9, 0, 0, $wg__input_items, $scope0_reason, 0);
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
		const $childScope = _peek_scope_id($scope2_id, "#childScope/1", 2);
		Wrap.content({
			on: item.on,
			content: Body
		});
		_patch_child_end();
		_dynamic_tag($scope2_id, "#text/2", Tag, [{ content: Body }], 25, 0, 1, $wg__input_items, $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_Body#0:4_Tag#6/init");
		_scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", $scope0_reason, 0);
	_scope($scope0_id, { Body: _unfilled_if($scope0_reason, 0) && Body }, "__tests__/template.marko", 0, { Body: "1:9" });
}, 1);
