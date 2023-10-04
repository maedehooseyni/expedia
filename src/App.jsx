import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import HotelLayout from "./pages/HotelLayout";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

import ProtectedApp from "./pages/ProtectedApp";
import { BookingProvider } from "./contexts/BookingContext";
import { BookmarkProvider } from "../src/contexts/BookmarkContext";
import BookmarkLayout from "./pages/BookmarkLayout";

export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BookingProvider>
          <BookmarkProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="hotel" element={<HotelLayout />} />
                <Route path="login" element={<Login />} />
                <Route path="/bookmarks" element={<BookmarkLayout />} />

                <Route
                  path="app"
                  element={
                    <ProtectedApp>
                      <AppLayout />
                    </ProtectedApp>
                  }
                >
                  <Route index element={<Navigate replace to="cities" />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />

                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </BookmarkProvider>
        </BookingProvider>
      </CitiesProvider>
    </AuthProvider>
  );
}
