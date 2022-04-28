import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "support@ganesys.network",
      },
      // {
      //   label: "Blog",
      //   href: "https://pancakeswap.medium.com/",
      // },
      // {
      //   label: "Community",
      //   href: "https://docs.genesys.network/contact-us/telegram",
      // },
      {
        label: "GSYS",
        href: "https://bscscan.com/token/0xc073eb514B96cFbe470b0d23e0a620BaE73ee165",
      },
      {
        label: "—",
      },
      // {
      //   label: "Online Store",
      //   href: "https://pancakeswap.creator-spring.com/",
      //   isHighlighted: true,
      // },
    ],
  },
  {
    label: "Help",
    items: [
      // {
      //   label: "Customer",
      //   href: "Support https://docs.genesys.network/contact-us/customer-support",
      // },
      {
        label: "Troubleshooting",
        href: "Genesys.dev@genesys.network",
      },
      // {
      //   label: "Guides",
      //   href: "https://docs.genesys.network/get-started",
      // },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/GenesysNetwork",
      },
      {
        label: "Documentation",
        href: "https://genesys-blockchain.gitbook.io/genesys-blockchain/",
      },
      // {
      //   label: "Bug Bounty",
      //   href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      // },
      // {
      //   label: "Audits",
      //   href: "https://docs.genesys.network/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      // },
      // {
      //   label: "Careers",
      //   href: "https://docs.genesys.network/hiring/become-a-chef",
      // },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/BlueLotusDao",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/GenesysNetwork",
      },
      // {
      //   label: "Bahasa Indonesia",
      //   href: "https://t.me/PancakeSwapIndonesia",
      // },
      // {
      //   label: "中文",
      //   href: "https://t.me/PancakeSwap_CN",
      // },
      // {
      //   label: "Tiếng Việt",
      //   href: "https://t.me/PancakeSwapVN",
      // },
      // {
      //   label: "Italiano",
      //   href: "https://t.me/pancakeswap_ita",
      // },
      // {
      //   label: "русский",
      //   href: "https://t.me/pancakeswap_ru",
      // },
      // {
      //   label: "Türkiye",
      //   href: "https://t.me/pancakeswapturkiye",
      // },
      // {
      //   label: "Português",
      //   href: "https://t.me/PancakeSwapPortuguese",
      // },
      // {
      //   label: "Español",
      //   href: "https://t.me/PancakeswapEs",
      // },
      // {
      //   label: "日本語",
      //   href: "https://t.me/pancakeswapjp",
      // },
      // {
      //   label: "Français",
      //   href: "https://t.me/pancakeswapfr",
      // },
      // {
      //   label: "Datch",
      //   href: "https://t.me/PancakeSwap_DE",
      // },
      // {
      //   label: "Filipino",
      //   href: "https://t.me/Pancakeswap_Ph",
      // },
      // {
      //   label: "ქართული ენა",
      //   href: "https://t.me/PancakeSwapGeorgia",
      // },
      // {
      //   label: "Announcements",
      //   href: "https://t.me/PancakeSwapAnn",
      // },
    ],
  },
  // {
  //   label: "Reddit",
  //   icon: RedditIcon,
  //   href: "https://reddit.com/r/pancakeswap",
  // },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/genesys.network/",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/GenesysNetwork",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.com/invite/rnpnVDaKTn",
  },
  // {
  //   label: "Medium",
  //   icon: MediumIcon,
  //   href: "https://pancakeswap.medium.com/",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
