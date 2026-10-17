// template.marko
const $card_content__item_name = ($scope, item_name) => _text($scope.a, item_name.toUpperCase());
const $card_content__$params = ($scope, $params2) => $card_content__item_name($scope, $params2[0].item?.name);
const $card_content = _content$1("a0", "<em> </em>", "D ", 0, $card_content__$params);
