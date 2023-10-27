import { extractLendingProtocolFromPositionCreatedEvent } from 'features/aave/services'
import { AJNA_BORROWISH_PRODUCTS } from 'features/ajna/common/consts'
import type { AjnaProduct } from 'features/ajna/common/types'
import { LendingProtocol } from 'lendingProtocols'
import type { CreatePositionEvent } from 'types/ethers-contracts/AjnaProxyActions'

interface AjnaFlowStateFilterParams {
  collateralAddress: string
  event: CreatePositionEvent
  productType: AjnaProduct
  quoteAddress: string
}
interface GetAjnaFlowStateFilterParams extends Omit<AjnaFlowStateFilterParams, 'event'> {
  events: CreatePositionEvent[]
}

export function ajnaFlowStateFilter({
  collateralAddress,
  event,
  productType,
  quoteAddress,
}: AjnaFlowStateFilterParams): boolean {
  return (
    extractLendingProtocolFromPositionCreatedEvent(event) === LendingProtocol.Ajna &&
    collateralAddress.toLowerCase() === event.args.collateralToken.toLowerCase() &&
    quoteAddress.toLocaleLowerCase() === event.args.debtToken.toLowerCase() &&
    (productType.toLowerCase() === event.args.positionType.toLowerCase() ||
      (AJNA_BORROWISH_PRODUCTS.includes(productType) &&
        AJNA_BORROWISH_PRODUCTS.includes(event.args.positionType.toLowerCase() as AjnaProduct)))
  )
}

export function getAjnaFlowStateFilter({ events, ...rest }: GetAjnaFlowStateFilterParams): boolean {
  return events.every((event) => !ajnaFlowStateFilter({ event, ...rest }))
}
