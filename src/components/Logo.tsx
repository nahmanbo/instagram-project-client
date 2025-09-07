import "../styles/logo.css";

type LogoProps = {
  logoUrl: string;
};

export default function Title({logoUrl}: LogoProps) {
  return (<img className="title-logo" src={logoUrl} alt="logo" />);
}