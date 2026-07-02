// template.marko
const $el3_getter = _hoist_resume("a0", 0, "Aa", "Ac");
const $el2_getter = /* @__PURE__ */ _hoist(0, "Ab");
const $el_getter = /* @__PURE__ */ _hoist(0, "Aa");
const $setup__script = _script("a1", ($scope) => {
	{
		const el = $el_getter($scope)();
		if (el) el.innerHTML = "First Only";
	}
	{
		const el = $el2_getter($scope)();
		if (el) el.innerHTML = "First Only";
	}
	{
		let i = 0;
		for (const el of $el3_getter($scope)) el.innerHTML = `All (${i++})`;
	}
});
