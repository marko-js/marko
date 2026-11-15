// template.marko
function fail() {
	throw new Error("fail");
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $failing__closures = new Set();
	let failing = false;
	forOf(["a", "b"], (item, index) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(_text_mark($scope2_id, "#text/0", failing ? fail() : item));
			_subscribe($failing__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:4"), "__tests__/template.marko_2_failing#0:2/subscribe");
		}, void 0, () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(_escape(index));
			_scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "10:6");
		}, 0, "__tests__/template.marko_3*content");
		_scope($scope1_id, {
			item,
			"#LoopKey": index,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "6:2", {
			item: "6:6",
			"#LoopKey": "6:12"
		});
	});
	_html(`<button>fail</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "ClosureScopes:failing/3": $failing__closures }, "__tests__/template.marko", 0);
}, 1);
