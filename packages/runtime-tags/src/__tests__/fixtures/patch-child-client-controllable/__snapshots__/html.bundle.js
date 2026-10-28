// tags/field/index.marko
_shells({ b: "b !b1; bD ;<input><em> </em>" });
var field_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "";
	_html(`<input${_attr_input_value($scope0_id, "a", v, _resume((_new_v) => {
		v = _new_v;
	}, "b0", $scope0_id), "n2a", 0, 0, "wEa", 0, 0)}>${_el_resume($scope0_id, "a")}<em>${_text_resume($scope0_id, "b", v, void 0, 0, 0, 1)}</em>`);
	_script($scope0_id, "b1");
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_patch_child($scope1_id, "a", 0);
			field_default({});
			_patch_child_end();
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: show });
}, 1);
