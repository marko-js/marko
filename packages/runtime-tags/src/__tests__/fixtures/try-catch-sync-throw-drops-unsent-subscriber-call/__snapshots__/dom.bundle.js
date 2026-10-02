// template.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("a2", "caught <!>", "b%", 0, $catch_content__$params);
const $el_getter = _hoist_resume("a0", 0, "B1");
const $setup__script = _script("a3", ($scope) => {
	for (const e of $el_getter($scope)) e.textContent = "y";
});
