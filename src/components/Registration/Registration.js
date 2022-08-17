import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Shared Pages/Banner/Banner';
import Header from '../Shared Pages/Header/Header';
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Registration = () => {
  //navigate with another page
  const navigate = useNavigate();

  //Login with Google
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  //handle form submit
  const { register, formState: { errors }, handleSubmit } = useForm();

  //Sign Up with Email and Password
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  //user profile update
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  //if user find error
  let signInError;
  if (error || gError || updateError) {
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
  }

  //if loading
  if (loading || gLoading || updating) {
    return <Loading></Loading>
  }

  //find user
  if (user) {
    navigate('/');
  }

  //submit form
  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
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
                <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full max-w-xs"
                      {...register("name", {
                        required: {
                          value: true,
                          message: 'Name is Required'
                        }
                      })}
                      onSubmit={handleSubmit(onSubmit)}
                    />
                    <label className="label">
                      {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                  </div>

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
                  <input className='btn w-full max-w-xs text-white mt-4' type="submit" value="Sign Up" />
                </form>
                <p><small>Already have an account? <a className='text-primary' href="/login">Please login</a></small></p>
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

export default Registration;