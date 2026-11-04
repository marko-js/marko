// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forOf([{ id: "a" }, { id: "b" }], (item) => {
		const $scope1_id = _scope_id();
		const select = _resume(function() {
			document.getElementById("log").textContent = item.id;
		}, "a0", $scope1_id);
		_html(`<button>${_escape(item.id)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			M: item?.id,
			d: select
		});
	});
	_html("<div id=log></div>");
}, 1);
