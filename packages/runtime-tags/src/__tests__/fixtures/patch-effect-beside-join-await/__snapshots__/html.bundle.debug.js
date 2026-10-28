// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_input_a#0:3/subscribe __tests__/template.marko_1_input_a#0:3_n#3/init!__tests__/template.marko_1; bD l ;<button class=n>n</button><p class=j> </p><div class=e></div>",
	"__tests__/template.marko_0_#text#0/await": "__tests__/template.marko_0_#text#0/await __tests__/template.marko_1_input_a#0:3/subscribe __tests__/template.marko_1_input_a#0:3_n#3/init!__tests__/template.marko_1; bD l ;<button class=n>n</button><p class=j> </p><div class=e></div>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	_await($scope0_id, "#text/0", Promise.resolve(1), (x) => {
		const $scope1_id = _scope_id();
		let n = 0;
		_html(`<button class=n>n</button>${_el_resume($scope1_id, "#button/0")}<p class=j>${_text_resume($scope1_id, "#text/1", input.a + n)}</p><div class=e></div>${_el_resume($scope1_id, "#div/2")}`);
		_script($scope1_id, "__tests__/template.marko_1_input_a#0:3", 1, _filled_guard($scope0_reason, 0), ">input_a");
		_script($scope1_id, "__tests__/template.marko_1");
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_a#0:3/init");
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", n, 1);
		_subscribe($wi__input_a && $input_a__closures, _scope($scope1_id, { n }, "__tests__/template.marko", "1:2", { n: "2:6" }), "__tests__/template.marko_1_input_a#0:3/subscribe");
	}, 1, "__tests__/template.marko_1*content", void 0, 1);
	_scope($scope0_id, {
		input_a: input.a,
		"ClosureScopes:input_a/4": $wi__input_a && $input_a__closures
	}, "__tests__/template.marko", 0, { input_a: ["input.a"] }) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.a, !_server_guard($scope0_reason, 0));
}, 1);
