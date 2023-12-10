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
  MainContainer,
  SignIn,
  SearchContainer,
  SignOut,
} from "./navigation.styles";
import { ReactComponent as Logo } from "../../assests/logo.svg";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";

const Navigation = () => {
  const { isLoggedIn, setIsLoggedIn, setCurrentUser } = useContext(UserContext);

  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <>
      <NavigationContainer>
        <TopBarContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <TopBarContentContainer>
            <SearchContainer>
              &#x1F50E;&#xFE0E;
              <input type="search" placeholder=" Search" />
            </SearchContainer>
            <RightContentContainer>
              <NotificationsIcon />
              {isLoggedIn ? (
                <SignOut onClick={(e) => logOut(e)}>Sign Out</SignOut>
              ) : (
                <SignIn to="/auth">Sign In</SignIn>
              )}
            </RightContentContainer>
          </TopBarContentContainer>
        </TopBarContainer>
        <MainContainer>
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
        </MainContainer>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
