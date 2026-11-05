// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ id: "a" }, { id: "b" }];
	forOf(items, (item) => {
		const $scope1_id = _scope_id();
		let count = 0;
		_html(`<button>${_escape(item.id)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			"#LoopKey": item?.id,
			count,
			"TagVariableChange:count": _resume(function(next) {
				document.getElementById("log").textContent = item.id + next;
			}, "__tests__/template.marko_1/valueChange", $scope1_id) || void 0
		}, "__tests__/template.marko", "2:2", {
			"#LoopKey": ["item.id", "2:6"],
			count: "3:8",
			"TagVariableChange:count": ["countChange", "3:8"]
		});
	});
	_html("<div id=log></div>");
}, 1);
