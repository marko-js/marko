// template.marko
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D%c%;<p><!>:<!></p>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=open>inc</button><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D%c%;<p><!>:<!></p>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_n#0:5/init;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = new Set();
		_await($scope1_id, "#text/0", Promise.resolve(n), (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", item, 1, $scope0_reason, 0)}:${_text_resume($scope2_id, "#text/1", x, 2)}</p>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_items ? "__tests__/template.marko_2_item#1:2/init" : "__tests__/template.marko_2_item#1:2/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item__closures, _scope($scope2_id, {}, "__tests__/template.marko", "4:4"), $cg__input_items && "__tests__/template.marko_2_item#1:2/subscribe");
		}, 1, "__tests__/template.marko_2*content", 1);
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"ClosureScopes:item/7": _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $for_content__item__closures
		}, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/1", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
