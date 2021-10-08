import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Join the Community',
      description:
        'Get more update on blockchain technology.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Chat Communication',
      description:
        'You can reach us from the Gmail Chat Invite.',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Github Access',
      description:
        'Send us a request to work on our product.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: 'https://techarima.com/privacy-policy/',
      label: 'Privacy Policy',
    },
    {
      path: 'https://developer.arima.io/',
      label: 'Developer',
    },
    {
      path: 'https://techarima.com/services/',
      label: 'Services',
    },
    {
      path: 'https://techarima.com/reach-us/',
      label: 'Contact',
    },
  ],
};
