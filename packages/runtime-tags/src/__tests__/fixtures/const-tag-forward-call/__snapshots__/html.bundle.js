// template.marko
function $defaulted(a, b = "def") {
	return a + ":" + b;
}
function $nullary() {
	return "none";
}
function $third(...nums) {
	return nums.join("-");
}
function $second(name, num) {
	return `${name}:${num}`;
}
_resume("a7", $defaulted);
_resume("a5", $nullary);
_resume("a3", $third);
_resume("a1", $second);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let result = "pending";
	const first = _resume_scoped(() => {
		result = ((second) => second("A", 42))(_hoist_read_error);
	}, "a0", $scope0_id);
	const second = $second;
	const viaAlias = _resume_scoped(() => {
		result = _hoist_read_error(1, 2, 3);
	}, "a2", $scope0_id);
	const third = $third;
	const callNullary = _resume_scoped(() => {
		result = ((nullary) => nullary())(_hoist_read_error);
	}, "a4", $scope0_id);
	const nullary = $nullary;
	const callDefaulted = _resume_scoped(() => {
		result = ((defaulted) => defaulted("x"))(_hoist_read_error);
	}, "a6", $scope0_id);
	const defaulted = $defaulted;
	_html(`<button id=direct>direct</button>${_el_mark($scope0_id, "a")}<button id=alias>alias</button>${_el_mark($scope0_id, "b")}<button id=nullary>nullary</button>${_el_mark($scope0_id, "c")}<button id=defaulted>defaulted</button>${_el_mark($scope0_id, "d")}<div>${_text_mark($scope0_id, "e", result)}</div>`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		g: first,
		h: second,
		i: viaAlias,
		j: third,
		k: callNullary,
		l: nullary,
		m: callDefaulted,
		n: defaulted
	});
}, 1);
