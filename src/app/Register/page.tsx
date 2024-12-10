import SignIn from "./SignIn";

export default function Home() {
  return (
    <div className="container-fluid min-vh-100 ">
      <div
        className="row justify-content-center vh-90 "
        style={{ minHeight: "inherit" }}>
        <div className="col-8 justify-content-center align-content-center">
          <div className="row text-center">
            <h1>Register</h1>
          </div>
          <div className="row justify-content-center ">
            <div className="w-75">
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
