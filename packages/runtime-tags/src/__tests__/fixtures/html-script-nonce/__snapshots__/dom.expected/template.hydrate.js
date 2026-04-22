// size: 196 (min) 142 (brotli)
const $if_content__setup = ($scope) => _._attr_nonce($scope, `a`);
_._script(`a0`, ($scope) => _._attrs_script($scope, `b`));
const $if = _._if(
    2,
    `<script type=magic>
    D
  <\/script>`,
    ` b`,
    $if_content__setup,
  ),
  $mounted = _._let(4, ($scope) => $if($scope, +!$scope.e));
(_._script(`a1`, ($scope) => $mounted($scope, !0)), init());
