import { StatusBar } from "expo-status-bar";
import DrawerStack, { AuthStack } from "./DrawerNavigator";
import Login from "./screens/LoginScreen";
import { useContext, useState, useEffect } from "react";
import { Text } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { NavigationContainer } from "@react-navigation/native";

import {
  AuthenticatedUserProvider,
  AuthenticatedUserContext,
} from "./Context/usercontext";
import Display from "./components/Display";
import { StoreProvider } from "./Context/StoreContext";
import { OrderProvider } from "./Context/OrderContext";
function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setisLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null);
      setisLoading(false);
    });

    //cleaning up useEffect
    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return <Display />;
  }
  return (
    <NavigationContainer>
      {user ? <DrawerStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <StoreProvider>
      <OrderProvider>
        <AuthenticatedUserProvider>
          <RootNavigator />
          <StatusBar style="auto" />
        </AuthenticatedUserProvider>
      </OrderProvider>
    </StoreProvider>
  );
}
