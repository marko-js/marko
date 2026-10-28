// template.marko
const $template = "<main><ul></ul><!><p> </p><button>Count <!></button></main>";
const $walks = "D b%bD l Db%m";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b%bD l Db%;<main><ul></ul><!><p> </p><button>Count <!></button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D ;<aside> </aside>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<li> </li>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><ul>");
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_text_resume($scope2_id, "#text/0", item.label, 1, $scope0_reason, 0)}</li>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "4:6");
	}, "id", $scope0_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_2*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	_if(() => {
		if (input.promo) {
			const $scope1_id = _scope_id();
			_html(`<aside>${_text_resume($scope1_id, "#text/0", input.promo, 1, $scope0_reason, 1)}</aside>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_promo#0:8/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`<p>${_text_resume($scope0_id, "#text/2", input.note, 1, $scope0_reason, 2)}</p><button>Count ${_text_resume($scope0_id, "#text/4", count, 2)}</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
