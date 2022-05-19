import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      // {
      //   label: t('Limit'),
      //   href: '/limit-orders',
      // },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      // {
      //   label: t('Perpetual'),
      //   href: `https://perp.genesys.network/${perpLangMap(languageCode)}/futures/BTCUSDT`,
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
    ],
  },
  {
    label: t('Earn'),
    href: '#',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: t('Farms'),
        href: '#',
      },
      {
        label: t('Pools'),
        href: '#',
      },
    ],
  },
  // {
  //   label: t('Info'),
  //   href: '#',
  //   icon: EarnIcon,
  //   fillIcon: EarnFillIcon,
  //   items: [
  //     {
  //       label: t('Blog'),
  //       href: '#',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://genesys-blockchain.gitbook.io/genesys-blockchain/',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //   ],
  // },
  {
    label: t('Win'),
    href: '#',
    icon: TrophyIcon,
    fillIcon: TrophyFillIcon,
    items: [
      {
        label: t('Trading Competition'),
        href: '#',
        hideSubNav: true,
      },
      {
        label: t('Prediction (BETA)'),
        href: '#',
      },
      // {
      //   label: t('Lottery'),
      //   href: '/lottery',
      // },
    ],
  },
  {
    label: t('Genesys of Blue Marketplace'),
    href: `#`,
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: [
      {
        label: t('Marketplace'),
        href: `#`,
      },
      {
        label: t('Genesys of Blue NFT Collection'),
        href: `#`,
      },
      {
        label: t('Collab'),
        href: `#`,
      },
    ],
  },
  {
    label: '',
    href: '#',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '#',
      },
      {
        label: t('IFO'),
        href: '#',
      },
      {
        label: t('Voting'),
        href: '#',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Leaderboard'),
        href: '#',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: '#',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://genesys-blockchain.gitbook.io/genesys-blockchain/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
