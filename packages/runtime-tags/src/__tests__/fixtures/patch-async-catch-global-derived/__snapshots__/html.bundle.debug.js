// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	const $global$1 = $global();
	const tag = `${$global$1.brand}!`;
	let n = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "#text/0", value, void 0, $scope0_reason, 0)}</em>`);
			$scope0_page && _scope($scope3_id, {}, "__tests__/template.marko", "5:6");
		}, 1, "__tests__/template.marko_3*content", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "__tests__/template.marko_1_input_promise#0:5/init" : "__tests__/template.marko_1_input_promise#0:5/subscribe");
		$scope0_page && $wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"), $cg__input_promise && "__tests__/template.marko_1_input_promise#0:5/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, void 0, () => {
		const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", tag, $scope2_page)}</p>`);
		$scope2_page && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:6");
		$scope2_page || _resume_branch($scope2_id);
	}, void 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content", 1);
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_fill_global_subscribe("__tests__/template.marko_0_$global_brand#5", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		tag,
		n,
		"ClosureScopes:input_promise/8": $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures
	}, "__tests__/template.marko", 0, {
		tag: "1:8",
		n: "2:6"
	}) : _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", tag);
}, 1);
