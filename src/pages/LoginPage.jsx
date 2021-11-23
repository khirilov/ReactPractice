import { useContext } from "react";
import { AuthContext } from "../context";

const LoginPage = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onClick={login}>
        <input type="text" placeholder="login" />
        <input type="password" placeholder="password" />
        <button className="btn">log in</button>
      </form>
    </div>
  );
};

export { LoginPage };
