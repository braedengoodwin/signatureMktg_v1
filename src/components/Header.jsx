import headerImg from "../images/logo.png";
import FlyoutLink from "./Dropdown";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between p-2 h-full">
      <img className="h-24 max-w-lg mt-4 sm:mt-8 ml-8 mb-4 sm:mb-16" src={headerImg} alt="Logo for Signature Marketing" />
      <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 mb-8 -ml-20 mr-4 whitespace-nowrap">
        <h2 className="text-xs">Home</h2>
        <FlyoutLink href='#' FlyoutContent={DropdownContent}>Insurance Services</FlyoutLink>
        <h2 className="text-xs">Mortgage Services</h2>
        <h2 className="text-xs">Direct Mail</h2>
        <h2 className="text-xs">Testimonials</h2>
        <h2 className="text-xs">Contact</h2>
        <h2 className="text-xs">Signature Select</h2>
      </div>
    </header>
  );
}

const DropdownContent = () => {
  return <div className="h-24 w-40 bg-black p-6 shadow-xl"> test</div>
}