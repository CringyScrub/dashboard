import { Container, SettingsContainer } from "./settings.styles";
import Setting from "../../components/setting/setting.component";

const Settings = () => {
  return (
    <SettingsContainer>
      <Container>
        <Setting title="Dark Mode" />
      </Container>
    </SettingsContainer>
  );
};

export default Settings;
