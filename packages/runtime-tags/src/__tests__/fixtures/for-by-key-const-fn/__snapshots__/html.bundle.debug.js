// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ id: "a" }, { id: "b" }];
	forOf(items, (item) => {
		const $scope1_id = _scope_id();
		const select = _resume(function() {
			document.getElementById("log").textContent = item.id;
		}, "__tests__/template.marko_1/select", $scope1_id);
		_html(`<button>${_escape(item.id)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_select#3");
		_scope($scope1_id, {
			"#LoopKey": item?.id,
			select
		}, "__tests__/template.marko", "2:2", {
			"#LoopKey": ["item.id", "2:6"],
			select: "3:10"
		});
	});
	_html("<div id=log></div>");
}, 1);
