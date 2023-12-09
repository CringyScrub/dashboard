import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CartSvg } from "../../assests/cart.svg";
import { ReactComponent as ProfileSvg } from "../../assests/profile.svg";
import { ReactComponent as AnalyticsSvg } from "../../assests/analytics.svg";
import { ReactComponent as SettingsSvg } from "../../assests/setting.svg";
import { ReactComponent as ChatSvg } from "../../assests/chat.svg";
import { ReactComponent as FaqSvg } from "../../assests/faq.svg";
import { ReactComponent as NotificationsSvg } from "../../assests/notifications.svg";

const mainColor = "#eee";
const subColor = "white";

export const NavigationContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const TopBarContainer = styled.span`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: ${subColor};
  box-shadow: 0 0 2px grey;
`;

export const TopBarContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;
  input {
    border-radius: 30px;
    background-color: ${mainColor};
    height: 40px;
    width: 30%;
    padding: 15px;
    border: none;
    margin-left: 50px;
    display: block;
    &:focus {
      outline: none;
      box-shadow: 0 0 2px grey;
    }
  }
`;

export const RightContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const CartIcon = styled(CartSvg)``;
export const AnalyticsIcon = styled(AnalyticsSvg)``;
export const SettingsIcon = styled(SettingsSvg)``;
export const ProfileIcon = styled(ProfileSvg)``;
export const ChatIcon = styled(ChatSvg)``;
export const FaqIcon = styled(FaqSvg)``;
export const NotificationsIcon = styled(NotificationsSvg)`
  border-right: 1px solid ${mainColor};
  padding-right: 20px;
  height: 55%;
`;

export const LogoContainer = styled.span`
  width: 200px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${mainColor};
  svg {
    height: 80%;
  }
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${subColor};
  height: 100%;
  width: 200px;
`;

export const NavLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const NavLink = styled(Link)`
  width: 100%;
  height: auto;
  text-decoration: none;
  color: black;
  padding: 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  svg {
    width: 18px;
    height: 18px;
    padding: 0 10px 0 5px;
  }
`;

export const SupportContainer = styled.div`
  width: 100%;
  height: auto;
  color: #bbb;
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  div {
    padding-left: 10px;
    padding-top: 10px;
    color: black;
    display: flex;
    align-items: center;
    svg {
      width: 18px;
      height: 18px;
      padding: 0 10px 0 5px;
    }
  }
`;
