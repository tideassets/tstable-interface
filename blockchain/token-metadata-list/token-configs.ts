import type { TokenConfig } from 'blockchain/TokenConfig'
import {
  aave_circle_color,
  bat,
  bat_circle_color,
  cbeth_circle_color,
  chainlink,
  chainlink_circle_color,
  compound,
  compound_circle_color,
  dai,
  dai_circle_color,
  deprecated_icon,
  ether,
  ether_circle_color,
  frax_circle_color,
  gemini,
  gemini_circle_color,
  gho_circle_color,
  gno_circle_color,
  guniv3_dai_usdc1_circles_color,
  kyber,
  kyber_circle_color,
  lrc,
  lrc_circle_color,
  lusd_circle_color,
  mana,
  mana_circle_color,
  matic_circle_color,
  mkr_circle_color,
  pax,
  pax_circle_color,
  renbtc_circle_color,
  reth_circle_color,
  sdai_circle_color,
  spark_circle_color,
  steth_circle_color,
  tbtc_circle_color,
  tusd,
  tusd_circle_color,
  uni_circle_color,
  univ2_dai_usdc_circles_color,
  univ2_dai_usdt_circles_color,
  univ2_eth_usdt_circles_color,
  univ2_usdc_eth_circles_color,
  usdc,
  usdc_circle_color,
  usdp_circle_color,
  usdt,
  usdt_circle_color,
  wbtc,
  wbtc_circle_color,
  weth_circle_color,
  wld_circle_color,
  wsteth_circle_color,
  yfi_circle_color,
  yieldbtc_circle_color,
  yieldeth_circle_color,
  zerox,
  zerox_circle_color,
} from 'theme/icons'

const deprecatedTokens = [
  'UNIV2WBTCETH',
  'UNIV2LINKETH',
  'UNIV2UNIETH',
  'UNIV2WBTCDAI',
  'UNIV2AAVEETH',
  'CRVV1ETHSTETH',
]

export const tokenConfigs: TokenConfig[] = [
  {
    symbol: 'USDP',
    precision: 18,
    digits: 5,
    name: 'Pax Dollar',
    icon: usdp_circle_color,
    iconCircle: usdp_circle_color,
    coinpaprikaTicker: 'usdp-paxos-standard-token',
    coinGeckoTicker: 'paxos-standard',
    color: '#0B9F74',
    background: 'linear-gradient(143.13deg, #0B9F74 12.24%, #64DFBB 85.9%) #FFFFFF',
    tags: [],
  },
  {
    symbol: 'STETH',
    precision: 18,
    digits: 5,
    name: 'Lido Staked ETH',
    icon: steth_circle_color,
    iconCircle: steth_circle_color,
    coinpaprikaTicker: 'steth-lido-staked-ether',
    coinGeckoTicker: 'staked-ether',
    color: '#0B91DD',
    background: 'linear-gradient(143.37deg, #00A3FF 15.97%, #0B91DD 81.1%), #FFFFFF',
    tags: [],
  },
  {
    symbol: 'MKR',
    precision: 18,
    digits: 5,
    name: 'Maker',
    icon: mkr_circle_color,
    iconCircle: mkr_circle_color,
    coinpaprikaTicker: 'mkr-maker',
    coinbaseTicker: 'mkr-usd',
    color: '#1AAB9B',
    background: 'linear-gradient(133.41deg, #1AAB9B 17.25%, #22CAB7 86.54%), #FFFFFF',
    tags: [],
  },
  {
    symbol: 'WETH',
    precision: 18,
    digits: 5,
    name: 'Wrapped Ether',
    icon: weth_circle_color,
    iconCircle: weth_circle_color,
    coinpaprikaTicker: 'weth-weth',
    coinpaprikaFallbackTicker: 'eth-ethereum',
    coinGeckoTicker: 'weth',
    color: '#25ddfb',
    background: 'linear-gradient(158.87deg, #E2F7F9 0%, #D3F3F5 100%), #FFFFFF',
    tags: [],
  },
  {
    symbol: 'ETH',
    precision: 18,
    digits: 5,
    maxSell: '10000000',
    name: 'Ether',
    icon: ether,
    iconCircle: ether_circle_color,
    coinpaprikaTicker: 'eth-ethereum',
    coinbaseTicker: 'eth-usd',
    coinGeckoId: 'ethereum',
    color: '#667FE3',
    background: 'linear-gradient(160.47deg, #F0F3FD 0.35%, #FCF0FD 99.18%), #FFFFFF',
    tags: [],
  },
  {
    symbol: 'WBTC',
    precision: 8,
    digits: 5,
    digitsInstant: 3,
    safeCollRatio: 1.5,
    maxSell: '1000000000000000',
    name: 'Wrapped Bitcoin',
    icon: wbtc,
    iconCircle: wbtc_circle_color,
    coinpaprikaTicker: 'wbtc-wrapped-bitcoin',
    coinGeckoId: 'wrapped-bitcoin',
    coinGeckoTicker: 'wrapped-bitcoin',
    color: '#f09242',
    background: 'linear-gradient(147.66deg, #FEF1E1 0%, #FDF2CA 88.25%)',
    tags: [],
    rootToken: 'BTC',
  },
  {
    symbol: 'MANA',
    precision: 18,
    digits: 5,
    name: 'Decentraland',
    icon: mana,
    iconCircle: mana_circle_color,
    color: '#f05',
    coinbaseTicker: 'mana-usd',
    coinGeckoId: 'decentraland',
    background: 'linear-gradient(160.26deg, #FFEAEA 5.25%, #FFF5EA 100%), #FFFFFF',
    tags: [],
  },
  {
    symbol: 'LINK',
    precision: 18,
    digits: 5,
    name: 'Chainlink',
    icon: chainlink,
    iconCircle: chainlink_circle_color,
    color: '#375bd2',
    coinbaseTicker: 'link-usd',
    coinGeckoId: 'chainlink',
    background: 'linear-gradient(160.47deg, #E0E8F5 0.35%, #F0FBFD 99.18%), #FFFFFF',
    tags: [],
  },
  {
    symbol: 'GUSD',
    precision: 2,
    digits: 2,
    name: 'Gemini dollar',
    icon: gemini,
    iconCircle: gemini_circle_color,
    color: '#25ddfb',
    coinpaprikaTicker: 'gusd-gemini-dollar',
    coinGeckoId: 'gemini-dollar',
    coinGeckoTicker: 'gemini-dollar',
    background: 'linear-gradient(158.87deg, #E2F7F9 0%, #D3F3F5 100%), #FFFFFF',
    tags: ['stablecoin'],
  },
  {
    symbol: 'YFI',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'Yearn',
    icon: usdc,
    iconCircle: yfi_circle_color,
    coinbaseTicker: 'yfi-usd',
    coinGeckoId: 'yearn-finance',
    color: '#0657f9',
    background: 'linear-gradient(160.47deg, #E0E8F5 0.35%, #F0FBFD 99.18%), #FFFFFF',
    tags: [],
  },
  {
    symbol: 'MATIC',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'MATIC',
    icon: matic_circle_color,
    iconCircle: matic_circle_color,
    color: '#ff077d',
    coinbaseTicker: 'matic-usd',
    coinGeckoId: 'polygon',
    background: 'linear-gradient(160.47deg, #F0F3FD 0.35%, #FCF0FD 99.18%), #FFFFFF',
    tags: [],
  },
  {
    symbol: 'UNIV2DAIETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2DAIETH',
    icon: deprecated_icon,
    iconCircle: deprecated_icon,
    color: '#ff077d',
    background: 'linear-gradient(160.47deg, #F0F3FD 0.35%, #FCF0FD 99.18%), #FFFFFF',
    tags: ['lp-token'],
  },
  {
    symbol: 'WSTETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'WSTETH',
    icon: wsteth_circle_color,
    iconCircle: wsteth_circle_color,
    coinGeckoTicker: 'wrapped-steth',
    coinGeckoId: 'wrapped-steth',
    color: '#ff077d',
    background: 'linear-gradient(158.87deg, #E2F7F9 0%, #D3F3F5 100%), #FFFFFF',
    tags: [],
    rootToken: 'ETH',
  },
  {
    symbol: 'CBETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'Coinbase Wrapped Staked ETH',
    icon: cbeth_circle_color,
    iconCircle: cbeth_circle_color,
    //TODO: replace with values provided by design team - so far content is duplicated from ETH
    color: '#667FE3',
    background: 'linear-gradient(160.47deg, #F0F3FD 0.35%, #FCF0FD 99.18%), #FFFFFF',
    coinbaseTicker: 'cbeth-usd',
    coinGeckoTicker: 'coinbase-wrapped-staked-eth',
    coinpaprikaTicker: 'cbeth-coinbase-wrapped-staked-eth',
    rootToken: 'ETH',
    tags: [],
  },
  {
    symbol: 'BAT',
    precision: 18,
    digits: 5,
    name: 'Basic Attention Token',
    icon: bat,
    iconCircle: bat_circle_color,
    color: '#ff4625',
    background: '',
    tags: [],
  },
  {
    symbol: 'RENBTC',
    precision: 8,
    digits: 5,
    digitsInstant: 3,
    safeCollRatio: 1.5,
    maxSell: '1000000000000000',
    name: 'renBTC',
    icon: renbtc_circle_color,
    iconCircle: renbtc_circle_color,
    coinpaprikaTicker: 'renbtc-renbtc',
    coinGeckoId: 'renbtc',
    color: '#838489',
    background: 'linear-gradient(160.47deg, #F1F5F5 0.35%, #E5E7E8 99.18%), #FFFFFF',
    tags: [],
    rootToken: 'BTC',
  },
  {
    symbol: 'TUSD',
    precision: 18,
    digits: 2,
    name: 'Trust token',
    icon: tusd,
    iconCircle: tusd_circle_color,
    color: '#195aff',
    background: '',
    tags: ['stablecoin'],
  },
  {
    symbol: 'KNC',
    precision: 18,
    digits: 5,
    name: 'Kyber Network',
    icon: kyber,
    iconCircle: kyber_circle_color,
    color: '#30cb9e',
    background: '',
    tags: [],
  },
  {
    symbol: 'PAXUSD',
    precision: 18,
    digits: 2,
    name: 'Paxos Standard',
    icon: pax,
    iconCircle: pax_circle_color,
    color: '#005121',
    background: '',
    tags: ['stablecoin'],
  },
  {
    symbol: 'USDT',
    precision: 6,
    digits: 2,
    name: 'Tether',
    icon: usdt,
    iconCircle: usdt_circle_color,
    color: '259c77',
    background: '',
    tags: ['stablecoin'],
    coinpaprikaTicker: 'usdt-tether',
    coinGeckoTicker: 'tether',
  },
  {
    symbol: 'COMP',
    precision: 18,
    digits: 5,
    name: 'Compound',
    icon: compound,
    iconCircle: compound_circle_color,
    color: '#00D395',
    background: '',
    tags: [],
  },
  {
    symbol: 'LRC',
    precision: 18,
    digits: 5,
    name: 'Loopring',
    icon: lrc,
    iconCircle: lrc_circle_color,
    color: '#1c60ff',
    background: '',
    tags: [],
  },
  {
    symbol: 'ZRX',
    precision: 18,
    digits: 5,
    name: '0x',
    icon: zerox,
    iconCircle: zerox_circle_color,
    color: '#000',
    background: '',
    tags: [],
  },
  {
    symbol: 'USDC',
    precision: 6,
    digits: 2,
    digitsInstant: 2,
    maxSell: '1000000000000000',
    name: 'USD Coin',
    icon: usdc,
    iconCircle: usdc_circle_color,
    coinpaprikaTicker: 'usdc-usd-coin',
    coinGeckoTicker: 'usd-coin',
    color: '#2775ca',
    background: 'linear-gradient(152.45deg, #0666CE 8.53%, #61A9F8 91.7%)',
    tags: ['stablecoin'],
  },
  {
    symbol: 'UNI',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'Uniswap',
    icon: uni_circle_color,
    iconCircle: uni_circle_color,
    color: '#ff077d',
    coinbaseTicker: 'uni-usd',
    background: 'linear-gradient(160.65deg, #FDEEF3 2.52%, #FFE6F5 101.43%), #FFFFFF',
    tags: [],
  },
  {
    symbol: 'AAVE',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'Aave',
    icon: aave_circle_color,
    iconCircle: aave_circle_color,
    color: '#ff077d',
    background: 'linear-gradient(286.73deg, #B6509E 2.03%, #2EBAC6 100%)',
    tags: [],
  },
  {
    symbol: 'UNIV2USDCETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2USDCETH',
    icon: univ2_usdc_eth_circles_color,
    iconCircle: univ2_usdc_eth_circles_color,
    color: '#ff077d',
    background: 'linear-gradient(160.47deg, #F0F3FD 0.35%, #FCF0FD 99.18%), #FFFFFF',
    tags: ['lp-token'],
  },
  {
    symbol: 'UNIV2DAIUSDC',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2DAIUSDC',
    icon: univ2_dai_usdc_circles_color,
    iconCircle: univ2_dai_usdc_circles_color,
    color: '#ff077d',
    background: 'linear-gradient(160.47deg, #E0E8F5 0.35%, #F0FBFD 99.18%), #FFFFFF',
    tags: ['lp-token'],
  },
  {
    symbol: 'UNIV2ETHUSDT',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2ETHUSDT',
    icon: univ2_eth_usdt_circles_color,
    iconCircle: univ2_eth_usdt_circles_color,
    color: '#ff077d',
    background: '',
    tags: ['lp-token'],
  },
  {
    symbol: 'UNIV2DAIUSDT',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'UNIV2DAIUSDT',
    icon: univ2_dai_usdt_circles_color,
    iconCircle: univ2_dai_usdt_circles_color,
    color: '#ff077d',
    background: '',
    tags: ['lp-token'],
  },
  {
    symbol: 'GUNIV3DAIUSDC1',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'GUNIV3 DAI / USDC 0.05%',
    icon: guniv3_dai_usdc1_circles_color,
    iconCircle: guniv3_dai_usdc1_circles_color,
    color: '#ff077d',
    background: 'linear-gradient(171.29deg, #FDDEF0 -2.46%, #FFF0F9 -2.45%, #FFF6F1 99.08%)',
    tags: ['lp-token'],
    token0: 'DAI',
    token1: 'USDC',
  },
  {
    symbol: 'GUNIV3DAIUSDC2',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'GUNIV3 DAI / USDC 0.01%',
    icon: guniv3_dai_usdc1_circles_color,
    iconCircle: guniv3_dai_usdc1_circles_color,
    color: '#ff077d',
    background: 'linear-gradient(171.29deg, #FDDEF0 -2.46%, #FFF0F9 -2.45%, #FFF6F1 99.08%)',
    tags: ['lp-token'],
    token0: 'DAI',
    token1: 'USDC',
  },
  {
    symbol: 'DAI',
    precision: 18,
    digits: 4,
    maxSell: '10000000',
    name: 'Dai',
    icon: dai,
    iconCircle: dai_circle_color,
    coinpaprikaTicker: 'dai-dai',
    coinGeckoTicker: 'dai',
    coinbaseTicker: 'dai-usd',
    color: '#fdc134',
    background: '',
    tags: ['stablecoin'],
  },
  {
    symbol: 'RETH',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'Rocket Pool ETH',
    icon: reth_circle_color,
    iconCircle: reth_circle_color,
    color: '#FFEAEA',
    coinGeckoTicker: 'rocket-pool-eth',
    background: 'linear-gradient(160.26deg, #FFEAEA 5.25%, #FFF5EA 100%)',
    rootToken: 'ETH',
    tags: [],
  },
  {
    symbol: 'GNO',
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: 'Gnosis',
    icon: gno_circle_color,
    iconCircle: gno_circle_color,
    color: '#FFEAEA',
    coinGeckoTicker: 'gnosis',
    background: '',
    tags: [],
  },
  {
    symbol: 'GHO',
    precision: 18,
    digits: 5,
    name: 'GHO',
    icon: gho_circle_color,
    iconCircle: gho_circle_color,
    color: '#C9B9EE',
    background: '',
    coinGeckoTicker: 'gho',
    coinpaprikaTicker: 'gho-gho',
    tags: ['stablecoin'],
  },
  {
    symbol: 'SDAI',
    precision: 18,
    digits: 4,
    name: 'Savings Dai',
    icon: gho_circle_color,
    iconCircle: sdai_circle_color,
    color: '#54ac3c',
    background: '',
    oracleTicker: 'sdai',
    rootToken: 'DAI',
    tags: [],
  },
  {
    symbol: 'TBTC',
    precision: 18,
    digits: 5,
    name: 'Threshold Bitcoin',
    icon: tbtc_circle_color,
    iconCircle: tbtc_circle_color,
    color: '#000000',
    background: '',
    coinbaseTicker: 'btc-usd',
    coinGeckoTicker: 'bitcoin',
    coinpaprikaTicker: 'btc-bitcoin',
    rootToken: 'BTC',
    tags: [],
  },
  {
    symbol: 'WLD',
    precision: 18,
    digits: 5,
    name: 'Worldcoin',
    icon: wld_circle_color,
    iconCircle: wld_circle_color,
    color: '#1e1e1c',
    background: '',
    coinGeckoTicker: 'worldcoin-wld',
    coinpaprikaTicker: 'wld-worldcoin',
    tags: [],
  },
  {
    symbol: 'YIELDETH',
    precision: 18,
    digits: 5,
    name: 'Real Yield ETH',
    icon: yieldeth_circle_color,
    iconCircle: yieldeth_circle_color,
    color: '#17438C',
    background: '',
    rootToken: 'ETH',
    tags: [],
  },
  {
    symbol: 'YIELDBTC',
    precision: 18,
    digits: 5,
    name: 'Real Yield BTC',
    icon: yieldbtc_circle_color,
    iconCircle: yieldbtc_circle_color,
    color: '#17438C',
    background: '',
    rootToken: 'BTC',
    tags: [],
  },
  {
    symbol: 'LUSD',
    precision: 18,
    digits: 5,
    name: 'Liquitity USD',
    icon: lusd_circle_color,
    iconCircle: lusd_circle_color,
    color: '#17438C',
    background: '',
    coinpaprikaTicker: 'lusd-liquity-usd',
    coinGeckoTicker: 'lusd',
    tags: ['stablecoin'],
  },
  {
    symbol: 'FRAX',
    precision: 18,
    digits: 5,
    name: 'Liquitity USD',
    icon: frax_circle_color,
    iconCircle: frax_circle_color,
    color: '#17438C',
    background: '',
    coinpaprikaTicker: 'frax-frax',
    coinGeckoTicker: 'frax',
    tags: ['stablecoin'],
  },
  {
    symbol: 'SPARK',
    precision: 18,
    digits: 5,
    name: 'Spark',
    icon: spark_circle_color,
    iconCircle: spark_circle_color,
    color: '#17438C',
    background: '',
    tags: ['stablecoin'],
  },
  {
    symbol: 'USDBC',
    precision: 6,
    digits: 2,
    name: 'USD Base Coin',
    icon: usdc_circle_color,
    iconCircle: usdc_circle_color,
    color: '#2775ca',
    background: '',
    coinbaseTicker: 'usd-base-coin',
    coinGeckoTicker: 'bridged-usd-coin-base',
    coinpaprikaTicker: 'usdbc-usd-base-coin',
    tags: ['stablecoin'],
  },
  ...deprecatedTokens.map((deprecatedToken) => ({
    symbol: deprecatedToken,
    precision: 18,
    digits: 5,
    digitsInstant: 2,
    name: deprecatedToken,
    icon: deprecated_icon,
    iconCircle: deprecated_icon,
    color: '#ff077d',
    background: 'linear-gradient(160.47deg, #F0F3FD 0.35%, #FCF0FD 99.18%), #FFFFFF',
    tags: [],
  })),
]
