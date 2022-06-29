function RegisterForm() {
    return (

        <div className=" row">
            <div className="col-sm-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                <div className="card mx-5 my-5 px-5 py-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 class="mb-5">REGISTER</h2>
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control"  aria-describedby="emailHelp" name="username" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" name="cpassword"/>
                        </div>
                        <button type="submit" class="btn btn-success"><strong>Register</strong></button>
                    </form>
                </div>

            </div>
        </div>

    );
}

export default RegisterForm;