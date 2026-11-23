// template.marko
const $class = [_attr_class("a  b   d  e "), _attr_class(`a  b  ${"on"}`)];
const $class2 = [_attr_class("x"), _attr_class(`${"x"} ${"p q"}`)];
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}<div${$class[0]}></div>${_el_mark($scope0_id, "b")}<div class="f i"></div>${_el_mark($scope0_id, "c")}<div${$class2[0]}></div>${_el_mark($scope0_id, "d")}<div${_attr_style({ "color ": on })}></div>${_el_mark($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: on });
}, 1);
