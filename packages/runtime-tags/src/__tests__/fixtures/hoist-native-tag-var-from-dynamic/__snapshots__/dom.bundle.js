// template.marko
const $el3_getter = /*@__PURE__*/ _hoist(0, "B4");
const $inputshowChildnull_content__$el2_getter = /*@__PURE__*/ _hoist(0, "B3");
const $el2_getter = /*@__PURE__*/ _hoist(0, "B3", "B2");
const $inputshowChildnull_content__setup__script = _script("a3", ($scope) => {
	for (const el of $inputshowChildnull_content__$el2_getter($scope)) el.classList.add("inner");
});
const $el_getter = /*@__PURE__*/ _hoist(0, "B1");
const $setup__script = _script("a5", ($scope) => {
	for (const el of $el_getter($scope)) el.innerHTML = "Hoist from custom tag";
	for (const el of $el2_getter($scope)) el.classList.add("outer");
	{
		const el = $el3_getter($scope)();
		if (el) el.innerHTML = "Hoist from dynamic tag";
	}
});
