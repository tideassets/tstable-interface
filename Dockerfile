FROM node:16.20.0

EXPOSE 3000

COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock
COPY ./server/ /usr/src/app/server
COPY ./scripts/get-config-types.js /usr/src/app/scripts/get-config-types.js
COPY ./blockchain/abi/*.json /usr/src/app/blockchain/abi/

WORKDIR /usr/src/app

ARG CONFIG_URL=''
ENV CONFIG_URL=$CONFIG_URL

RUN yarn --no-progress --non-interactive --frozen-lockfile

ARG COMMIT_SHA='' \
  NOTIFICATIONS_HOST='' \
  NOTIFICATIONS_HOST_GOERLI='' \
  AJNA_SUBGRAPH_URL='' \
  AJNA_SUBGRAPH_URL_GOERLI='' \
  MIXPANEL_ENV='' \
  MIXPANEL_KEY='' \
  ADROLL_ADV_ID='' \
  ADROLL_PIX_ID='' \
  MAINNET_CACHE_URL='' \
  SHOW_BUILD_INFO='' \
  ETHERSCAN_API_KEY='' \
  BLOCKNATIVE_API_KEY='' \
  INFURA_PROJECT_ID='' \
  NODE_ENV='' \
  NEXT_PUBLIC_SENTRY_ENV='' \
  SENTRY_AUTH_TOKEN='' \
  PRODUCT_HUB_KEY='' \
  ONE_INCH_API_KEY='' \
  ONE_INCH_API_URL='' \
  REFERRAL_SUBGRAPH_URL=''

ENV COMMIT_SHA=$COMMIT_SHA \
  NOTIFICATIONS_HOST=$NOTIFICATIONS_HOST \
  NOTIFICATIONS_HOST_GOERLI=$NOTIFICATIONS_HOST_GOERLI \
  AJNA_SUBGRAPH_URL=$AJNA_SUBGRAPH_URL \
  AJNA_SUBGRAPH_URL_GOERLI=$AJNA_SUBGRAPH_URL_GOERLI \
  MIXPANEL_ENV=$MIXPANEL_ENV \
  MIXPANEL_KEY=$MIXPANEL_KEY \
  ADROLL_ADV_ID=$ADROLL_ADV_ID \
  ADROLL_PIX_ID=$ADROLL_PIX_ID \
  MAINNET_CACHE_URL=$MAINNET_CACHE_URL \
  ETHERSCAN_API_KEY=$ETHERSCAN_API_KEY \
  BLOCKNATIVE_API_KEY=$BLOCKNATIVE_API_KEY \
  INFURA_PROJECT_ID=$INFURA_PROJECT_ID \
  USE_TERMS_OF_SERVICE=1 \
  USE_TRM_API=1 \
  SHOW_BUILD_INFO=$SHOW_BUILD_INFO \
  NODE_ENV=$NODE_ENV \
  SENTRY_RELEASE=$COMMIT_SHA \
  NEXT_PUBLIC_SENTRY_ENV=$NEXT_PUBLIC_SENTRY_ENV \
  SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN \
  PRODUCT_HUB_KEY=$PRODUCT_HUB_KEY \
  ONE_INCH_API_KEY=$ONE_INCH_API_KEY \
  ONE_INCH_API_URL=$ONE_INCH_API_URL \
  REFERRAL_SUBGRAPH_URL=$REFERRAL_SUBGRAPH_URL \
  NODE_OPTIONS=--max-old-space-size=6144

COPY . .

RUN chmod +x ./scripts/wait-for-it.sh \
  && npm run build

CMD [ "npm", "run", "start:prod" ]