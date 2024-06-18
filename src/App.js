import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import RootLayout from "./pages/RootLayout";
import HomePage from "./components/Homepage";
import InsuranceServices from "./pages/insuranceServices/InsuranceServices";
import LeadGeneration from "./pages/insuranceServices/LeadGeneration";
import AppointmentSetting from "./pages/insuranceServices/AppointmentSetting";
import EmployeeBenefits from "./pages/insuranceServices/EmployeeBenefits";
import ProgramSpecifics from "./pages/insuranceServices/ProgramSpecifics";
import DateApptSamples from "./pages/insuranceServices/XDateApptSamples";
import SicCodes from "./pages/insuranceServices/SicCodes";
import MortgageServices from "./pages/mortgageServices/MortgageServices";
import MortgageListServ from "./pages/mortgageServices/MortgageListServ";
import DirectMailServices from "./pages/directMail/DirectMailServices";
import MortgageMailers from "./pages/directMail/MortgageMailers";
import InsuranceMailers from "./pages/directMail/InsuranceMailers";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    // errorElement: 
    children:[
      {index: true, element: <HomePage />},
      {path: 'insurance-marketing-services', element: <InsuranceServices/>},
      {path: 'lead-generation' , element: <LeadGeneration/>},
      {path: 'appointment-setting' , element: <AppointmentSetting/>},
      {path: 'employee-benefits' , element: <EmployeeBenefits/>},
      {path: 'program-specifics' , element: <ProgramSpecifics/>},
      {path: 'x-date-appt-samples' , element: <DateApptSamples/>},
      {path: 'sic-codes' , element: <SicCodes/>},
      {path: 'mortgage-marketing-services' , element: <MortgageServices/>},
      {path: 'mortgage-list' , element: <MortgageListServ/>},
      {path: 'direct-mail-services' , element: <DirectMailServices/>},
      {path: 'mortgage-mailers' , element: <MortgageMailers/>},
      {path: 'insurance-mailers' , element: <InsuranceMailers/>},
      {path: 'testimonials', element: <Testimonials/>},
      {path: 'contact', element: <Contact/>}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
