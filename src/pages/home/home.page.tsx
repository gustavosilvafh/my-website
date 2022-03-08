import { BorderLimiter } from "../../shared/components/border-limiter/border-limiter";
import { Footer } from "../../shared/components/footer/footer";
import { Header } from "../../shared/components/header/header";
import { MainBox } from "../../shared/components/main-box/main-box";
import { ToggleColorMode } from "../../shared/components/toggle-color-mode/toggle-color-mode";

export const Home = () => {
    return (
        <BorderLimiter>
            <>
                <ToggleColorMode />
                <MainBox>
                    <Header />
                    <Footer />
                </MainBox>
            </>

        </BorderLimiter>
    )
}