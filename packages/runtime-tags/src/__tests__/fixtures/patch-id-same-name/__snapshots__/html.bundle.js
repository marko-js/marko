// template.marko
_shells({
	a: "a !a1; D lD b D mD l%;<button> </button><div><input><label> </label></div><div><input></div><!><!>",
	a0: "a0; ;<input>"
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const x = _id("A");
	const $x = _id("B");
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<div><input${_attr("id", x, $scope0_id, "c", 0, 0)}>${_el_resume($scope0_id, "c", 0)}<label${_attr("for", x, $scope0_id, "d", 0, 0)}>${_text_resume($scope0_id, "e", n)}</label>${_el_resume($scope0_id, "d", 0)}</div><div><input${_attr("id", $x, $scope0_id, "f", 0, 0)}>${_el_resume($scope0_id, "f", 0)}</div>`);
	_for_of([{ k: "a b" }, { k: "a]" }], (item) => {
		const $scope1_id = _scope_id();
		const y = _id("C");
		_html(`<input${_attr("id", y, $scope1_id, "a", 0, 0)}>${_el_resume($scope1_id, "a", 0)}`);
		_scope($scope1_id, {});
	}, "k", $scope0_id, "g", 1, void 0, void 0, void 0, void 0, "a0", 0, 0);
	_script($scope0_id, "a1");
	_scope($scope0_id, { h: n });
}, 1);
