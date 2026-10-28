// template.marko
const $template = "<main><h1> </h1><!><button>+</button></main>";
const $walks = "E l%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l%b ;<main><h1> </h1><!><button>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<p>promo</p><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_count#0:8/init;Db%;<span>Seen <!></span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_inner = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			_html("<p>promo</p>");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<span>Seen ${_text_resume($scope2_id, "#text/0", count, 2)}</span>`);
					_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"), "__tests__/template.marko_2_count#0:8/subscribe");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $wg__input_inner, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_inner#0:7/init");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_inner: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.inner,
		count,
		"ClosureScopes:count/10": $count__closures
	}, "__tests__/template.marko", 0, {
		input_inner: ["input.inner"],
		count: "1:6"
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.inner, !_server_guard($scope0_reason, 2));
}, 1);
