// template.marko
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("a2", "caught <!>", "b%", 0, $catch_content__err);
const $el_getter = _hoist_resume("a0", 0, "B1");
const $setup__script = _script("a3", ($scope) => {
	for (const e of $el_getter($scope)) e.textContent = "y";
});
