// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	let list = [
		1,
		2,
		3
	];
	_html(`<ul${_attr("hidden", false)}>`);
	_for_of(list, (x) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(x)}${_el_resume($scope1_id, "a")}</li>`);
		writeScope($scope1_id, {});
	}, function(x) {
		return x;
	}, $scope0_id, "a", 1, 1, 1, "</ul>", 1, 1);
	_html(`<button id=toggle>Toggle</button>${_el_resume($scope0_id, "b")}<button id=reverse>Reverse</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: open,
		e: list
	});
	_resume_branch($scope0_id);
}, 1);
