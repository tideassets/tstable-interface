import BigNumber from 'bignumber.js'
import { getNetworkContracts } from 'blockchain/contracts'
import type { MainnetContracts } from 'blockchain/contracts/mainnet'
import { mainnetContracts } from 'blockchain/contracts/mainnet'
import { getRpcProvider, NetworkIds } from 'blockchain/networks'
import { amountFromWei } from 'blockchain/utils'
import { warnIfAddressIsZero } from 'helpers/warnIfAddressIsZero'
import { ChainlinkPriceOracle__factory } from 'types/ethers-contracts'

const USD_CHAINLINK_PRECISION = 8

export type ChainlinkSupportedNetworks =
  | NetworkIds.MAINNET
  | NetworkIds.OPTIMISMMAINNET
  | NetworkIds.ARBITRUMMAINNET
  | NetworkIds.BASEMAINNET

const factory = ChainlinkPriceOracle__factory

export function getChainlinkOraclePrice(
  contractName: keyof MainnetContracts['chainlinkPriceOracle'],
  networkId: ChainlinkSupportedNetworks,
): Promise<BigNumber> {
  if (networkId === NetworkIds.BASEMAINNET) {
    return Promise.resolve(new BigNumber(1))
  }
  if (
    !contractName ||
    !mainnetContracts['chainlinkPriceOracle'][contractName] ||
    !getNetworkContracts(networkId)?.chainlinkPriceOracle[contractName]
  ) {
    throw new Error(`ChainlinkPriceOracle ${contractName} not found`)
  }

  const address = getNetworkContracts(networkId).chainlinkPriceOracle[contractName].address
  warnIfAddressIsZero(address, networkId, 'chainlinkPriceOracle', contractName)
  const contract = factory.connect(address, getRpcProvider(networkId))

  return contract.latestAnswer().then((result) => {
    return amountFromWei(new BigNumber(result.toString()), USD_CHAINLINK_PRECISION)
  })
}
