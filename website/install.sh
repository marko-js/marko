mkdir -p node_modules/.dev &&
(
  cd .. &&
    npm run build &&
    node scripts/pkg-override &&
    npm -ws pack --pack-destination website/node_modules/.dev &&
    node scripts/pkg-override
) &&
find node_modules/.dev -type f -name "*-[0-9]*.[0-9]*.[0-9]*.tgz" -exec sh -c 'mv "$0" "${0/-[0-9]*.[0-9]*.[0-9]*/}.tgz"' {} \; &&
npm i
