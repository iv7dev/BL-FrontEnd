import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.genesys.network/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.genesys.network/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/pancakeswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.genesys.network/contact-us/telegram',
      },
      {
        label: t('GSYS token'),
        href: 'https://docs.genesys.network/tokenomics/cake',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.genesys.network/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.genesys.network/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.genesys.network/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.genesys.network',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.genesys.network/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.genesys.network/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.genesys.network/hiring/become-a-chef',
      },
    ],
  },
]
