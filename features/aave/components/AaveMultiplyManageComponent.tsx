import { IPosition } from '@oasisdex/dma-library'
import BigNumber from 'bignumber.js'
import { useAaveContext } from 'features/aave'
import { supportsAaveStopLoss } from 'features/aave/helpers/supportsAaveStopLoss'
import { IStrategyConfig } from 'features/aave/types'
import { isSupportedAaveAutomationTokenPair } from 'features/automation/common/helpers'
import { AppSpinner, WithLoadingIndicator } from 'helpers/AppSpinner'
import { WithErrorHandler } from 'helpers/errorHandlers/WithErrorHandler'
import { useObservable } from 'helpers/observableHook'
import React from 'react'

import { AaveMultiplyPositionData } from './AaveMultiplyPositionData'

export type AaveManageComponentProps = {
  isOpenView?: boolean
  currentPosition?: IPosition
  nextPosition?: IPosition
  strategyConfig: IStrategyConfig
  collateralPrice?: BigNumber
  tokenPrice?: BigNumber
  debtPrice?: BigNumber
  dpmProxy?: string
}

export function AaveMultiplyManageComponent({
  currentPosition,
  collateralPrice,
  debtPrice,
  strategyConfig,
  nextPosition,
  dpmProxy,
  isOpenView,
}: AaveManageComponentProps) {
  const { getAaveReserveData$, aaveReserveConfigurationData$, aaveHistory$ } = useAaveContext(
    strategyConfig.protocol,
    strategyConfig.network,
  )
  const _aaveHistory$ = aaveHistory$(dpmProxy!)
  const [aaveHistory, aaveHistoryError] = useObservable(_aaveHistory$)
  const [debtTokenReserveData, debtTokenReserveDataError] = useObservable(
    getAaveReserveData$({ token: strategyConfig.tokens.debt }),
  )
  const [collateralTokenReserveData, collateralTokenReserveDataError] = useObservable(
    getAaveReserveData$({ token: strategyConfig.tokens.collateral }),
  )
  const [debtTokenReserveConfigurationData, debtTokenReserveConfigurationDataError] = useObservable(
    aaveReserveConfigurationData$({
      collateralToken: strategyConfig.tokens.debt,
      debtToken: strategyConfig.tokens.collateral,
    }),
  )
  const isAutomationAvailable =
    !isOpenView &&
    isSupportedAaveAutomationTokenPair(
      strategyConfig.tokens.collateral,
      strategyConfig.tokens.debt,
    ) &&
    supportsAaveStopLoss(strategyConfig.protocol, strategyConfig.networkId)

  return (
    <WithErrorHandler
      error={[
        debtTokenReserveDataError,
        collateralTokenReserveDataError,
        debtTokenReserveConfigurationDataError,
        aaveHistoryError,
      ]}
    >
      <WithLoadingIndicator
        value={[
          currentPosition,
          collateralPrice,
          debtPrice,
          debtTokenReserveData,
          collateralTokenReserveData,
          debtTokenReserveConfigurationData,
          aaveHistory,
        ]}
        customLoader={<AppSpinner />}
      >
        {([
          _currentPosition,
          _collateralTokenPrice,
          _debtTokenPrice,
          _debtTokenReserveData,
          _collateralTokenReserveData,
          _debtTokenReserveConfigurationData,
          _aaveHistory,
        ]) => {
          return (
            <AaveMultiplyPositionData
              currentPosition={_currentPosition}
              collateralTokenPrice={_collateralTokenPrice}
              collateralTokenReserveData={_collateralTokenReserveData}
              debtTokenPrice={_debtTokenPrice}
              debtTokenReserveData={_debtTokenReserveData}
              debtTokenReserveConfigurationData={_debtTokenReserveConfigurationData}
              nextPosition={nextPosition}
              aaveHistory={_aaveHistory}
              isAutomationAvailable={isAutomationAvailable}
            />
          )
        }}
      </WithLoadingIndicator>
    </WithErrorHandler>
  )
}