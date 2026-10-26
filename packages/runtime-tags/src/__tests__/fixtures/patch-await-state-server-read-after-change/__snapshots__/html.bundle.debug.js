// template.marko
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $setup = [["__tests__/template.marko_0_#text#1/init"], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_0_#text#1/await": "__tests__/template.marko_0_#text#1/await;D%c%;<p><!>:<!></p>",
	"__tests__/template.marko": "__tests__/template.marko __tests__/template.marko_0_#text#1/init!__tests__/template.marko_0; b%;<button class=open>inc</button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_await($scope0_id, "#text/1", Promise.resolve(n), (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label, _write_guard($scope0_reason, 0))}:${_text_resume($scope1_id, "#text/1", x, 2)}</p>`);
		$scope0_page && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_label#0:4/subscribe");
	}, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		n,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
