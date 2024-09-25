'use client'
import { Provider } from "react-redux";
import "./globals.css";
import store from "./redux_toolkit/store/page";

const RootLayout = ({children,}: Readonly<{children: React.ReactNode;}>)=> {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
          {children}
      </Provider>
      </body>
    </html>
  );
}

export default RootLayout;