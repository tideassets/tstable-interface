import { ADDRESSES } from '@oasisdex/addresses'
import * as aaveV2PriceOracle from 'blockchain/abi/aave-v2-price-oracle.json'
import * as aaveV2ProtocolDataProvider from 'blockchain/abi/aave-v2-protocol-data-provider.json'
import * as aaveV3Oracle from 'blockchain/abi/aave-v3-oracle.json'
import * as aaveV3Pool from 'blockchain/abi/aave-v3-pool.json'
import * as aaveV3PoolDataProvider from 'blockchain/abi/aave-v3-pool-data-provider.json'
import * as accountFactory from 'blockchain/abi/account-factory.json'
import * as accountGuard from 'blockchain/abi/account-guard.json'
import * as ajnaBonusRedeemer from 'blockchain/abi/ajna-bonus-redeemer.json'
import * as ajnaERC20PoolFactory from 'blockchain/abi/ajna-erc20-pool-factory.json'
import * as ajnaPool from 'blockchain/abi/ajna-pool.json'
import * as ajnaPoolInfo from 'blockchain/abi/ajna-pool-info.json'
import * as ajnaProxyActions from 'blockchain/abi/ajna-proxy-actions.json'
import * as ajnaReedemer from 'blockchain/abi/ajna-reedemer.json'
import * as automationBot from 'blockchain/abi/automation-bot.json'
import * as automationBotAggregator from 'blockchain/abi/automation-bot-aggregator.json'
import * as automationBotV2 from 'blockchain/abi/automation-bot-v2.json'
import * as balancerVault from 'blockchain/abi/balancer-vault.json'
import * as cdpRegistry from 'blockchain/abi/cdp-registry.json'
import * as chainLinkPriceOracle from 'blockchain/abi/chainlink-price-oracle.json'
import * as dsProxyFactory from 'blockchain/abi/ds-proxy-factory.json'
import * as dsProxyRegistry from 'blockchain/abi/ds-proxy-registry.json'
import * as dssCdpManager from 'blockchain/abi/dss-cdp-manager.json'
import * as dssCharter from 'blockchain/abi/dss-charter.json'
import * as dssCropper from 'blockchain/abi/dss-cropper.json'
import * as guniProxyActions from 'blockchain/abi/dss-guni-proxy-actions.json'
import * as dssProxyActions from 'blockchain/abi/dss-proxy-actions.json'
import * as dssProxyActionsCharter from 'blockchain/abi/dss-proxy-actions-charter.json'
import * as dssProxyActionsCropjoin from 'blockchain/abi/dss-proxy-actions-cropjoin.json'
import * as dssProxyActionsDsr from 'blockchain/abi/dss-proxy-actions-dsr.json'
import * as erc20 from 'blockchain/abi/erc20.json'
import * as exchange from 'blockchain/abi/exchange.json'
import * as getCdps from 'blockchain/abi/get-cdps.json'
import * as lidoCrvLiquidityFarmingReward from 'blockchain/abi/lido-crv-liquidity-farming-reward.json'
import * as otc from 'blockchain/abi/matching-market.json'
import * as mcdDai from 'blockchain/abi/mcd-dai.json'
import * as mcdDog from 'blockchain/abi/mcd-dog.json'
import * as mcdEnd from 'blockchain/abi/mcd-end.json'
import * as mcdJoinDai from 'blockchain/abi/mcd-join-dai.json'
import * as mcdJug from 'blockchain/abi/mcd-jug.json'
import * as mcdOsm from 'blockchain/abi/mcd-osm.json'
import * as mcdPot from 'blockchain/abi/mcd-pot.json'
import * as mcdSpot from 'blockchain/abi/mcd-spot.json'
import * as merkleRedeemer from 'blockchain/abi/merkle-redeemer.json'
import * as morphoBlue from 'blockchain/abi/morpho-blue.json'
import * as dssMultiplyProxyActions from 'blockchain/abi/multiply-proxy-actions.json'
import * as operationExecutor from 'blockchain/abi/operation-executor.json'
import * as otcSupport from 'blockchain/abi/otc-support-methods.json'
import * as vat from 'blockchain/abi/vat.json'
import {
  // getCollateralJoinContracts,
  getCollaterals,
  // getOsms,
} from 'blockchain/addresses/addressesUtils'
import { contractDesc, emptyContractDesc, emptyContractDesc2 } from 'blockchain/networks'
import { tokensArbitrum } from 'blockchain/tokens/'
import { AAVE_V3_POOL_GENESIS_GOERLI } from 'blockchain/tokens/arbitrum'
import { supportedIlks } from 'blockchain/tokens/mainnet'
import { etherscanAPIKey } from 'config/runtimeConfig'

import type { MainnetContractsWithOptional } from './mainnet'
import { mainnetContracts } from './mainnet'

const { arbitrum } = ADDRESSES

export const arbitrumSepoliaContracts: MainnetContractsWithOptional = {
  otc: emptyContractDesc2(otc, arbitrum.common.Otc),
  collaterals: getCollaterals(arbitrum.common, supportedIlks), // nouse
  tokens: {
    ETH: contractDesc(erc20, '0xceBD1a3E9aaD7E60eDD509809e7f9cFF449b7851'),
    WETH: contractDesc(erc20, '0xceBD1a3E9aaD7E60eDD509809e7f9cFF449b7851'),
    USDC: contractDesc(erc20, '0x39E618D761fdD06bF65065d2974128aAeC7b3Fed'),
    WBTC: contractDesc(erc20, '0x4Ac0ED77C4375D48B51D56cc49b7710c3640b9c2'),
    DAI: contractDesc(erc20, '0x9714e454274dC66BE57FA8361233221a376f4C2e'),
  },
  tokensMainnet: mainnetContracts.tokensMainnet, // use in mutiplier, not in borrow
  joins: {
    'ETH-A': '0x6904819Dc93F820a106572125DcFab2d43cd2f95',
    'ETH-B': '0x5199883969dc50AA3cDEE614C04c46d1b63BB962',
    'ETH-C': '0x1392366091ad3d1C94465b24eb07862d1A79035D',
    'USDC-A': '0xE2bac20dce148219E0B331000ecd3424aF2773Fe',
    'USDC-B': '0x6662eD37bCC5D4170af5F5547f0Ec8f62F20F0ae',
    'WBTC-A': '0x8A6B06fEAEb43D0Ce39eeE0c4e89Cb4d6153504b',
    'WBTC-B': '0xB3E08Cd6d41cAa75064fC1606A0f7249FD160644',
    'WBTC-C': '0x480f27AD3Be664805C5DBB8205e70FE45f52e74A',
    // ...getCollateralJoinContracts(
    //   arbitrum.maker.joins,
    //   supportedIlks.filter(
    //     // these are not supported on goerli
    //     (ilk) => !['GUNIV3DAIUSDC1-A', 'GUNIV3DAIUSDC2-A', 'GNO-A'].includes(ilk),
    //   ),
    // ),
  },
  getCdps: contractDesc(getCdps, '0xaed99174a11499d6b04c9750f94E6814bF0AF773'),
  // mcdOsms: getOsms(arbitrum.maker.pips, supportedIlks),
  mcdOsms: {
    ETH: contractDesc(mcdOsm, '0x627739908377A4AdF99387536e27d456d99617E6'),
    USDC: contractDesc(mcdOsm, '0xD642A328c0614d4f23f9aC6abED75403C442E58c'),
    WBTC: contractDesc(mcdOsm, '0x1362a254BcaDfEF64F81258CE423A8A2d766ffb5'),
  },
  mcdJug: contractDesc(mcdJug, '0x7691624b503821B1cef62F0C449A0377A54851A8'),
  mcdPot: contractDesc(mcdPot, '0x26D4E18dc289E7A018afb8266cEb4051E416F03E'),
  mcdEnd: contractDesc(mcdEnd, '0x793B2e0238b5F82CEb5148E9e45c564fd4693ABD'),
  mcdSpot: contractDesc(mcdSpot, '0x127703382d085D0782B7f3265397f8DF241fBC98'),
  mcdDog: contractDesc(mcdDog, '0x8894E48f58385f0B8C470D726341D0bb88ffC706'),
  mcdJoinDai: contractDesc(mcdJoinDai, '0xacd0Fff9B9005F9E7d49851Aab528964D0018200'),

  merkleRedeemer: emptyContractDesc2(merkleRedeemer, arbitrum.common.MerkleRedeemer), // use in refferal
  dssCharter: emptyContractDesc2(dssCharter, arbitrum.common.DssCharter), // not use
  dssCdpManager: contractDesc(dssCdpManager, '0x5238708EAa13395B622F428191efdAf2307dFFb2'),
  otcSupportMethods: emptyContractDesc2(otcSupport, arbitrum.common.OtcSupportMethods),
  vat: contractDesc(vat, '0x53139FEe446B5493b0546FF7D2634FB7306e839c'),
  dsProxyRegistry: contractDesc(dsProxyRegistry, '0x7Cf0a2A043215c8D632a396d922f9fA77005A4eF'),
  dsProxyFactory: contractDesc(dsProxyFactory, '0x579b4906F5E08701d92Cf1486511CB1A722c3397'),
  dssProxyActions: contractDesc(dssProxyActions, '0xD067f0242b7580eB8036032AA14480daa8c6fF8B'), //todo:
  dssProxyActionsCharter: emptyContractDesc2(
    // not use
    dssProxyActionsCharter,
    arbitrum.common.DssProxyActionsCharter,
  ),
  cdpRegistry: emptyContractDesc2(cdpRegistry, arbitrum.common.CdpRegistry),
  dssProxyActionsCropjoin: emptyContractDesc2(
    // not use
    // not use
    dssProxyActionsCropjoin,
    arbitrum.common.DssProxyActionsCropjoin,
  ),
  dssMultiplyProxyActions: emptyContractDesc2(
    dssMultiplyProxyActions,
    arbitrum.common.DssMultiplyProxyActions,
  ),
  guniProxyActions: emptyContractDesc2(guniProxyActions, arbitrum.common.GuniProxyActions), // TODO: add address
  dssCropper: emptyContractDesc2(dssCropper, arbitrum.common.DssCropper), // not use
  guniResolver: arbitrum.common.GuniResolver,
  guniRouter: arbitrum.common.GuniRouter,

  automationBot: emptyContractDesc2(automationBot, arbitrum.automation.AutomationBot),
  automationBotV2: emptyContractDesc2(automationBotV2, arbitrum.automation.AutomationBotV2),
  automationBotAggregator: emptyContractDesc2(
    automationBotAggregator,
    arbitrum.automation.AutomationBotAggregator,
  ),

  serviceRegistry: arbitrum.common.ServiceRegistry,
  defaultExchange: emptyContractDesc2(exchange, arbitrum.common.DefaultExchange),
  noFeesExchange: emptyContractDesc2(exchange, arbitrum.common.NoFeesExchange),
  lowerFeesExchange: emptyContractDesc2(exchange, arbitrum.common.LowerFeesExchange),
  // Currently this is not supported on Goerli - no deployed contract
  fmm: arbitrum.maker.common.FlashMintModule,
  dssProxyActionsDsr: contractDesc(
    dssProxyActionsDsr,
    '0xf0c3cb5425a4738ed47d5c24358673f75e9116f8',
  ),
  lidoCrvLiquidityFarmingReward: emptyContractDesc2(
    lidoCrvLiquidityFarmingReward,
    arbitrum.common.LidoCrvLiquidityFarmingReward,
  ),
  aaveTokens: {},
  aaveV2ProtocolDataProvider: emptyContractDesc2(
    aaveV2ProtocolDataProvider,
    arbitrum.aave.v2.PoolDataProvider,
  ),
  aaveV2PriceOracle: emptyContractDesc2(aaveV2PriceOracle, arbitrum.aave.v2.Oracle),
  chainlinkPriceOracle: {
    USDCUSD: contractDesc(chainLinkPriceOracle, '0x0153002d20B96532C639313c2d54c3dA09109309'),
    ETHUSD: contractDesc(chainLinkPriceOracle, '0xd30e2101a97dcbAeBCBC04F14C3f624E67A35165'),
  },
  aaveV2LendingPool: emptyContractDesc('aaveV2LendingPool'),

  operationExecutor: emptyContractDesc2(operationExecutor, arbitrum.mpa.core.OperationExecutor),
  swapAddress: arbitrum.mpa.core.Swap,
  accountFactory: emptyContractDesc2(accountFactory, arbitrum.mpa.core.AccountFactory),
  accountGuard: emptyContractDesc2(accountGuard, arbitrum.mpa.core.AccountGuard),
  aaveV3Pool: emptyContractDesc2(
    aaveV3Pool,
    arbitrum.aave.v3.LendingPool,
    AAVE_V3_POOL_GENESIS_GOERLI,
  ),
  aaveV3Oracle: emptyContractDesc2(aaveV3Oracle, arbitrum.aave.v3.Oracle),
  aaveV3PoolDataProvider: emptyContractDesc2(
    aaveV3PoolDataProvider,
    arbitrum.aave.v3.PoolDataProvider,
  ),
  ajnaPoolInfo: emptyContractDesc2(ajnaPoolInfo, arbitrum.ajna.AjnaPoolInfo),
  ajnaProxyActions: emptyContractDesc2(ajnaProxyActions, arbitrum.ajna.AjnaProxyActions),
  ajnaPoolPairs: {
    'CBETH-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_CBETHETH),
    'CBETH-GHO': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_CBETHGHO),
    'ETH-DAI': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_ETHDAI),
    'ETH-GHO': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_ETHGHO),
    'ETH-USDC': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_ETHUSDC),
    'GHO-DAI': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_GHODAI),
    'RETH-DAI': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_RETHDAI),
    'RETH-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_RETHETH),
    'CBETH-USDBC': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_CBETHUSDBC),
    'RETH-GHO': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_RETHGHO),
    'RETH-USDC': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_RETHUSDC),
    'SDAI-USDC': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_SDAIUSDC),
    'TBTC-USDC': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_TBTCUSDC),
    'TBTC-WBTC': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_TBTCWBTC),
    'USDC-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_USDCETH),
    'USDC-WBTC': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_USDCWBTC),
    'USDC-WLD': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_USDCWLD),
    'WBTC-DAI': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_WBTCDAI),
    'WBTC-GHO': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_WBTCGHO),
    'WBTC-USDC': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_WBTCUSDC),
    'WLD-USDC': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_WLDUSDC),
    'WSTETH-DAI': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_WSTETHDAI),
    'WSTETH-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_WSTETHETH),
    'WSTETH-GHO': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_WSTETHGHO),
    'WSTETH-USDC': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_WSTETHUSDC),
    'YFI-DAI': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_YFIDAI),
    'STYETH-DAI': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_STYETHDAI),
    'RBN-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_RBNETH),
    'AJNA-DAI': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_AJNADAI),
    'MKR-DAI': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_MKRDAI),
    'ARB-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_ARBETH),
    'ARB-USDC': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_ARBUSDC),
    'OP-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_OPETH),
    'OP-USDC': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_OPUSDC),
    'MEVETH-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_MEVETHWETH),
    'XETH-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_XETHWETH),
    'DETH-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_DETHWETH),
    'UNIETH-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_UNIETHWETH),
    'EZETH-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_EZETHWETH),
  },
  ajnaOraclessPoolPairs: {
    'YVCURVEUSDMSDAIF-DAI': emptyContractDesc2(
      ajnaPool,
      arbitrum.ajna.AjnaPoolPairs_YVCURVEUSDMSDAIFDAI,
    ),
    'MWSTETHWPUNKS20-WSTETH': emptyContractDesc2(
      ajnaPool,
      arbitrum.ajna.AjnaPoolPairs_MWSTETHWPUNKS20WSTETH,
    ),
    'MWSTETHWPUNKS40-WSTETH': emptyContractDesc2(
      ajnaPool,
      arbitrum.ajna.AjnaPoolPairs_MWSTETHWPUNKS40WSTETH,
    ),
    'APXETH-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_APXETHETH),
    'SUSDE-DAI': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_SUSDEDAI),
    'MPETH-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_MPETHWETH),
    'CSETH-ETH': emptyContractDesc2(ajnaPool, arbitrum.ajna.AjnaPoolPairs_CSETHWETH),
  },
  ajnaERC20PoolFactory: emptyContractDesc2(ajnaERC20PoolFactory, arbitrum.ajna.ERC20PoolFactory),
  ajnaRedeemer: emptyContractDesc2(ajnaReedemer, arbitrum.ajna.AjnaRewardsReedemer),
  ajnaBonusRedeemer: emptyContractDesc2(ajnaBonusRedeemer, arbitrum.ajna.AjnaBonusRewardsReedemer),
  morphoBlue: emptyContractDesc2(morphoBlue, arbitrum.morphoblue.MorphoBlue),
  adaptiveCurveIrm: emptyContractDesc2(morphoBlue, arbitrum.morphoblue.AdaptiveCurveIrm),
  balancerVault: emptyContractDesc2(balancerVault, arbitrum.common.BalancerVault),
  // NOT contracts
  cacheApi: 'not-implemented',
  safeConfirmations: 6,
  openVaultSafeConfirmations: 6,
  taxProxyRegistries: [],
  etherscan: {
    url: 'https://sepolia.arbiscan.io',
    apiUrl: 'https://api.sepolia.arbiscan.io/api',
    apiKey: etherscanAPIKey || '',
    name: 'Sepolia Arbiscan',
  },
  magicLink: {
    apiKey: '',
  },
  SdaiOracle: emptyContractDesc2(ajnaPoolInfo, arbitrum.common.SdaiOracle),
  WSTETHOracle: emptyContractDesc2(ajnaPoolInfo, arbitrum.common.WSTETHOracle),
}
