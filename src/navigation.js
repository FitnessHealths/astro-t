import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '服务详细',
      links: [
        {
          text: '限时优惠',
          href: getPermalink('/services'),
        },
        {
          text: '价格',
          href: getPermalink('/pricing'),
        },
      ],
    },
    {
      text: '课程展示',
      links: [
                {
          text: '好文分享',
          href: getPermalink('/landing/sales'),
        },
        {
          text: '冥想',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: '睡眠',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: '正念',
          href: getPermalink('/landing/product'),
        },
        {
          text: '心理健康',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: '关于我们',
          href: getPermalink('/landing/about'),
        },
      ],
    },
 
    {
      text: 'Help',
      href: getPermalink('/help'),
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      // links: [
      //   { text: 'Features', href: '#' },
      //   { text: 'Security', href: '#' },
      //   { text: 'Team', href: '#' },
      //   { text: 'Enterprise', href: '#' },
      //   { text: 'Customer stories', href: '#' },
      //   { text: 'Pricing', href: '#' },
      //   { text: 'Resources', href: '#' },
      // ],
    },
    {
      title: 'Platform',
      // links: [
      //   { text: 'Developer API', href: '#' },
      //   { text: 'Partners', href: '#' },
      //   { text: 'Atom', href: '#' },
      //   { text: 'Electron', href: '#' },
      //   { text: 'AstroWind Desktop', href: '#' },
      // ],
    },
    {
      title: 'Support',
      // links: [
      //   { text: 'Docs', href: '#' },
      //   { text: 'Community Forum', href: '#' },
      //   { text: 'Professional Services', href: '#' },
      //   { text: 'Skills', href: '#' },
      //   { text: 'Status', href: '#' },
      // ],
    },
    {
      title: 'Company',
      // links: [
      //   { text: 'About', href: '#' },
      //   { text: 'Blog', href: '#' },
      //   { text: 'Careers', href: '#' },
      //   { text: 'Press', href: '#' },
      //   { text: 'Inclusion', href: '#' },
      //   { text: 'Social Impact', href: '#' },
      //   { text: 'Shop', href: '#' },
      // ],
    },
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  // ],
  // footNote: `
  //   <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
  //   Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};
