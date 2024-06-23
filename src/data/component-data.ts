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
