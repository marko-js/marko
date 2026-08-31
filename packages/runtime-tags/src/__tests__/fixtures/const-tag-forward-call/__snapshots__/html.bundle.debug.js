// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $third_getter = _hoist($scope0_id, "__tests__/template.marko_0_third#9/hoist");
	let result = "pending";
	const first = _resume(() => {
		result = ((second) => second("A", 42))(_hoist_read_error);
	}, "__tests__/template.marko_0/first", $scope0_id);
	const second = _resume((name, num) => `${name}:${num}`, "__tests__/template.marko_0/second");
	const viaAlias = _resume(() => {
		const alias = $third_getter;
		result = alias(1, 2, 3);
	}, "__tests__/template.marko_0/viaAlias", $scope0_id);
	const third = _resume((...nums) => nums.join("-"), "__tests__/template.marko_0/third");
	const callNullary = _resume(() => {
		result = ((nullary) => nullary())(_hoist_read_error);
	}, "__tests__/template.marko_0/callNullary", $scope0_id);
	const nullary = _resume(() => "none", "__tests__/template.marko_0/nullary");
	const callDefaulted = _resume(() => {
		result = ((defaulted) => defaulted("x"))(_hoist_read_error);
	}, "__tests__/template.marko_0/callDefaulted", $scope0_id);
	const defaulted = _resume((a, b = "def") => a + ":" + b, "__tests__/template.marko_0/defaulted");
	_html(`<button id=direct>direct</button>${_el_resume($scope0_id, "#button/0")}<button id=alias>alias</button>${_el_resume($scope0_id, "#button/1")}<button id=nullary>nullary</button>${_el_resume($scope0_id, "#button/2")}<button id=defaulted>defaulted</button>${_el_resume($scope0_id, "#button/3")}<div>${_text_resume($scope0_id, "#text/4", result)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		first,
		second,
		viaAlias,
		third,
		callNullary,
		nullary,
		callDefaulted,
		defaulted
	}, "__tests__/template.marko", 0, {
		first: "2:8",
		second: "3:8",
		viaAlias: "4:8",
		third: "5:8",
		callNullary: "6:8",
		nullary: "7:8",
		callDefaulted: "8:8",
		defaulted: "9:8"
	});
	_resume_branch($scope0_id);
	_assert_hoist(second);
	_assert_hoist(third);
	_assert_hoist(nullary);
	_assert_hoist(defaulted);
}, 1);
