// template.marko
const $template = "<main><h1> </h1><!><button>Count <!></button></main>";
const $walks = "E l%b Db%m";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l%b Db%;<main><h1> </h1><!><button>Count <!></button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D ;<aside class=\"promo banner\"> </aside>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, 1, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.promo) {
			const $scope1_id = _scope_id();
			_html(`<aside class="promo banner">${_text_resume($scope1_id, "#text/0", input.promo, 1, $scope0_reason, 1)}</aside>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_promo#0:7/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`<button>Count ${_text_resume($scope0_id, "#text/3", count, 2)}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
