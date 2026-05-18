// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		0,
		1,
		2
	];
	_html(`<button></button>${_el_resume($scope0_id, "a")}<div>${_escape(function sum(i = 0) {
		return i >= items.length ? 0 : items[i] + sum(i + 1);
	}())}${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: items });
	_resume_branch($scope0_id);
}, 1);
