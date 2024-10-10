import {
  Link,
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useState } from "react";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.post("/auth/login", data);
      queryClient.invalidateQueries();
      toast.success("Login successful");
      return redirect("/dashboard");
    } catch (error) {
      // errors.msg = error?.response?.data?.msg
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };
const Login = () => {
  // const errors = useActionData()
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = (navigation.state === "submitting") | isLoading;
  const loginDemoUser = async () => {
    setIsLoading(true);
    const data = {
      email: "test@test.com",
      password: "secret123",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("Take a test drive");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="" />
        <FormRow type="password" name="password" defaultValue="" />
        <SubmitBtn />

        <button
          type="button"
          className="btn btn-block"
          onClick={loginDemoUser}
          disabled={isSubmitting}
        >
          {isSubmitting ? "submitting" : "explore the app"}
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            {" "}
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
