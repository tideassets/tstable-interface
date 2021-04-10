import { BigNumber } from 'bignumber.js'
import { ManageVaultView } from 'features/manageVault/ManageVaultView'
import { one } from 'helpers/zero'

import { manageVaultStory } from './ManageVaultBuilder'

export const Default = manageVaultStory({
  title:
    'Default ManageVault Story. Vault is empty, user has a proxy address and is the vault controller.',
})

export const CollateralEditingStage = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  depositAmount: new BigNumber('2'),
  generateAmount: new BigNumber('300'),
  showDepositAndGenerateOption: true,
  balanceInfo: { collateralBalance: new BigNumber('2000') },
  proxyAddress: '0xProxyAddress',
  stage: 'collateralEditing',
})

export const DaiEditingStage = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  depositAmount: new BigNumber('2'),
  generateAmount: new BigNumber('300'),
  showDepositAndGenerateOption: true,
  balanceInfo: { collateralBalance: new BigNumber('200') },
  proxyAddress: '0xProxyAddress',
  stage: 'daiEditing',
})

export const ProxyWaitingForConfirmation = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  depositAmount: new BigNumber('2'),
  generateAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200') },
  stage: 'proxyWaitingForConfirmation',
})

export const ProxyWaitingForApproval = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  depositAmount: new BigNumber('2'),
  generateAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200') },
  stage: 'proxyWaitingForApproval',
})

export const ProxyFailure = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  depositAmount: new BigNumber('2'),
  generateAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200') },
  stage: 'proxyFailure',
})

export const ProxyInProgress = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  depositAmount: new BigNumber('2'),
  generateAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200') },
  stage: 'proxyInProgress',
})

export const ProxySuccess = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  depositAmount: new BigNumber('2'),
  generateAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200') },
  stage: 'proxySuccess',
})

export const CollateralAllowanceWaitingForConfirmation = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  depositAmount: new BigNumber('2'),
  generateAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200') },
  proxyAddress: '0xProxyAddress',
  stage: 'collateralAllowanceWaitingForConfirmation',
})

export const CollateralAllowanceWaitingForApproval = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  depositAmount: new BigNumber('2'),
  generateAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200') },
  proxyAddress: '0xProxyAddress',
  stage: 'collateralAllowanceWaitingForApproval',
})

export const CollateralAllowanceFailure = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  depositAmount: new BigNumber('2'),
  generateAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200') },
  proxyAddress: '0xProxyAddress',
  stage: 'collateralAllowanceFailure',
})

export const CollateralAllowanceInProgress = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  depositAmount: new BigNumber('2'),
  generateAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200') },
  proxyAddress: '0xProxyAddress',
  stage: 'collateralAllowanceInProgress',
})

export const CollateralAllowanceSuccess = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  depositAmount: new BigNumber('2'),
  generateAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200') },
  proxyAddress: '0xProxyAddress',
  stage: 'collateralAllowanceSuccess',
})

export const DaiAllowanceWaitingForConfirmation = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  withdrawAmount: new BigNumber('0.5'),
  paybackAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200'), daiBalance: new BigNumber('1000') },
  proxyAddress: '0xProxyAddress',
  stage: 'daiAllowanceWaitingForConfirmation',
})

export const DaiAllowanceWaitingForApproval = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  withdrawAmount: new BigNumber('0.5'),
  paybackAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200'), daiBalance: new BigNumber('1000') },
  proxyAddress: '0xProxyAddress',
  stage: 'daiAllowanceWaitingForApproval',
})

export const DaiAllowanceFailure = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  withdrawAmount: new BigNumber('0.5'),
  paybackAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200'), daiBalance: new BigNumber('1000') },
  proxyAddress: '0xProxyAddress',
  stage: 'daiAllowanceFailure',
})

export const DaiAllowanceInProgress = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  withdrawAmount: new BigNumber('0.5'),
  paybackAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200'), daiBalance: new BigNumber('1000') },
  proxyAddress: '0xProxyAddress',
  stage: 'daiAllowanceInProgress',
})

export const DaiAllowanceSuccess = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  withdrawAmount: new BigNumber('0.5'),
  paybackAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200'), daiBalance: new BigNumber('1000') },
  proxyAddress: '0xProxyAddress',
  stage: 'daiAllowanceSuccess',
})

export const ManageWaitingForConfirmation = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  withdrawAmount: new BigNumber('0.5'),
  paybackAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200'), daiBalance: new BigNumber('1000') },
  proxyAddress: '0xProxyAddress',
  stage: 'manageWaitingForConfirmation',
})

export const ManageWaitingForApproval = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  withdrawAmount: new BigNumber('0.5'),
  paybackAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200'), daiBalance: new BigNumber('1000') },
  proxyAddress: '0xProxyAddress',
  stage: 'manageWaitingForApproval',
})

export const ManageFailure = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  withdrawAmount: new BigNumber('0.5'),
  paybackAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200'), daiBalance: new BigNumber('1000') },
  proxyAddress: '0xProxyAddress',
  stage: 'manageFailure',
})

export const ManageInProgress = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  withdrawAmount: new BigNumber('0.5'),
  paybackAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200'), daiBalance: new BigNumber('1000') },
  proxyAddress: '0xProxyAddress',
  stage: 'manageInProgress',
})

export const ManageSuccess = manageVaultStory({
  ilk: 'WBTC-A',
  collateral: one,
  debt: new BigNumber('3000'),
  withdrawAmount: new BigNumber('0.5'),
  paybackAmount: new BigNumber('300'),
  balanceInfo: { collateralBalance: new BigNumber('200'), daiBalance: new BigNumber('1000') },
  proxyAddress: '0xProxyAddress',
  stage: 'manageSuccess',
})

/* export const VaultAtRisk = createStory({
 *   ilk: 'ETH-A',
 *   collateral: one,
 *   debt: new BigNumber('4000'),
 *   withdrawAmount: new BigNumber('0.5'),
 *   paybackAmount: new BigNumber('300'),
 *   balanceInfo: { collateralBalance: new BigNumber('200'), daiBalance: new BigNumber('1000') },
 *   proxyAddress: '0xProxyAddress',
 *   stage: 'collateralEditing',
 * })
 *
 * export const ShouldPaybackAll = createStory({
 *   title: `If the amount in the paybackAmount field is between ${PAYBACK_ALL_BOUND} DAI of the outstanding debt in a vault, the shouldPaybackAll flag should be indicated as true. A warning message should also show to indicate to the user that this action should leave their vault with a debt of 0`,
 *   ilk: 'WBTC-A',
 *   stage: 'daiEditing',
 *   collateral: one,
 *   debt: new BigNumber('3000'),
 *   paybackAmount: new BigNumber('2999'),
 *   balanceInfo: { collateralBalance: new BigNumber('2000'), daiBalance: new BigNumber('10000') },
 *   proxyAddress: '0xProxyAddress',
 * })
 *  */
// eslint-disable-next-line import/no-default-export
export default {
  title: 'ManageVault/Stages',
  component: ManageVaultView,
}
