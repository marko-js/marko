// tags/field.marko
_shells({ b: "b !b0; D l b ;<label> </label><input><button>+</button>" });
_stateful_return("b");
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const uid = _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "a", 0, 0)}>${_text_resume($scope0_id, "b", input.name, void 0, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "a", 0)}<input${_attr("id", uid, $scope0_id, "c", 0, 0)}>${_el_resume($scope0_id, "c", 0)}<button>+</button>${_el_resume($scope0_id, "d")}`);
	const $return = count;
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", count, 1);
	_scope($scope0_id, { h: count });
	return $return;
});

// template.marko
function fail() {
	throw new Error("caught");
}
_shells({ a: "a !a3;b%b ;<!><!><button>toggle</button>" });
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
				_scope_reason();
				const $scope3_id = _scope_id();
				const $childScope = _patch_child($scope3_id, "a", 0);
				let count = field_default({ name: error.message });
				_var($scope3_id, "b", $childScope, "a0");
				_patch_child_end();
				_html(`<p>${_text_resume($scope3_id, "c", count)}</p>`);
				_scope($scope3_id, { a: _existing_scope($childScope) });
			}, void 0, "a1", "a2");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, { c: show });
}, 1);
