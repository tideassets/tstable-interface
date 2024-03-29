import type { AjnaPosition } from '@oasisdex/dma-library'
import { protocols } from '@oasisdex/dma-library'
import BigNumber from 'bignumber.js'

interface AjnaBorrowCollateralMaxParams {
  collateralPrecision: number
  position: AjnaPosition
  simulation?: AjnaPosition
}

export function getAjnaBorrowWithdrawMax({
  collateralPrecision,
  position: {
    collateralAmount,
    debtAmount,
    pool: { lowestUtilizedPrice },
  },
  simulation,
}: AjnaBorrowCollateralMaxParams) {
  const resolvedDebtAmount = simulation?.debtAmount || debtAmount
  const resolvedLowestUtilizedPrice = simulation?.pool.lowestUtilizedPrice || lowestUtilizedPrice

  return collateralAmount
    .minus(
      resolvedDebtAmount
        .times(protocols.ajna.ajnaCollateralizationFactor)
        .div(resolvedLowestUtilizedPrice),
    )
    .decimalPlaces(collateralPrecision, BigNumber.ROUND_DOWN)
}
