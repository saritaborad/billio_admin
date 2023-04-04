import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ChangePassword from "./Pages/Common/ChangePassword";
import ForgotPassword from "./Pages/Common/ForgotPassword";
import Login from "./Pages/Common/Login";
import Dashboard from "./Pages/Dashboard";
import Portfolio from "./Pages/Portfolio";
import PortfolioData from "./Pages/PortfolioData";
import PortfolioDetail from "./Pages/PortfolioDetail";
import UserDetail from "./Pages/UserDetail";
import Users from "./Pages/Users";
import Admin from "./Pages/Admin";
import AdminEdit from "./Pages/AdminEdit";
import Payment from "./Pages/Payment";
import Setting from "./Pages/Setting";
import PageNotFound from "./Pages/PageNotFound";
import ResetPassword from "./Pages/Common/ResetPassword";

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = localStorage.getItem("admin_token");
  return isAuthenticated !== null && isAuthenticated !== undefined && isAuthenticated !== "" ? children : <Navigate to={redirectTo} />;
}

export default function RoutesMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/forgot-password" exact element={<ForgotPassword />} />
        <Route path="/reset-password" exact element={<ResetPassword />} />

        <Route
          path="/change-password"
          exact
          element={
            <RequireAuth redirectTo="/login">
              <ChangePassword />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          exact
          element={
            <RequireAuth redirectTo="/login">
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/portfolio"
          exact
          element={
            <RequireAuth redirectTo="/login">
              <Portfolio />
            </RequireAuth>
          }
        />
        <Route
          path="/users"
          exact
          element={
            <RequireAuth redirectTo="/login">
              <Users />
            </RequireAuth>
          }
        />
        <Route
          path="/user-detail"
          exact
          element={
            <RequireAuth redirectTo="/login">
              <UserDetail />
            </RequireAuth>
          }
        />
        <Route
          path="/portfolio-detail"
          exact
          element={
            <RequireAuth redirectTo="/login">
              <PortfolioDetail />
            </RequireAuth>
          }
        />
        <Route
          path="/portfolio-data"
          exact
          element={
            <RequireAuth redirectTo="/login">
              <PortfolioData />
            </RequireAuth>
          }
        />
        <Route
          path="/payment"
          exact
          element={
            <RequireAuth redirectTo="/login">
              <Payment />
            </RequireAuth>
          }
        />
        <Route
          path="/page-not-found"
          exact
          element={
            <RequireAuth redirectTo="/login">
              <PageNotFound />
            </RequireAuth>
          }
        />
        <Route
          path="/admins"
          exact
          element={
            <RequireAuth redirectTo="/login">
              <Admin />
            </RequireAuth>
          }
        />
        <Route
          path="/admin-edit"
          exact
          element={
            <RequireAuth redirectTo="/login">
              <AdminEdit />
            </RequireAuth>
          }
        />
        <Route
          path="/setting"
          exact
          element={
            <RequireAuth redirectTo="/login">
              <Setting />
            </RequireAuth>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
