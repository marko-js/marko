// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $third_getter = _hoist($scope0_id, "a8");
	let result = "pending";
	const first = _resume(() => {
		result = ((second) => second("A", 42))(_hoist_read_error);
	}, "a0", $scope0_id);
	const second = _resume((name, num) => `${name}:${num}`, "a1");
	const viaAlias = _resume(() => {
		result = $third_getter(1, 2, 3);
	}, "a2", $scope0_id);
	const third = _resume((...nums) => nums.join("-"), "a3");
	const callNullary = _resume(() => {
		result = ((nullary) => nullary())(_hoist_read_error);
	}, "a4", $scope0_id);
	const nullary = _resume(() => "none", "a5");
	const callDefaulted = _resume(() => {
		result = ((defaulted) => defaulted("x"))(_hoist_read_error);
	}, "a6", $scope0_id);
	const defaulted = _resume((a, b = "def") => a + ":" + b, "a7");
	_html(`<button id=direct>direct</button>${_el_resume($scope0_id, "a")}<button id=alias>alias</button>${_el_resume($scope0_id, "b")}<button id=nullary>nullary</button>${_el_resume($scope0_id, "c")}<button id=defaulted>defaulted</button>${_el_resume($scope0_id, "d")}<div>${_escape(result)}${_el_resume($scope0_id, "e")}</div>`);
	_script($scope0_id, "a9");
	writeScope($scope0_id, {
		g: first,
		h: second,
		i: viaAlias,
		j: third,
		k: callNullary,
		l: nullary,
		m: callDefaulted,
		n: defaulted
	});
	_resume_branch($scope0_id);
}, 1);
