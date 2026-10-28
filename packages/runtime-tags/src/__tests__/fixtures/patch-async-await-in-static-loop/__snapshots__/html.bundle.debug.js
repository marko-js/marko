// template.marko
const $template = "<main><!><button>interactive</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>interactive</button></main>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_p = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of([1, 2], (n) => {
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.p, (value) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_resume($scope2_id, "#text/0", value + n, 1, $scope0_reason, 0)}</em>`);
			$cg__input_p && _patch_init($scope2_id, "__tests__/template.marko_2_n#1:2_value#2/init");
			_scope($scope2_id, {}, "__tests__/template.marko", "3:6");
		}, 1, "__tests__/template.marko_2*content");
		$cg__input_p && _patch_write($scope1_id, "PatchWrite:n", n, 1);
		$cg__input_p && _patch_init($scope1_id, "__tests__/template.marko_1_input_p#0:4/init");
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			n: _unfilled_if($scope0_reason, 0) && n,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:4", { n: "2:8" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", 0, 0);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
