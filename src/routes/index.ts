import App from "@/App";
import GuestBillPaymentPage from "../features/FrontOffice/Pages/GuestBillPaymentPage";
import NightAuditPage from "../features/FrontOffice/Pages/NightAuditPage";
import serviceBillPage from "../features/FrontOffice/Pages/ServiceBillPage";

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
