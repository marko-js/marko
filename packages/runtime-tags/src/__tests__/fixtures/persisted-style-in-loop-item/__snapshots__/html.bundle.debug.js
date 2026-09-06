// v:template.marko.css
var v_template_marko_default = ".k { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19in-19loop-19item-1btemplate-1amarko_0); }";

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; ;<style></style><b class=k>item</b>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19in-19loop-19item-1btemplate-1amarko_0:${_patch_style($scope1_id, "#style/0", "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19in-19loop-19item-1btemplate-1amarko_0", item.color, $scope0_owned, 0)};`)}${_el_resume($scope1_id, "#style/0")}<b class=k>item</b>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, "id", $scope0_id, "#text/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
