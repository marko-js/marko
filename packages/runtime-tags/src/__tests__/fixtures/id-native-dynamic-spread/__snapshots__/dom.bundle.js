// template.marko
const $Body_content__uid = ($scope, uid) => {
	_attr($scope.a, "for", uid);
	_attr($scope.b, "id", uid);
};
const $Body_content__setup = ($scope) => $Body_content__uid($scope, _id($scope));
const $Body_content = _content("a0", "<label>body</label><input>", " b ", $Body_content__setup);
