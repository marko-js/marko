// tags/card/index.marko
const $template$1 = "<b> </b><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D l%;<b> </b><!><!>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</b>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko; ;<ul></ul>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_n__closures = new Set();
		_html("<li>");
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		card_default({
			title: item.t,
			content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", item.n, void 0, $scope0_reason, 0)}</em>`);
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_item_n#1:4/init");
				_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_n__closures, _scope($scope2_id, { _: $wi__input_items && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:10"));
			}, $scope1_id)
		});
		_patch_child_end();
		_html("</li>");
		_scope($scope1_id, {
			"ClosureScopes:item_n/5": $wi__input_items && _unfilled_if($scope0_reason, 0) && $for_content__item_n__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:4");
	}, 0, $scope0_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
