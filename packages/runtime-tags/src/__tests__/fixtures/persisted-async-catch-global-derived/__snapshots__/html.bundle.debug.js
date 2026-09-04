// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $tag__closures = new Set();
	const $input_promise__closures = new Set();
	const $global$1 = $global();
	const tag = `${$global$1.brand}!`;
	let n = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "#text/0", value, void 0, $scope0_owned, 0)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "5:6");
		}, 1, "__tests__/template.marko_1_#text#0/await", 1);
		$scope0_reason && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"));
		$scope0_reason && _resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _persisted_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", tag)}</p>`);
		_subscribe($tag__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:6"));
	}, $scope0_id) }) }, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_global_subscribe("__tests__/template.marko_0_$global_brand#7/global", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		tag,
		n,
		"ClosureScopes:input_promise": $input_promise__closures
	}, "__tests__/template.marko", 0, {
		tag: "1:8",
		n: "2:6"
	}) : _patch_value($scope0_id, "__tests__/template.marko0", tag);
}, 1, 1);
