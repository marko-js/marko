// template.marko
const $template = "<main><ul></ul><!><p> </p><button>Count <!></button></main>";
const $walks = "D b%bD l Db%m";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b%bD l Db%;<main><ul></ul><!><p> </p><button>Count <!></button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D ;<aside> </aside>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<li> </li>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0), $sg__input_promo = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><ul>");
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_patch_text($scope2_id, "#text/0", item.label, void 0, $scope0_owned, 0)}</li>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "4:6");
	}, "id", $scope0_id, "#ul/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_2*shell", $scope0_owned, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_items)}`);
	_if(() => {
		if (input.promo) {
			const $scope1_id = _scope_id();
			_html(`<aside>${_patch_text($scope1_id, "#text/0", input.promo, void 0, $scope0_owned, 1)}</aside>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_promo, $sg__input_promo, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`<p>${_patch_text($scope0_id, "#text/2", input.note, void 0, $scope0_owned, 2)}</p><button>Count ${_text_resume($scope0_id, "#text/4", count, 2)}</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		input_promo: input.promo,
		count
	}, "__tests__/template.marko", 0, {
		input_promo: ["input.promo"],
		count: "1:6"
	});
}, 1, 0);
