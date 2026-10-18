// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2,",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_card__OR__input_tag = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Card = { content: _content_resume("__tests__/template.marko_2*content", ({ label, content }) => {
		const $scope2_id = _scope_id();
		_content_withhold(content), _patch_value($scope2_id, "PatchValue:__tests__/template.marko_fill1", content);
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 0);
		let open = true;
		_html(`<button class=toggle>t</button>${_el_resume($scope2_id, "#button/0")}<p>${_patch_text($scope2_id, "#text/1", label)}`);
		if ($scope0_page) _if(() => {
			if (open) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", content, {}, 0, 0, $wg__content);
				_scope($scope3_id, {}, "__tests__/template.marko", "4:15");
				return 0;
			}
		}, $scope2_id, "#text/2");
		_html("</p>");
		_script($scope2_id, "__tests__/template.marko_2");
		_patch_value($scope2_id, "PatchValue:__tests__/template.marko_fill2", open, 1);
		_scope($scope2_id, {
			content,
			open
		}, "__tests__/template.marko", "1:2", {
			content: "1:23",
			open: "2:8"
		});
	}, $scope0_id) };
	const Label = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.label, void 0, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2"));
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.card ? Card : "span", {
		label: input.tag,
		content: Label
	}, 0, 0, $wg__input_card__OR__input_tag, void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "PatchWrite:input_card", input.card, 1);
	_patch_write($scope0_id, "PatchWrite:input_tag", input.tag, 1);
	_patch_write($scope0_id, "PatchWrite:Card", Card, 1);
	_patch_write($scope0_id, "PatchWrite:Label", Label, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label,
		input_card: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && input.card,
		input_tag: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.tag,
		Card: _unfilled_if($scope0_reason, 0) && Card,
		Label: _unfilled_if($scope0_reason, 0) && Label,
		"ClosureScopes:input_label/9": _write_if($scope0_reason, 2) && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_card: ["input.card"],
		input_tag: ["input.tag"],
		Card: "1:9",
		Label: "6:9"
	}) : _filled_guard($scope0_reason, 2) && (_content_withheld("__tests__/template.marko_1*content", $scope0_id) || _client_guard($scope0_reason, 0)) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
}, 1);
