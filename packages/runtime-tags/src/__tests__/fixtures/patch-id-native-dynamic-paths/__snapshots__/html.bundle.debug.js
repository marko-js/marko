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
	"__tests__/template.marko_2*shell": `__tests__/template.marko_2*shell;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&%c`)($Wrap_content__walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!><!>`)($Wrap_content__template)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_items = _updates_from($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const uid = _id("uid");
		_html(`<label${_attr("for", uid, $scope1_id, "#label/0", 0, 0)}>body</label>${_el_mark($scope1_id, "#label/0", 0)}<input${_attr("id", uid, $scope1_id, "#input/1", 0, 0)}>${_el_mark($scope1_id, "#input/1", 0)}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	const Wrap = { content: _content("__tests__/template.marko_3*content", ({ on, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__on__OR__content = _write_guard($scope3_reason, 0), $ui__on__OR__content = _unfilled_if($scope3_reason, 0), $ui__on = _unfilled_if($scope3_reason, 1), $fg__content = _filled_guard($scope3_reason, 2);
		const Tag = on ? "p" : "div";
		_dynamic_tag($scope3_id, "#text/0", Tag, { content }, 1, 0, 0, $wg__on__OR__content, $scope3_reason, 0);
		_patch_render($scope3_id, "__tests__/template.marko_3_content#4_Tag#5/setup", [$fg__content && "content", _filled_guard($scope3_reason, 1) && "Tag"], $scope3_reason, 0);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {
			content: ($ui__on || $ui__on__OR__content) && content,
			Tag: $ui__on__OR__content && Tag
		}, "__tests__/template.marko", "2:2", {
			content: "2:20",
			Tag: "3:10"
		}) || $fg__content && $ui__on && _patch_write($scope3_id, "PatchMarkedWrite:content", content, 1);
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const Tag = item.on ? "p" : "div";
		_dynamic_tag($scope2_id, "#text/0", Tag, {}, 10, _content("__tests__/template.marko_4*content", () => {
			const $scope4_id = _scope_id();
			const $scope4_reason = _scope_reason();
			const uid = _id("uid~1");
			_html(`<label${_attr("for", uid, $scope4_id, "#label/0", 0, 0)}>attr</label>${_el_mark($scope4_id, "#label/0", 0)}<input${_attr("id", uid, $scope4_id, "#input/1", 0, 0)}>${_el_mark($scope4_id, "#input/1", 0)}`);
			_scope($scope4_id, {}, "__tests__/template.marko", "8:6");
		}, $scope2_id, 0), 0, $wg__input_items, $scope0_reason, 0);
		_set_scope_reason($uf__input_items << 1 | $uf__input_items << 3);
		const $childScope = _peek_scope_id($scope2_id, "#childScope/1", 2);
		Wrap.content({
			on: item.on,
			content: Body
		});
		_patch_child_end();
		_dynamic_tag($scope2_id, "#text/2", Tag, [{ content: Body }], 25, 0, 1, $wg__input_items, $scope0_reason, 0);
		!$cg__input_items && _unfilled_if() && _patch_write($scope0_id, "PatchWrite:Body", Body);
		$cg__input_items && _patch_render($scope2_id, "__tests__/template.marko_2_Body#0:4_Tag#6/setup");
		_scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", $scope0_reason, 0);
	_scope($scope0_id, { Body: _unfilled_if($scope0_reason, 0) && Body }, "__tests__/template.marko", 0, { Body: "1:9" });
}, 1);
