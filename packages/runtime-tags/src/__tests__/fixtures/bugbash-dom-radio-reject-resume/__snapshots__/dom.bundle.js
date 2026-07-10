// template.marko
const $setup__script = _script("a2", ($scope) => {
	_attr_input_checkedValue_script($scope, "a");
	_attr_input_checkedValue_script($scope, "b");
});
function $checkedValueChange2(v) {}
function $checkedValueChange(v) {}
_resume("a1", $checkedValueChange2);
_resume("a0", $checkedValueChange);
