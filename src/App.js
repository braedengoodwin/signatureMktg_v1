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

    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
