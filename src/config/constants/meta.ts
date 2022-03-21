import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Genesys Network',
  description:
    'The most popular AMM on BSC by user count! Earn GSYS through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Genesys Network), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Genesys Network')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Genesys Network')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Genesys Network')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Genesys Network')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Genesys Network')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Genesys Network')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Genesys Network')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Genesys Network')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Genesys Network')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Genesys Network')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Genesys Network')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Genesys Network')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Genesys Network')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Genesys Network')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Genesys Network')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Genesys Network')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Genesys Network')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Genesys Network')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Genesys Network Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Genesys Network Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Genesys Network Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Genesys Network')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Genesys Network')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('Genesys Network')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('Genesys Network')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Genesys Squad')} | ${t('Genesys Network')}`,
      }
    default:
      return null
  }
}
