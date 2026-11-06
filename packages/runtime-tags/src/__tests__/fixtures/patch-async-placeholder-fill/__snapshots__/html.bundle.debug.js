// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_promise__closures = new Set();
	let n = 0;
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_mark($scope3_id, "#text/0", value, 1, $scope0_reason, 1)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "4:6");
		}, 1, "__tests__/template.marko_3*content", _unfilled_if($scope0_reason, 1) && 2, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_promise#0:6/subscribe", 1);
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_2_input_promise#0:6/subscribe", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_mark($scope1_id, "#text/0", input.label, $wg__input_label)}</p>`);
		$cg__input_label && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:5/subscribe");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:6"), $cg__input_label && "__tests__/template.marko_1_input_label#0:5/subscribe", $wg__input_label);
	}, void 0, "__tests__/template.marko_1*content", void 0, "__tests__/template.marko_2*content", 1);
	_html(`<button>${_text_mark($scope0_id, "#text/2", n)}</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		n,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_promise/9": $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	}) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);
