// import React from 'react'
import { Outlet } from "react-router-dom"
import Adminheader from "./admin/adminComponents/Adminheader"
// import Dashboard from "./admin/adminComponents/Dashboard"

function AdminLayout() {
  return (
    <>
    <Adminheader />
    {/* <Dashboard /> */}
    {/* Additional layout components or navigation for admin pages */}
    <Outlet />
  </>
  )
}

export default AdminLayout