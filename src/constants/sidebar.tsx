import {
  ArrowTop,
  Bookmark,
  Comment,
  Eye,
  Feedback,
  File,
  Fire,
  Search,
  Settings,
  Terminal,
  UserInvite,
} from '@/components/Icons';

export const DISCOVER_LINKS = [
  {
    Icon: Fire,
    label: 'Popular',
  },
  {
    Icon: ArrowTop,
    label: 'Most upvoted',
  },
  {
    Icon: Comment,
    label: 'Best discussions',
  },
  {
    Icon: Search,
    label: 'Search',
  },
];

export const MANAGE_LINKS = [
  {
    Icon: Bookmark,
    label: 'Bookmarks',
  },
  {
    Icon: Eye,
    label: 'Reading history',
  },
  {
    Icon: Settings,
    label: 'Customize',
  },
];

export const FOOTER_LINKS = [
  {
    Icon: File,
    label: 'Docs',
  },
  {
    Icon: Terminal,
    label: 'Changelog',
  },
  {
    Icon: Feedback,
    label: 'Feedback',
  },
  {
    Icon: UserInvite,
    label: 'Invite people',
  },
];

export const LINK_GROUPS = [
  {
    label: 'Discover',
    links: DISCOVER_LINKS,
  },
  {
    label: 'Manage',
    links: MANAGE_LINKS,
  },
];
