import backgroundWelcome from "../assets/images/ImagesWelcome/backgroundWelcomeMobile.svg";
import logoPeronio from "../assets/images/ImagesWelcome/LogoPeronio.svg";
import mobileWelcomePerson from "../assets/images/MobileWelcome/mobileWelcomePerson.svg";
export default function MobileWelcome({ handleClickNext }: any) {
  const handleClickButton = async () => {
    let navegador = navigator.userAgent;

    await alert("Acordate de volver a esta web");

    if (/android/i.test(navegador))
      window.location.href =
        "https://play.google.com/store/apps/details?id=io.stormbird.wallet&hl=en_us";
    else
      window.location.href =
        "https://apps.apple.com/us/app/alphawallet-eth-wallet/id1358230430";

    handleClickNext();
  };

  return (
    <div className="mobileWelcomeContainer mobileWelcome">
      <div className="contenedorImagendefondo">
        <img
          src={backgroundWelcome}
          alt="backgroundWelcome"
          className="backgroundImageMobile"
        /></div>

      <img
        src={logoPeronio}
        alt="logoPeronio"
        className="logoPeronioMobile"
      />
      <div className="containerMobile">
        {/*  <img
          src={logoPeronio}
          alt="logoPeronio"
          className="logoPeronioMobile"
        /> */}

        <div className="contentMobileWelcome">
          <div className="contentTextMobile">
            <p className="welcomeMobileTitle">Hola Peronio</p>

            <div className="welcomePinkContent">
              <p className="contentGreetingText">
                Bienvenido al <br /> mundo de Peronio
              </p>
            </div>
            <div className="mobileWelcomeTextS">
              <p className="welcomeContainerTextSMobile">
                PARA ARRANCAR
                <br />
                DESCARGATE
                <span className="welcomeContainerTextWalletMobile">
                  ALPHA WALLET
                </span>
                <br />
                EN TU TELEFONO
              </p>
            </div>
          </div>

          <div className="mobileContainerButtons">
            <button
              onClick={handleClickButton}
              className="mobileButton titleButton"
            >
              DESCARGAR
            </button>
          </div>
          <img
            src={mobileWelcomePerson}
            alt="logoPeronio"
            className="mobileWelcomePerson"
          />
        </div>
      </div>
    </div>
  );
}
