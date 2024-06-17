import headerImg from "../images/logo.png";
import FlyoutLink from "./Dropdown";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between p-2 h-full">
      <img
        className="h-24 max-w-lg mt-4 sm:mt-8 ml-8 mb-4 sm:mb-16"
        src={headerImg}
        alt="Logo for Signature Marketing"
      />
      <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 mb-8 -ml-20 mr-4 whitespace-nowrap">
        <FlyoutLink href="" FlyoutContent={HomeContent}>
          <NavLink to="/" className="text-xs">
            Home
          </NavLink>
        </FlyoutLink>

        <FlyoutLink href="" FlyoutContent={DropdownContent}>
          <NavLink to="/insurance-marketing-services" className="text-xs">
            Insurance Services
          </NavLink>
        </FlyoutLink>

        <FlyoutLink href="" FlyoutContent={MortgageServices}>
          <NavLink to="/mortgage-marketing-services" className="text-xs">
          Mortgage Services
          </NavLink>
        </FlyoutLink>

        <FlyoutLink href="" FlyoutContent={DirectMailServices}>
          <NavLink to="/direct-mail-services" className="text-xs">
          Direct Mail
          </NavLink>
        </FlyoutLink>

        <FlyoutLink href="" FlyoutContent={Testimonials}>
          <NavLink to="/testimonials" className="text-xs">
          Testimonials
          </NavLink>
        </FlyoutLink>

        <h2 className="text-xs">Contact</h2>
        <h2 className="text-xs">Signature Select</h2>
      </div>
    </header>
  );
}

const DropdownContent = () => {
  return (
    <div className="w-44 bg-[#6593d1] p-6 shadow-xl">
      <div className="mb-3 space-y-2">
        <NavLink
          to="/lead-generation"
          className="block text-xs hover:underline"
        >
          Lead Generation
        </NavLink>

        <NavLink
          to="/appointment-setting"
          className="block text-xs hover:underline"
        >
          Appointment Setting
        </NavLink>

        <NavLink
          to="/employee-benefits"
          className="block text-xs hover:underline"
        >
          Employee Benefits
        </NavLink>

        <NavLink
          to="/program-specifics"
          className="block text-xs hover:underline"
        >
          Program Specifics
        </NavLink>

        <NavLink
          to="/x-date-appt-samples"
          className="block text-xs hover:underline"
        >
          X-Date and Appt Samples
        </NavLink>

        <NavLink to="/sic-codes" className="block text-xs hover:underline">
          SIC Codes
        </NavLink>
      </div>
    </div>
  );
};

const HomeContent = () => {
  return <span></span>;
};

const MortgageServices = () => {
  return(
    <div className="w-44 bg-[#6593d1] p-2  shadow-xl">
      <div className="mb-2 space-y-2 pl-3 pt-2">
        <NavLink
          to="/mortgage-list"
          className="block text-xs hover:underline"
        >
          Mortgage List Services 
        </NavLink>
      </div>
    </div>
  )
}

const DirectMailServices = () => {
  return(
    <div className="w-44 bg-[#6593d1] p-2  shadow-xl">
      <div className="mb-2 space-y-2 pl-3 pt-2">
        <NavLink
          to="/mortgage-mailers"
          className="block text-xs hover:underline"
        >
          Mortgage Mailers
        </NavLink>

        <NavLink
          to="/insurance-mailers"
          className="block text-xs hover:underline"
        >
          Insurance Mailers
        </NavLink>
      </div>
    </div>
  )
}

const Testimonials = () => {
  return <span></span>;
};