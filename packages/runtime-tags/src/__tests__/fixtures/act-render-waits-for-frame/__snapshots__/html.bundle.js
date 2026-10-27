// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const act = _action($scope0_id, "a1");
	_html(`<form><button name=_action value=add${_attr("disabled", act.pending)}>Add</button>${_el_resume($scope0_id, "b")}</form>${_el_resume($scope0_id, "a")}<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: count,
		f: act,
		g: _resume(async (ev) => {
			ev.preventDefault();
			count++;
			await new Promise((resolve) => setTimeout(resolve, 100));
		}, "a0", $scope0_id) || void 0
	});
}, 1);
