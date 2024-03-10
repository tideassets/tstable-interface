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
import * as exchange from 'blockchain/abi/exchange.json'
import * as getCdps from 'blockchain/abi/get-cdps.json'
import * as lidoCrvLiquidityFarmingReward from 'blockchain/abi/lido-crv-liquidity-farming-reward.json'
import * as otc from 'blockchain/abi/matching-market.json'
import * as mcdDog from 'blockchain/abi/mcd-dog.json'
import * as mcdEnd from 'blockchain/abi/mcd-end.json'
import * as mcdJoinDai from 'blockchain/abi/mcd-join-dai.json'
import * as mcdJug from 'blockchain/abi/mcd-jug.json'
import * as mcdPot from 'blockchain/abi/mcd-pot.json'
import * as mcdSpot from 'blockchain/abi/mcd-spot.json'
import * as merkleRedeemer from 'blockchain/abi/merkle-redeemer.json'
import * as morphoBlue from 'blockchain/abi/morpho-blue.json'
import * as dssMultiplyProxyActions from 'blockchain/abi/multiply-proxy-actions.json'
import * as operationExecutor from 'blockchain/abi/operation-executor.json'
import * as otcSupport from 'blockchain/abi/otc-support-methods.json'
import * as vat from 'blockchain/abi/vat.json'
import {
  getCollateralJoinContracts,
  getCollaterals,
  getOsms,
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
  tokens: tokensArbitrum,
  tokensMainnet: mainnetContracts.tokensMainnet, // use in mutiplier, not in borrow
  joins: {
    // todo:
    ...getCollateralJoinContracts(
      arbitrum.maker.joins,
      supportedIlks.filter(
        // these are not supported on goerli
        (ilk) => !['GUNIV3DAIUSDC1-A', 'GUNIV3DAIUSDC2-A', 'GNO-A'].includes(ilk),
      ),
    ),
  },
  getCdps: emptyContractDesc2(getCdps, arbitrum.maker.common.GetCdps), // todo:
  mcdOsms: getOsms(arbitrum.maker.pips, supportedIlks), // todo:
  mcdJug: emptyContractDesc2(mcdJug, arbitrum.maker.common.Jug), // todo:
  mcdPot: emptyContractDesc2(mcdPot, arbitrum.maker.common.Pot), // todo:
  mcdEnd: emptyContractDesc2(mcdEnd, arbitrum.maker.common.End), // todo:
  mcdSpot: emptyContractDesc2(mcdSpot, arbitrum.maker.common.Spot), // todo:
  mcdDog: emptyContractDesc2(mcdDog, arbitrum.maker.common.Dog), // todo:
  mcdJoinDai: emptyContractDesc2(mcdJoinDai, arbitrum.maker.joins.MCD_JOIN_DAI), // todo:

  merkleRedeemer: emptyContractDesc2(merkleRedeemer, arbitrum.common.MerkleRedeemer), // use in refferal
  dssCharter: emptyContractDesc2(dssCharter, arbitrum.common.DssCharter), // not use
  dssCdpManager: emptyContractDesc2(dssCdpManager, arbitrum.maker.common.CdpManager), // todo:
  otcSupportMethods: emptyContractDesc2(otcSupport, arbitrum.common.OtcSupportMethods),
  vat: emptyContractDesc2(vat, arbitrum.maker.common.Vat), // todo:
  dsProxyRegistry: emptyContractDesc2(dsProxyRegistry, arbitrum.mpa.core.DSProxyRegistry), // todo:
  dsProxyFactory: emptyContractDesc2(dsProxyFactory, arbitrum.mpa.core.DSProxyFactory), // todo:
  dssProxyActions: emptyContractDesc2(dssProxyActions, arbitrum.common.DssProxyActions), // todo:
  dssProxyActionsCharter: emptyContractDesc2(
    // not use
    dssProxyActionsCharter,
    arbitrum.common.DssProxyActionsCharter,
  ),
  cdpRegistry: emptyContractDesc2(cdpRegistry, arbitrum.common.CdpRegistry), // todo:
  dssProxyActionsCropjoin: emptyContractDesc2( // not use
    // not use
    dssProxyActionsCropjoin,
    arbitrum.common.DssProxyActionsCropjoin,
  ),
  dssMultiplyProxyActions: emptyContractDesc2( // todo:
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
  dssProxyActionsDsr: emptyContractDesc2(dssProxyActionsDsr, arbitrum.common.DssProxyActionsDsr),
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
    USDCUSD: emptyContractDesc2(chainLinkPriceOracle, arbitrum.common.ChainlinkPriceOracle_USDCUSD),
    ETHUSD: emptyContractDesc2(chainLinkPriceOracle, arbitrum.common.ChainlinkPriceOracle_ETHUSD),
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
