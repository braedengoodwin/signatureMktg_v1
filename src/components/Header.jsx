import headerImg from "../images/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between p-2 h-full">
      <img className="h-24 max-w-lg mt-4 sm:mt-8 ml-8 mb-4 sm:mb-16" src={headerImg} alt="Logo for Signature Marketing" />
      <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 mb-8 -ml-20 whitespace-nowrap">
        <h2 className="text-xs">Home</h2>
        <h2 className="text-xs">Insurance Services</h2>
        <h2 className="text-xs">Mortgage Services</h2>
        <h2 className="text-xs">Direct Mail</h2>
        <h2 className="text-xs">Testimonials</h2>
        <h2 className="text-xs">Contact</h2>
        <h2 className="text-xs">Signature Select</h2>
      </div>
    </header>
  );
}
