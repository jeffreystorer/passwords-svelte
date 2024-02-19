import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import { ConfirmDeleteModal, Layout, Loading } from './lib/components/common';
import {
  AddCreditCardPage,
  AddPasswordPage,
  EditCreditCardPage,
  EditPasswordPage,
  CreditCardsPage,
  PasswordsPage,
  SignInPage,
} from "@/pages";


const router = createBrowserRouter (
  createRoutesFromElements(
    <>
      <Route path="/" element={<SignInPage />} />
      <Route path="/pages" element={<Layout />}>
        <Route path='confirmdelete' element={<ConfirmDeleteModal />} />      
        <Route path='passwords' element={<PasswordsPage />} />
        <Route path="creditcards" element={<CreditCardsPage />} />
        <Route path="addpassword" element={<AddPasswordPage />} />
        <Route path="addcreditcard" element={<AddCreditCardPage />} />
        <Route
          path="/pages/editpassword/:rowIndex"
          element={<EditPasswordPage />}
        />
        <Route
          path="/pages/editcreditcard/:rowIndex"
          element={<EditCreditCardPage />}
        />
      </Route>
    </>   
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
        <Suspense FallbackComponent={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
    </RecoilRoot>
  </StrictMode>
);
