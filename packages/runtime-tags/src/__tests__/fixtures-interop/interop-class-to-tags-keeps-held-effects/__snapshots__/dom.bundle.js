// components/tags-child.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("b2", " ", " ", 0, $catch_content__$params);
const $await_content__input_name__script = _script("b0", ($scope) => console.log(`${$scope._._.d} in try`));
const $input_name__script = _script("b3", ($scope) => {
	console.log(`${$scope.d} before`);
	console.log(`${$scope.d} after`);
});

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
