// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D ;<b> </b>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "#text/0", item.id, void 0, $scope0_owned, 0)}</b>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, "id", $scope0_id, "#text/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
