// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<div class=c></div>${_el_resume($scope0_id, "b")}<div></div>${_el_resume($scope0_id, "c")}<div class="f h"></div>${_el_resume($scope0_id, "d")}<div class=i></div>${_el_resume($scope0_id, "e")}<div class="l m l"></div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: on });
}, 1);
