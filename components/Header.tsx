import { Global } from '@emotion/core'
import { Icon } from '@makerdao/dai-ui-icons'
import { trackingEvents } from 'analytics/analytics'
import { LanguageSelect } from 'components/LanguageSelect'
import { AppLink } from 'components/Links'
import { AccountButton } from 'features/account/Account'
import { UserSettingsButton } from 'features/userSettings/UserSettingsView'
import { useObservable } from 'helpers/observableHook'
import { staticFilesRuntimeUrl } from 'helpers/staticPaths'
import { WithChildren } from 'helpers/types'
import { InitOptions } from 'i18next'
import { useTranslation } from 'next-i18next'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import { TRANSITIONS } from 'theme'
import { Box, Button, Card, Container, Flex, Grid, Image, SxStyleProp, Text } from 'theme-ui'

import { ContextConnected } from '../blockchain/network'
import { useFeatureToggle } from '../helpers/useFeatureToggle'
import { useAppContext } from './AppContextProvider'
import { ChevronUpDown } from './ChevronUpDown'
import { useSharedUI } from './SharedUIProvider'
import { SelectComponents } from 'react-select/src/components'

const {
  publicRuntimeConfig: { apiHost },
} = getConfig()

export function Logo({ sx }: { sx?: SxStyleProp }) {
  return (
    <AppLink
      withAccountPrefix={false}
      href="/"
      sx={{
        color: 'primary',
        fontWeight: 'semiBold',
        fontSize: '0px',
        cursor: 'pointer',
        zIndex: 1,
        ...sx,
      }}
    >
      <Image src={staticFilesRuntimeUrl('/static/img/logo.svg')} />
    </AppLink>
  )
}

export function BasicHeader({
  variant,
  children,
  sx,
}: { variant?: string; sx?: SxStyleProp } & WithChildren) {
  return (
    <Box as="header" sx={{ position: 'relative', zIndex: 'menu' }}>
      <Container
        variant={variant}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 2,
          p: 3,
          mb: 3,
          minHeight: '83px',
          ...sx,
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export function BackArrow() {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        color: 'onBackground',
        fontSize: '0',
        transition: TRANSITIONS.global,
        '&:hover': {
          color: 'onSurface',
        },
      }}
    >
      <Icon name="arrow_left" size="auto" width="32" height="47" />
    </Box>
  )
}

interface UserAccountProps {
  position: 'fixed' | 'relative'
}

function UserAccount({ position }: UserAccountProps) {
  const { vaultFormToggleTitle, setVaultFormOpened } = useSharedUI()

  return (
    <Flex
      sx={{
        position,
        bottom: 0,
        left: 0,
        right: 0,
        bg: ['rgba(255,255,255,0.9)', 'transparent'],
        p: [3, 0],
        justifyContent: 'space-between',
        gap: 2,
        zIndex: 3,
      }}
    >
      <Flex>
        <UserSettingsButton />
        <AccountButton />
      </Flex>
      {vaultFormToggleTitle && (
        <Box sx={{ display: ['block', 'none'] }}>
          <Button variant="menuButton" sx={{ px: 3 }} onClick={() => setVaultFormOpened(true)}>
            <Box>{vaultFormToggleTitle}</Box>
          </Button>
        </Box>
      )}
    </Flex>
  )
}

function navLinkColor(isActive: boolean) {
  return isActive ? 'primary' : 'lavender'
}

function ConnectedHeader() {
  const { pathname } = useRouter()
  const { accountData$, context$ } = useAppContext()
  const { t } = useTranslation()
  const accountData = useObservable(accountData$)
  const context = useObservable(context$)
  const earnEnabled = useFeatureToggle('EarnProduct')

  const numberOfVaults =
    accountData?.numberOfVaults !== undefined ? accountData.numberOfVaults : undefined

  return (
    <>
      <Box sx={{ display: ['none', 'block'], mb: 5 }}>
        <BasicHeader
          sx={{
            position: 'relative',
            alignItems: 'center',
            zIndex: 1,
          }}
          variant="appContainer"
        >
          <>
            <Flex
              sx={{
                alignItems: 'center',
                justifyContent: ['space-between', 'flex-start'],
                width: ['100%', 'auto'],
              }}
            >
              <Logo />
              <Flex sx={{ ml: 5, zIndex: 1 }}>
                <AppLink
                  variant="links.navHeader"
                  sx={{ mr: 4, color: navLinkColor(pathname.includes('owner')) }}
                  href={`/owner/${(context as ContextConnected)?.account}`}
                  onClick={() => trackingEvents.yourVaults()}
                >
                  {t('your-vaults')}{' '}
                  {numberOfVaults ? numberOfVaults > 0 && `(${numberOfVaults})` : ''}
                </AppLink>
                <AppLink
                  variant="links.navHeader"
                  href={HEADER_LINKS.multiply}
                  sx={{
                    mr: 4,
                    color: navLinkColor(pathname.includes(HEADER_LINKS.multiply)),
                  }}
                >
                  {t('nav.multiply')}
                </AppLink>
                <AppLink
                  variant="links.navHeader"
                  href={HEADER_LINKS.borrow}
                  sx={{ mr: 4, color: navLinkColor(pathname.includes(HEADER_LINKS.borrow)) }}
                >
                  {t('nav.borrow')}
                </AppLink>
                {earnEnabled && (
                  <AppLink
                    variant="links.navHeader"
                    href={HEADER_LINKS.earn}
                    sx={{ color: navLinkColor(pathname.includes(HEADER_LINKS.earn)) }}
                  >
                    {t('nav.earn')}
                  </AppLink>
                )}
              </Flex>
            </Flex>
            <UserAccount position="relative" />
          </>
        </BasicHeader>
      </Box>
      <Box sx={{ display: ['block', 'none'], mb: 5 }}>
        <BasicHeader variant="appContainer">
          <Flex sx={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
            <Logo />
            <AppLink
              variant="nav"
              sx={{ mr: 4, color: navLinkColor(pathname.includes('owner')) }}
              href={`/owner/${(context as ContextConnected)?.account}`}
              onClick={() => trackingEvents.yourVaults()}
            >
              {t('your-vaults')} {numberOfVaults ? numberOfVaults > 0 && `(${numberOfVaults})` : ''}
            </AppLink>
          </Flex>
          <MobileMenu />
          <UserAccount position="fixed" />
        </BasicHeader>
      </Box>
    </>
  )
}

const HEADER_LINKS = {
  'dai-wallet': `${apiHost}/daiwallet`,
  learn: 'https://kb.oasis.app',
  blog: 'https://blog.oasis.app',
  multiply: `/multiply`,
  borrow: `/borrow`,
  earn: '/earn',
}

function HeaderDropdown({
  title,
  sx,
  children,
}: { title: string; sx?: SxStyleProp } & WithChildren) {
  return (
    <Box
      sx={{
        position: 'relative',
        top: '-1px',
        '& .menu': { display: 'none' },
        '&:hover': {
          '& .trigger': {
            color: 'primary',
          },
          '& .menu': {
            display: 'block',
          },
        },
        ...sx,
      }}
    >
      <Box className="trigger" variant="links.navHeader" sx={{ whiteSpace: 'nowrap' }}>
        {title} <Icon name="caret_down" size="7.75px" sx={{ ml: '3px' }} />
      </Box>
      <Box className="menu" sx={{ position: 'absolute', top: '100%', pt: 2 }}>
        <Card
          sx={{
            borderRadius: 'medium',
            minWidth: 6,
            pl: 3,
            pr: 4,
            py: 3,
            boxShadow: 'cardLanding',
            border: 'none',
            display: 'grid',
            rowGap: 2,
            '& > *': {
              py: 2,
            },
          }}
        >
          {children}
        </Card>
      </Box>
    </Box>
  )
}

function LanguageDropdown({ sx }: { sx?: SxStyleProp }) {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const { locales } = i18n.options as InitOptions & { locales: string[] }

  return (
    <HeaderDropdown title={t(`lang-dropdown.${i18n.language}`)} sx={sx}>
      {locales
        .filter((lang) => lang !== i18n.language)
        .map((lang, index) => (
          <Text
            key={index}
            variant="links.nav"
            sx={{ fontWeight: 'body' }}
            onClick={() => router.push(router.asPath, router.asPath, { locale: lang })}
          >
            {t(`lang-dropdown.${lang}`)}
          </Text>
        ))}
    </HeaderDropdown>
  )
}

const LangSelectMobileComponents: Partial<SelectComponents<{
  value: string
  label: string
}>> = {
  IndicatorsContainer: () => null,
  ValueContainer: ({ children }) => (
    <Flex sx={{ color: 'primary', fontWeight: 'body' }}>{children}</Flex>
  ),
  SingleValue: ({ children }) => <Box>{children}</Box>,
  Option: ({ children, innerProps }) => (
    <Box
      {...innerProps}
      sx={{
        py: 2,
        px: 3,
        cursor: 'pointer',
        '&:hover': {
          bg: 'background',
        },
      }}
    >
      {children}
    </Box>
  ),
  Menu: ({ innerProps, children }) => (
    <Card
      {...innerProps}
      sx={{
        boxShadow: 'table',
        borderRadius: 'medium',
        border: 'none',
        p: 0,
        position: 'relative',
        top: '8px',
      }}
    >
      {children}
    </Card>
  ),
  Control: ({ innerProps, children, selectProps: { menuIsOpen } }) => (
    <Box
      {...innerProps}
      sx={{
        cursor: 'pointer',
        variant: 'links.nav',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 3,
        boxShadow: 'table',
        borderRadius: 'medium',
        py: '8px',
        px: '16px',
      }}
    >
      {children}
      <ChevronUpDown isUp={!!menuIsOpen} variant="select" size="auto" width="13.3px" />
    </Box>
  ),
}

function MobileMenu() {
  const { t } = useTranslation()
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { context$ } = useAppContext()
  const context = useObservable(context$)
  const earnProductEnabled = useFeatureToggle('EarnProduct')
  const isConnected = !!(context as ContextConnected)?.account

  const MOBILE_MENU_DISCONNECTED_SECTIONS = [
    {
      titleKey: 'nav.products',
      links: [
        { labelKey: 'nav.multiply', url: HEADER_LINKS.multiply },
        { labelKey: 'nav.borrow', url: HEADER_LINKS.borrow },
        ...(earnProductEnabled ? [{ labelKey: 'nav.earn', url: HEADER_LINKS.earn }] : []),
        { labelKey: 'nav.dai-wallet', url: HEADER_LINKS['dai-wallet'] },
      ],
    },
    {
      titleKey: 'nav.resources',
      links: [
        { labelKey: 'nav.learn', url: HEADER_LINKS['learn'] },
        { labelKey: 'nav.blog', url: HEADER_LINKS['blog'] },
      ],
    },
  ]

  const MOBILE_MENU_CONNECTED_SECTIONS = [
    {
      titleKey: 'nav.products',
      links: [
        { labelKey: 'nav.multiply', url: HEADER_LINKS.multiply },
        { labelKey: 'nav.borrow', url: HEADER_LINKS.borrow },
        ...(earnProductEnabled ? [{ labelKey: 'nav.earn', url: HEADER_LINKS.earn }] : []),
      ],
    },
  ]

  const closeMenu = useCallback(() => setIsOpen(false), [])
  return (
    <>
      {isOpen && (
        <Global
          styles={() => ({
            body: {
              overflow: 'hidden',
              height: '100vh',
              position: 'fixed',
              width: '100vw',
            },
          })}
        />
      )}
      <Box
        sx={{
          backgroundColor: 'background',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 'mobileMenu',
          transition: 'opacity ease-in 0.25s',
          height: isOpen ? '100vh' : 0,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'unset' : 'none',
          overflow: 'hidden',
          p: 5,
        }}
      >
        <Grid sx={{ rowGap: 5, mt: 3, mx: 'auto', maxWidth: 7 }}>
          {!isConnected &&
            MOBILE_MENU_DISCONNECTED_SECTIONS.map((section) => (
              <Grid key={section.titleKey}>
                <Text variant="links.navHeader">{t(section.titleKey)}</Text>
                {section.links.map((link) =>
                  link.url ? (
                    <AppLink
                      key={link.labelKey}
                      variant="text.paragraph1"
                      sx={{
                        textDecoration: 'none',
                        color: navLinkColor(pathname.includes(link.url)),
                      }}
                      href={link.url}
                      onClick={closeMenu}
                    >
                      {t(link.labelKey)}
                    </AppLink>
                  ) : (
                    <Text
                      key={link.labelKey}
                      variant="text.paragraph1"
                      sx={{ fontWeight: 'semiBold' }}
                    >
                      {t(link.labelKey)}
                    </Text>
                  ),
                )}
              </Grid>
            ))}
          {isConnected &&
            MOBILE_MENU_CONNECTED_SECTIONS.map((section) => (
              <Grid key={section.titleKey}>
                <Text variant="links.navHeader">{t(section.titleKey)}</Text>
                {section.links.map((link) =>
                  link.url ? (
                    <AppLink
                      key={link.labelKey}
                      variant="text.paragraph1"
                      sx={{
                        textDecoration: 'none',
                        color: navLinkColor(pathname.includes(link.url)),
                      }}
                      href={link.url}
                      onClick={closeMenu}
                    >
                      {t(link.labelKey)}
                    </AppLink>
                  ) : (
                    <Text
                      key={link.labelKey}
                      variant="text.paragraph1"
                      sx={{ fontWeight: 'semiBold' }}
                    >
                      {t(link.labelKey)}
                    </Text>
                  ),
                )}
              </Grid>
            ))}
          <Grid>
            <Text variant="links.navHeader">{t('languages')}</Text>
            <LanguageSelect components={LangSelectMobileComponents} />
          </Grid>
        </Grid>
      </Box>
      <Icon
        name={isOpen ? 'close' : 'menu'}
        sx={{ zIndex: 'mobileMenu', cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
        size="18px"
      />
    </>
  )
}

function DisconnectedHeader() {
  const { t } = useTranslation()
  const { pathname } = useRouter()
  const earnEnabled = useFeatureToggle('EarnProduct')

  return (
    <>
      <Box sx={{ display: ['none', 'block'] }}>
        <BasicHeader variant="appContainer">
          <Grid sx={{ alignItems: 'center', columnGap: [4, 4, 5], gridAutoFlow: 'column', mr: 3 }}>
            <Logo />
            <AppLink
              variant="links.navHeader"
              href={HEADER_LINKS.multiply}
              sx={{ color: navLinkColor(pathname.includes(HEADER_LINKS.multiply)) }}
            >
              {t('nav.multiply')}
            </AppLink>
            <AppLink
              variant="links.navHeader"
              href={HEADER_LINKS.borrow}
              sx={{ color: navLinkColor(pathname.includes(HEADER_LINKS.borrow)) }}
            >
              {t('nav.borrow')}
            </AppLink>
            {earnEnabled && (
              <AppLink
                variant="links.navHeader"
                href={HEADER_LINKS.earn}
                sx={{ color: navLinkColor(pathname.includes(HEADER_LINKS.earn)) }}
              >
                {t('nav.earn')}
              </AppLink>
            )}
            <HeaderDropdown title={t('nav.more')}>
              <AppLink
                variant="links.nav"
                sx={{ fontWeight: 'body' }}
                href={HEADER_LINKS['dai-wallet']}
              >
                {t('nav.dai-wallet')}
              </AppLink>
              <AppLink variant="links.nav" sx={{ fontWeight: 'body' }} href={HEADER_LINKS['learn']}>
                {t('nav.learn')}
              </AppLink>
              <AppLink variant="links.nav" sx={{ fontWeight: 'body' }} href={HEADER_LINKS['blog']}>
                {t('nav.blog')}
              </AppLink>
            </HeaderDropdown>
          </Grid>
          <Grid sx={{ alignItems: 'center', columnGap: 3, gridAutoFlow: 'column' }}>
            <AppLink
              variant="buttons.secondary"
              href="/connect"
              sx={{
                boxShadow: 'cardLanding',
                bg: 'surface',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                '&:hover svg': {
                  transform: 'translateX(8px)',
                },
                flexShrink: 0,
              }}
            >
              <Text variant="strong">{t('connect-wallet-button')}</Text>
              <Icon
                name="arrow_right"
                size="15px"
                sx={{ position: 'relative', left: '6px', transition: '0.2s' }}
              />
            </AppLink>
            <LanguageDropdown
              sx={{ '@media (max-width: 1330px)': { '.menu': { right: '-6px' } } }}
            />
          </Grid>
        </BasicHeader>
      </Box>
      <Box sx={{ display: ['block', 'none'], mb: 5 }}>
        <BasicHeader variant="appContainer">
          <Logo />
          <MobileMenu />
        </BasicHeader>
      </Box>
    </>
  )
}

export function AppHeader() {
  const { context$ } = useAppContext()
  const context = useObservable(context$)

  return context?.status === 'connected' ? <ConnectedHeader /> : <DisconnectedHeader />
}

export function ConnectPageHeader() {
  return (
    <BasicHeader>
      <Logo />
    </BasicHeader>
  )
}
