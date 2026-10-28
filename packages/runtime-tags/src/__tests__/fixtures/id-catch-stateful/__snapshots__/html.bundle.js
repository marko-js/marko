// tags/field.marko
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const uid = _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.name, _write_guard($scope0_reason, 0))}</label><input${_attr("id", uid)}><button>+</button>${_el_resume($scope0_id, "d")}`);
	const $return = count;
	_script($scope0_id, "b0");
	_scope($scope0_id, { h: count });
	return $return;
});

// template.marko
function fail() {
	throw new Error("caught");
}
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				_scope_id();
				_html(_escape(fail()));
			}, void 0, (error) => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_set_scope_reason(_write_guard($scope3_reason, 0) << 1);
				const $childScope = _peek_scope_id();
				let count = field_default({ name: error.message });
				_var($scope3_id, "b", $childScope, "a0");
				_html(`<p>${_text_resume($scope3_id, "c", count)}</p>`);
				_scope($scope3_id, { a: _existing_scope($childScope) });
			}, void 0, "a1");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { c: show });
}, 1);
