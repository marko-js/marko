// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<b> </b>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_key__closures = new Set();
		const Tag = item.on ? "p" : "div";
		_dynamic_tag($scope1_id, "#text/0", Tag, { content: attrTag({ content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<b>${_text_mark($scope2_id, "#text/0", item.key, 1, $scope0_reason, 0)}</b>`);
			$cg__input_items && _patch_render($scope2_id, "__tests__/template.marko_2_item_key#1:4/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_key__closures, _scope($scope2_id, { _: $wi__input_items && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:12"), $cg__input_items && "__tests__/template.marko_2_item_key#1:4/subscribe");
		}, $scope1_id, 0) }) }, 1, 0, 0, $wg__input_items, $scope0_reason, 0);
		$wi__input_items && _scope($scope1_id, { "ClosureScopes:item_key/6": $for_content__item_key__closures }, "__tests__/template.marko", "1:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
