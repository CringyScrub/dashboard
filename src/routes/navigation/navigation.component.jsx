import {
  NavigationContainer,
  TopBarContainer,
  TopBarContentContainer,
  SideBarContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
  SupportContainer,
  CartIcon,
  AnalyticsIcon,
  ProfileIcon,
  SettingsIcon,
  FaqIcon,
  ChatIcon,
  RightContentContainer,
  NotificationsIcon,
} from "./navigation.styles";
import { ReactComponent as Logo } from "../../assests/logo.svg";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <TopBarContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <TopBarContentContainer>
            <input type="search" placeholder="&#x1F50E;&#xFE0E; Search" />
            <RightContentContainer>
              <NotificationsIcon />
              <div>
                <span style={{ paddingLeft: 20 }}>Hussein Sobieh</span>
                <div />
              </div>
            </RightContentContainer>
          </TopBarContentContainer>
        </TopBarContainer>
        <SideBarContainer>
          <NavLinksContainer>
            <NavLink to="/">
              <AnalyticsIcon />
              Dashboard
            </NavLink>
            <NavLink to="/orders">
              <CartIcon />
              Orders
            </NavLink>
            <NavLink to="/account">
              <ProfileIcon />
              Account
            </NavLink>
            <NavLink to="/settings">
              <SettingsIcon />
              Settings
            </NavLink>
          </NavLinksContainer>
          <SupportContainer>
            Support
            <div>
              <ChatIcon />
              Chat
            </div>
            <div>
              <FaqIcon />
              FAQ
            </div>
          </SupportContainer>
        </SideBarContainer>
        <Outlet />
      </NavigationContainer>
    </>
  );
};

export default Navigation;
