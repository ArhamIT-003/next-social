export interface MenuItemsType {
  link: string;
  name: string;
  image: string;
}

export interface isLoggedInFeaturesTypes {
  image: string;
}

export interface MobileMenuType {
  link: string;
  name: string;
}


export interface UserInfoBtnProps {
  userId: string;
  currentUserId: string | null;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingRequestSend: boolean;
}