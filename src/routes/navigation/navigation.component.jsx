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
} from "./navigation.styles";
import { ReactComponent as Logo } from "../../assests/logo.svg";

const Navigation = () => {
  return (
    <NavigationContainer>
      <TopBarContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <TopBarContentContainer>
          <input type="search" placeholder="&#x1F50E;&#xFE0E; Search" />
          <RightContentContainer>
            <img alt="pic" src="../../assests/cart.svg" />
            <div>
              Hussein Sobieh
              <img alt="pic" src="../../assests/logo.svg" />
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
    </NavigationContainer>
  );
};

export default Navigation;
