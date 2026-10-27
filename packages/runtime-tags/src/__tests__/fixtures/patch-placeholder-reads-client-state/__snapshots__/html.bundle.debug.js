// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<em> </em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	const $input_promise__closures = new Set();
	let n = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_patch_text($scope4_id, "#text/0", value, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "4:6");
		}, 1, "__tests__/template.marko_4*content", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "__tests__/template.marko_1_input_promise#0:5/init" : "__tests__/template.marko_1_input_promise#0:5/subscribe");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), $cg__input_promise && "__tests__/template.marko_1_input_promise#0:5/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<p>loading</p>");
		if ($scope0_page) _if(() => {
			if (n) {
				const $scope3_id = _scope_id();
				_html(`<b>ph ${_text_resume($scope3_id, "#text/0", n, 2)}</b>`);
				_script($scope3_id, "__tests__/template.marko_3");
				_subscribe($n__closures, _scope($scope3_id, { "ClosureSignalIndex:n/8": 1 }, "__tests__/template.marko", "9:8"), "__tests__/template.marko_3_n#0:6/subscribe");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, 1, 0, 0, 1);
		_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:6"), "__tests__/template.marko_2_n#0:6/subscribe");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1);
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:n/8": $n__closures,
		"ClosureScopes:input_promise/7": $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
