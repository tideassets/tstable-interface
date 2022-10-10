import { Icon } from '@makerdao/dai-ui-icons'
import { ExpandableArrow } from 'components/dumb/ExpandableArrow'
import React, { useState } from 'react'
import ReactSelect, { components } from 'react-select'
import { theme } from 'theme'
import { Box, SxProps } from 'theme-ui'

import { styleFn, Styles } from 'react-select/src/styles'

type ReactSelectCSSProperties = ReturnType<styleFn>
type ReactSelectSimplifiedStyles = {
  [key in keyof Styles]: (state: any) => ReactSelectCSSProperties
}

interface GenericSelectOption {
  label: string
  value: string
  icon?: string
}
interface GenericSelectProps {
  /**
   * For more info about custom styles options see: https://react-select.com/styles
   */
  customStyles?: ReactSelectSimplifiedStyles
  defaultValue?: GenericSelectOption
  expandableArrowSize?: number
  expandableArrowSx?: SxProps
  iconSize?: number
  isDisabled?: boolean
  isSearchable?: boolean
  name?: string
  onChange?: (value: GenericSelectOption) => void
  options: GenericSelectOption[]
  placeholder?: string
}

export function GenericSelect({
  customStyles = {},
  defaultValue,
  expandableArrowSize = 12,
  expandableArrowSx,
  iconSize = 32,
  isDisabled = false,
  isSearchable = false,
  name,
  onChange,
  options,
  placeholder,
}: GenericSelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<GenericSelectOption | undefined>(defaultValue)

  const defaultStyles: ReactSelectSimplifiedStyles = {
    control: ({ isFocused }) => ({
      height: '54px',
      border: `1px solid ${isFocused ? theme.colors.primary100 : theme.colors.secondary100}`,
      boxShadow: 'none',
      borderRadius: theme.radii.medium,
      cursor: 'pointer',
      transition: 'border-color 200ms',
      '&:hover': {
        borderColor: isFocused ? theme.colors.primary100 : theme.colors.neutral70,
      },
    }),
    valueContainer: () => ({
      padding: `0 ${theme.space[3]}px`,
      overflow: 'visible',
    }),
    singleValue: () => ({
      display: 'flex',
      alignItems: 'center',
      margin: 0,
      fontSize: theme.fontSizes[2],
      fontWeight: theme.fontWeights.semiBold,
      color: theme.colors.primary100,
      overflow: 'visible',
    }),
    placeholder: () => ({
      fontSize: theme.fontSizes[2],
      fontWeight: theme.fontWeights.semiBold,
      color: theme.colors.neutral80,
    }),
    input: () => ({
      fontSize: theme.fontSizes[2],
      color: theme.colors.primary100,
    }),
    menu: () => ({
      marginTop: theme.space[1],
      marginBottom: 0,
      border: `1px solid ${theme.colors.secondary100}`,
      borderRadius: theme.radii.large,
      boxShadow: theme.shadows.buttonMenu,
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? 'translateY(0)' : 'translateY(-5px)',
      pointerEvents: isOpen ? 'auto' : 'none',
      transition: 'opacity 200ms, transform 200ms',
    }),
    menuList: () => ({
      paddingTop: '12px',
      paddingBottom: '12px',
    }),
    option: ({ isSelected }) => ({
      display: 'flex',
      minHeight: '48px',
      alignItems: 'center',
      padding: '0 16px',
      fontSize: theme.fontSizes[3],
      fontWeight: theme.fontWeights.regular,
      color: theme.colors.primary100,
      backgroundColor: isSelected ? theme.colors.neutral30 : 'transparent',
      cursor: 'pointer',
      transition: 'background-color 200ms',
      '&:hover': {
        backgroundColor: theme.colors.neutral30,
      },
    }),
  }
  const combinedStyles: Styles = [...Object.keys(defaultStyles), ...Object.keys(customStyles)]
    .filter((item, i, arr) => arr.indexOf(item) === i)
    .reduce(
      (o, key) => ({
        ...o,
        [key]: (provided: ReactSelectCSSProperties, state: any) => {
          const styleKey = key as keyof Styles

          return {
            ...provided,
            ...(defaultStyles[styleKey] && defaultStyles[styleKey]!(state)),
            ...(customStyles[styleKey] && customStyles[styleKey]!(state)),
          }
        },
      }),
      {},
    )

  return (
    <Box sx={{ position: 'relative' }}>
      <ReactSelect
        blurInputOnSelect={true}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        // this prop hardcoded to true, because react-select removes its options list from DOM when it's not used. for the purpose of seo and animations,
        // options list is always renderded and it's visibility is decided by useState instead of built-in react-select solution
        menuIsOpen={true}
        options={options}
        styles={combinedStyles}
        value={value}
        components={{
          DropdownIndicator: null,
          SingleValue: ({ children, data, ...props }) => (
            <components.SingleValue data={data} {...props}>
              {data.icon ? (
                <Box sx={{ pl: `${iconSize + 12}px` }}>
                  <Icon
                    size={iconSize}
                    sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, m: 'auto' }}
                    name={data.icon}
                  />
                  {children}
                </Box>
              ) : (
                children
              )}
            </components.SingleValue>
          ),
          Option: ({ children, data, ...props }) => (
            <components.Option data={data} {...props}>
              {data.icon && <Icon size={iconSize} sx={{ mr: '12px' }} name={data.icon} />}
              {children}
            </components.Option>
          ),
        }}
        onBlur={() => {
          setIsOpen(false)
        }}
        onFocus={() => {
          setIsOpen(true)
        }}
        onChange={(option) => {
          const currentValue = option as GenericSelectOption

          setValue(currentValue)
          setIsOpen(false)
          if (onChange) onChange(currentValue)
        }}
        {...(name && { name })}
        {...(placeholder && { placeholder })}
      />
      <ExpandableArrow
        size={expandableArrowSize}
        direction={isOpen ? 'up' : 'down'}
        sx={{
          position: 'absolute',
          top: 0,
          right: '18px',
          bottom: 0,
          my: 'auto',
          pointerEvents: 'none',
          ...expandableArrowSx,
        }}
      />
    </Box>
  )
}