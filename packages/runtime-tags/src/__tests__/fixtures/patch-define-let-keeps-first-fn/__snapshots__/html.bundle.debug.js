// template.marko
const $Card_content__walks = "D l";
const $Card_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($Card_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($Card_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko": `__tests__/template.marko;${((_w0) => `/${_w0}&%c`)($Card_content__walks)};${((_w0) => `${_w0}<!><!>`)($Card_content__template)}`,
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($Card_content__walks)};${$Card_content__template}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Card = { content: _content("__tests__/template.marko_2*content", ({ opts }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		let o = opts;
		_html(`<p>${_text_mark($scope2_id, "#text/0", o.fn(), 1, _client_guard($scope2_reason, 0) << 1, 0, 1)}</p>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason($uf__input_label << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Card.content({ opts: { fn() {
		return "root:" + input.label;
	} } });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_label << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 1);
			Card.content({ opts: { fn() {
				return "if:" + input.label;
			} } });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && input.label,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);
