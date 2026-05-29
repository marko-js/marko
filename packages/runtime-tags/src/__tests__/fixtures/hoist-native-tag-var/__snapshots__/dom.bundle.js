// total: 2238 (min) 1135 (brotli)
// tags/child.marko: 67 (min) 71 (brotli)
let id = 0;
const $input__script = _script("b0", ($scope) => $scope.b.value()?.classList.add(`child${id++}`));

// template.marko: 179 (min) 116 (brotli)
const $el2_getter = _hoist(0, "Ac");
const $el_getter = _hoist_resume("a0", 0, "Aa", "Aa");
const $if_content2__$el_getter = _el("a1", 0);
const $setup__script = _script("a2", ($scope) => {
	{
		const el = $el_getter($scope)();
		if (el) el.innerHTML = "Hello World";
	}
	{
		const el = $el2_getter($scope)();
		if (el) el.innerHTML = "Hello World";
	}
});
