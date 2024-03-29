import {
  OmniFormContentSummary,
  OmniFormFieldWithdraw,
} from 'features/omni-kit/components/sidebars'
import { OmniMultiplyFormOrder } from 'features/omni-kit/components/sidebars/multiply'
import { useOmniGeneralContext, useOmniProductContext } from 'features/omni-kit/contexts'
import { OmniProductType } from 'features/omni-kit/types'
import React from 'react'

export function OmniMultiplyFormContentWithdrawCollateral() {
  const {
    environment: { collateralPrice, collateralToken, collateralPrecision },
  } = useOmniGeneralContext()
  const {
    form: {
      dispatch,
      state: { withdrawAmount },
    },
    dynamicMetadata: {
      values: { withdrawMax },
    },
  } = useOmniProductContext(OmniProductType.Multiply)

  return (
    <>
      <OmniFormFieldWithdraw
        dispatchAmount={dispatch}
        maxAmount={withdrawMax}
        resetOnClear
        token={collateralToken}
        tokenPrice={collateralPrice}
        tokenPrecision={collateralPrecision}
      />
      {/* DISABLED: We're currently unable to support this operation
       * in the library based on existing operation if the LTV increases
       * added to product continuous improvements backlog
       * https://app.shortcut.com/oazo-apps/story/10552/multiply-withdrawal-ltv-increases-are-not-supported-in-operation
       */}
      {/*<PillAccordion title={t('adjust-your-position-additional')}>*/}
      {/*  <AjnaMultiplySlider disabled={!withdrawAmount} />*/}
      {/*</PillAccordion>*/}
      {withdrawAmount && (
        <OmniFormContentSummary>
          <OmniMultiplyFormOrder />
        </OmniFormContentSummary>
      )}
    </>
  )
}
