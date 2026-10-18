// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_n#0:9/init,",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tags__OR__input_card = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $n__closures = new Set();
	const Card = { content: _content_resume("__tests__/template.marko_3*content", ({ label, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 2);
		_html(`<p>${_patch_text($scope3_id, "#text/0", label)}`);
		_if(() => {
			if (label) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "#text/0", content, {}, 0, 0, $wg__content, void 0, 2);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) }, "__tests__/template.marko", "2:15");
				return 0;
			}
		}, $scope3_id, "#text/1", 1, _write_guard($scope3_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_4*shell"]);
		_html("</p>");
		_scope($scope3_id, { content: _unfilled_if($scope3_reason, 1) && content }, "__tests__/template.marko", "1:2", { content: "1:23" });
	}, $scope0_id) };
	let n = 0;
	const Label = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "#text/1", n, 2)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:5/subscribe");
		_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2")));
	}, $scope0_id) };
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.tags, (tag) => {
		const $scope2_id = _scope_id();
		_dynamic_tag($scope2_id, "#text/0", input.card ? Card : "span", {
			label: tag,
			content: Label
		}, 0, 0, $wg__input_tags__OR__input_card, void 0, 1, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope2_id, {
			tag: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && tag,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "7:2", { tag: "7:6" });
	}, 0, $scope0_id, "#text/2", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_2*shell", $scope0_reason, 2);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:Card", Card, 1);
	_patch_write($scope0_id, "PatchWrite:Label", Label, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", n, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		input_card: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.card,
		Card: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && Card,
		n,
		Label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && Label,
		"ClosureScopes:input_label/11": _write_if($scope0_reason, 1) && $input_label__closures,
		"ClosureScopes:n/14": $n__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_card: ["input.card"],
		Card: "1:9",
		n: "4:6",
		Label: "5:9"
	}) : (_filled_guard($scope0_reason, 1) && _content_withheld("__tests__/template.marko_1*content", _client_guard($scope0_reason, 0)) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.card, !_server_guard($scope0_reason, 3)));
}, 1);
