import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { CardDetails } from "./pages/CardDetails";
import { MainPage } from "./pages/MainPage";
import { Search } from "./pages/Search";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<MainPage />} />
        <Route path="pokemon/:id" element={<CardDetails />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
