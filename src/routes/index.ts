import App from "@/App";
import GuestBillPaymentPage from '../Features/FrontOffice/Pages/GuestBillPaymentPage'
import NightAuditPage from '../Features/FrontOffice/Pages/NightAuditPage'
import ServiceBillPage from '../Features/FrontOffice/Pages/ServiceBillPage'

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: serviceBillPage,
        index: true,
      },
      {
        Component: NightAuditPage,
        path: "night-audit-page",
        // index: true,
      },

      {
        Component: GuestBillPaymentPage,
        path: "guest-bill-page",
      },
    ],
  },
]);
