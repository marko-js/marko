// template.marko
_shells({ a: "a !a0;E l ;<main><em> </em><button>set</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = input.foo;
	_html(`<main><em>${_text_resume($scope0_id, "a", 0)}</em><button>set</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: x?.length });
}, 1);
