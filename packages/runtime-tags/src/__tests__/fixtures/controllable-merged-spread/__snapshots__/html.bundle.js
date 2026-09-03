// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "a";
	const rest = {
		value: "z",
		placeholder: "p"
	};
	_html(`<button>pick</button>${_el_resume($scope0_id, "a")}<input${_attrs({
		type: "radio",
		checkedValue: v,
		...rest
	}, "b", $scope0_id, "input")}>${_el_resume($scope0_id, "b")}<span>${_text_resume($scope0_id, "c", v)}</span>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: v,
		e: rest
	});
}, 1);
