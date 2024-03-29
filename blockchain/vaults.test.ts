import { BigNumber } from 'bignumber.js'
import {
  debtScalingFactor$,
  DEFAULT_DEBT_SCALING_FACTOR,
  RANDOM_DEBT_SCALING_FACTOR,
} from 'helpers/mocks/ilks.mock'
import { mockVaults } from 'helpers/mocks/vaults.mock'
import { one } from 'helpers/zero'

describe('vaults$', () => {
  afterEach(() => {
    debtScalingFactor$.next(DEFAULT_DEBT_SCALING_FACTOR)
  })

  it('should produce some vault state', () => {
    const state = mockVaults()
    expect(state()).toBeDefined()
  })

  it('should account for accrued debt', () => {
    const hundredThousand = new BigNumber('100000')
    const fiftyMillion = new BigNumber('50000000')
    const state = mockVaults({
      collateral: hundredThousand,
      debt: fiftyMillion,
    })

    expect(state().lockedCollateral).toEqual(hundredThousand)
    expect(state().debt).toEqual(fiftyMillion)
    debtScalingFactor$.next(RANDOM_DEBT_SCALING_FACTOR)
    expect(state().lockedCollateral).toEqual(hundredThousand)
    expect(state().debt.gt(fiftyMillion.plus(one))).toBe(true)
  })
})
