// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a4");
	let result = "pending";
	const second = _resume((name, num) => `${name}:${num}`, "a0");
	const third = _resume((...nums) => nums.join("-"), "a1");
	const nullary = _resume(() => "none", "a2");
	const defaulted = _resume((a, b = "def") => a + ":" + b, "a3");
	_html(`<button id=direct>direct</button>${_el_resume($scope0_id, "a")}<button id=alias>alias</button>${_el_resume($scope0_id, "b")}<button id=nullary>nullary</button>${_el_resume($scope0_id, "c")}<button id=defaulted>defaulted</button>${_el_resume($scope0_id, "d")}<div>${_text_resume($scope0_id, "e", result)}</div>`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		h: second,
		j: third,
		l: nullary,
		n: defaulted
	});
}, 1);
