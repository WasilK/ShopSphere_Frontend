export function Login() {
  return (
    <>
      <div className="mb-3 row">
        <label for="inputEmail4" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="example@gmail.com"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
    </>
  );
}
