import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AddPurchase from '../src/pages/AddPurchase'
import Billing from '../src/pages/Billing'
import AddStaff from '../src/pages/AddStaff'
import AddSuppliers from '../src/pages/AddSupplier'
import AllCustomers from '../src/pages/AllCustomers'
import AllPurchase from '../src/pages/AllPurchase'
import AllStaff from '../src/pages/AllStaff'
import AllSuppliers from '../src/pages/AllSuppliers'
import Inventory from '../src/pages/Inventory'
import PrescriptionView from '../src/pages/PrescriptionView'
import SupplierStocks from '../src/pages/SupplierStocks'
import Receptionist from './pages/Receptionist'
import PrescriptionForm from './pages/PrescriptionForm'
import ViewPatientRecords from './pages/ViewPatientRecords'
import CreatePatientRecords from './pages/CreatePatientRecords'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/billing' element={<Billing />} />
        <Route  path='/addpurchase' element={<AddPurchase />} />
        <Route  path='/addstaff' element={<AddStaff />} />
        <Route  path='/addsuppliers' element={<AddSuppliers />} />
        <Route  path='/allcustomers' element={<AllCustomers />} />
        <Route  path='/allpurchase' element={<AllPurchase />} />
        <Route  path='/allstaff' element={<AllStaff />} />
        <Route  path='/allsuppliers' element={<AllSuppliers />} />
        <Route  path='/inventory' element={<Inventory />} />
        <Route  path='/prescriptionview' element={<PrescriptionView />} />
        <Route  path='/supplierstocks' element={<SupplierStocks />} />
        <Route  path='/receptionist' element={<Receptionist />} />
        <Route  path='/prescriptionform' element={<PrescriptionForm />} />
        <Route  path='/viewpatientrecords' element={<ViewPatientRecords />} />
        <Route  path='/createpatientrecords' element={<CreatePatientRecords />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
