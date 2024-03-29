import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Shared Pages/Banner/Banner';
import Header from '../Shared Pages/Header/Header';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading'

const Login = () => {
  //Sign In With Google
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  //handle from submit
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  //Login with User
  const [
    signInWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useSignInWithEmailAndPassword(auth);

  //if user find error
  let signInError;
  if(error || error1){
    signInError = <span className="label-text-alt text-red-500">{error?.message || error1?.message}</span>;
  }
  
  //navigate with another page
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  //if loading
  if(loading || loading1){
    return <Loading></Loading>;
  }

  //find user
  if (user1) {
    navigate(from, { replace: true });
  }

  //submit form
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password);
  }
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <div className="mt-10 mb-10">
        <div className="grid sm:grid-cols-1 lg:grid-cols-1mx-auto">
          <div className='flex justify-center items-center my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: 'Email is Required'
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a valid Email'
                      }
                    })}
                    />
                    <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  </label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: 'Password is Required'
                      },
                      minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer'
                      }
                    })}
                    />
                    <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  </label>
                  </div>

                  {signInError}
                  <input className='btn w-full max-w-xs text-white mt-3' type="submit" value="Login" />
                </form>
                <p><small>New to Food Baaz? <a className='text-info' href="/registration">Create New Account</a></small></p>
                <div className="divider">OR</div>
                <button
                  onClick={() => signInWithGoogle()}
                  className="btn btn-outline"
                >Continue with Google</button>
              </div>
            </div>
          </div >
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;