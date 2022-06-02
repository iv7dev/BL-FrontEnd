import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t(' Blue Lotus DAO'),
  bodyText: t(
    ' Is the best place to trade and earn on networks such as Ethereum, Polygon, Binance Smart Chain (BSC), and Fantom; you can get the best rates for your token swaps and earn more with your token assets.',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.genesys.network/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: t('BNB token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'GSYS', alt: t('GSYS token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('Genesys Network makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.genesys.network/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: t('Pie chart') },
      { src: 'stonks', alt: t('Stocks chart') },
      { src: 'folder', alt: t('Folder with cake token') },
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t(' GSYS makes our world go round.'),
  bodyText: t(
    'GSYS is the Utility token that fuels the pump and thrust the Genesys Network Ecosystem. Earn GENESYS from Farms and Pools, or buy it on the exchange.',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xc073eb514B96cFbe470b0d23e0a620BaE73ee165', // token tgsys testnet
    text: t('Buy GSYS'),
    external: false,
  },
  secondaryButton: {
    to: 'https://genesys-blockchain.gitbook.io/genesys-blockchain/',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/flying-pancakes/',
    attributes: [
      { src: '2-bottom', alt: 'Genesys flying on the bottom' },
      // { src: '2-top', alt: 'Genesys flying on the top' },
      { src: '2-right', alt: 'Genesys flying on the right' },
    ],
  },
})
