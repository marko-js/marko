// template.marko
_shells({ a: "a !a0; E l ;<main><p> </p><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_value = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	const uid = _id("A");
	console.log(input.title);
	_html(`<main${_attr("data-id", uid, $scope0_id, "a", 0, 0)}><p>${_text_mark($scope0_id, "b", count)}</p><button>+</button>${_el_mark($scope0_id, "c")}</main>${_el_mark($scope0_id, "a", 0)}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1", 1, 0, $fg__input_value && "f", "a2");
	_scope($scope0_id, {
		f: input.value,
		h: count
	}) || $fg__input_value && _patch_write($scope0_id, "xf", input.value, !_server_guard($scope0_reason, 0));
}, 1);
