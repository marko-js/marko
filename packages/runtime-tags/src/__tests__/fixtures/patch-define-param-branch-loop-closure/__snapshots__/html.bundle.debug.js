// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko": `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D%b%;<em><!><!></em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Panel = { content: _content("__tests__/template.marko_1*content", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $Panel_content__label__closures = new Set();
		const $scope1_reason = _scope_reason(), $cg__label = _client_guard($scope1_reason, 2), $wi__isOpen__OR__label = _write_if($scope1_reason, 0), $wg__isOpen = _write_guard($scope1_reason, 1), $fg__label = _filled_guard($scope1_reason, 2);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_for_of([1, 2], (x) => {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_mark($scope3_id, "#text/0", label, 1, $scope1_reason, 2)}${_text_mark($scope3_id, "#text/1", x, 2, 0, 0)}</em>`);
					$cg__label && _patch_render($scope3_id, "__tests__/template.marko_3_label#1:4/subscribe");
					_subscribe(_unfilled_if($scope1_reason, 2) && $Panel_content__label__closures, _scope($scope3_id, { _: $wi__isOpen__OR__label && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:6"), $cg__label && "__tests__/template.marko_3_label#1:4/subscribe");
				}, 0, $scope2_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_3*shell", 0, 0);
				_scope($scope2_id, { _: $wi__isOpen__OR__label && _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 1);
		$fg__label && _client_guard($scope1_reason, 1) && _patch_subscribers($scope1_id, "__tests__/template.marko_1_label#4/subscribers", "label");
		$wi__isOpen__OR__label && _scope($scope1_id, {
			label: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 2)) && label,
			"ClosureScopes:label/5": _write_if($scope1_reason, 2) && (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 1)) && $Panel_content__label__closures
		}, "__tests__/template.marko", "1:2", { label: "1:25" }) || $fg__label && _unfilled_if($scope1_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !_server_guard($scope1_reason, 2));
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Panel.content({
		isOpen: input.open,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
