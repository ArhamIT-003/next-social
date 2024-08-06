import {
  MenuItemsType,
  MobileMenuType,
  isLoggedInFeaturesTypes,
} from "./types";

export const menuItems: MenuItemsType[] = [
  { link: "/", name: "Homepage", image: "/home.png" },
  { link: "/friends", name: "Friends", image: "/friends.png" },
  { link: "/stories", name: "Stories", image: "/stories.png" },
];

export const isLoggedInFeatures: isLoggedInFeaturesTypes[] = [
  { image: "/people.png" },
  { image: "/notifications.png" },
  { image: "/messages.png" },
];

export const mobileMenuItems: MobileMenuType[] = [
  { link: "/", name: "Homepage" },
  { link: "/friends", name: "Friends" },
  { link: "/stories", name: "Stories" },
  { link: "/groups", name: "Groups" },
];

export const LeftMenuData: MenuItemsType[] = [
  { link: "/my-post", name: "My Post", image: "/posts.png" },
  { link: "/activity", name: "Activity", image: "/activity.png" },
  { link: "/marketplace", name: "MarketPlace", image: "/market.png" },
  { link: "/events", name: "Events", image: "/events.png" },
  { link: "/albums", name: "Albums", image: "/albums.png" },
  { link: "/videos", name: "Videos", image: "/videos.png" },
  { link: "/news", name: "News", image: "/news.png" },
  { link: "/course", name: "Courses", image: "/courses.png" },
  { link: "/lists", name: "Lists", image: "/lists.png" },
  { link: "/settings", name: "Settings", image: "/settings.png" },
];
