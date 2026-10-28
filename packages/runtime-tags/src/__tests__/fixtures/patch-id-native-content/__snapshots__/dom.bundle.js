// template.marko
const $for_content2__Body__script = _script("a3", ($scope) => _attrs_script($scope, "a"));
const $Body_content__uid = ($scope, uid) => {
	_attr($scope.a, "for", uid);
	_attr($scope.b, "id", uid);
};
const $Body_content__setup = ($scope) => $Body_content__uid($scope, _id($scope));
const $Body_content = _content$1("a0", "<label>body</label><input>", " b ", $Body_content__setup);
