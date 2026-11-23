// template.marko
const $catch_content__$params = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("a1", "caught <!>", "b%", 0, $catch_content__$params);
const $el_getter = /*@__PURE__*/ _hoist(0, "B1");
const $setup__script = _script("a2", ($scope) => {
	for (const e of $el_getter($scope)) e.textContent = "y";
});
