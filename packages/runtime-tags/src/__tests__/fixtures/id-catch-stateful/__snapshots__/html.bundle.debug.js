// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const uid = _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "#text/1", input.name, _write_guard($scope0_reason, 0))}</label><input${_attr("id", uid)}><button>+</button>${_el_resume($scope0_id, "#button/3")}`);
	const $return = count;
	_script($scope0_id, "__tests__/tags/field.marko_0");
	_scope($scope0_id, { count }, "__tests__/tags/field.marko", 0, { count: "1:6" });
	return $return;
});

// template.marko
function fail() {
	throw new Error("caught");
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(_escape(fail()));
			}, void 0, (error) => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_set_scope_reason(_write_guard($scope3_reason, 0) << 1);
				const $childScope = _peek_scope_id();
				let count = field_default({ name: error.message });
				_var($scope3_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_3_count#6/var");
				_html(`<p>${_text_resume($scope3_id, "#text/2", count)}</p>`);
				_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:25");
			}, void 0, "__tests__/template.marko_3*content");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "2:6" });
}, 1);
