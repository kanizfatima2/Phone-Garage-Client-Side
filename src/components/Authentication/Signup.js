import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../Custom Hooks/useToken';
import { AuthContext } from './Context/AuthProvider';

const Signup = () => {

    const { createUser, updateUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [signError, setSignError] = useState('')

    const [createdUserEmail, setcreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    if (token) {
        navigate('/home')
    }


    const handleSignup = (data) => {
        console.log(data)
        setSignError('')

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)

                toast.success('User Created Successfully')

                const userInfo = {
                    displayName: data.name,
                    specialty: data.specialty
                    // photoURL: data.photo
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserDatabase(data.name, data.email, data.specialty)
                    })
                    .catch(err => console.error(err))
            })

            .catch(err => {
                console.error(err)
                setSignError(err.message)
            })

    }
    const saveUserDatabase = (name, email, specialty) => {
        const user = {
            name, email, specialty
        }
        fetch('https://mobile-resale-server-side.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setcreatedUserEmail(email)
            })
    }
    return (
        <div>
            <div className='h-[800px] flex justify-center items-center '>
                <div className='w-96 p-7 border-solid rounded-xl text-white  bg-gray-900 '>
                    <h2 className='text-2xl  font-bold text-center'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignup)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-white">Full Name</span></label>

                            <input type="text" placeholder="full name"
                                {...register("name", { required: true })} className="input input-bordered w-full max-w-xs text-black" />
                            {errors.name && <span><small className='text-red-600'>name is required</small></span>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-white">Phone Number</span></label>

                            <input type="text" placeholder="phone number"
                                {...register("phone", { required: true, maxLength: 11 })} className="input input-bordered w-full max-w-xs text-black" />
                            {errors.phone && <span><small className='text-red-600'>phone number is required</small></span>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-white">Email</span></label>

                            <input type="email" placeholder="email"
                                {...register("email", { required: true })} className="input input-bordered w-full max-w-xs text-black" />
                            {errors.email && <span><small className='text-red-600'>email is required</small></span>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-white">Password</span></label>

                            <input type="password" placeholder="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Password must be 8 characters long" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'Password must have uppercase, number and special characters' }
                                })} className="input input-bordered w-full max-w-xs text-black" />
                            {errors.password && <span><small className='text-red-600'>{errors.password.message} </small></span>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text text-white">Specialty</span></label>
                            <select {...register("specialty", { required: true })} className="select select-bordered w-full max-w-xs text-black">

                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>

                            </select>
                            {errors.specialty && <span><small className='text-red-600'>specialty is required</small></span>}
                        </div>

                        <label className="label"><span className="label-text text-white underline">Forget Password?</span></label>
                        {
                            signError &&
                            <p><small className='text-red-600'>{signError}</small></p>
                        }
                        <input value='Sign up' type="submit" className='btn btn-gray w-full my-6' />
                    </form>

                    <p><small>Already have an Account?</small> <Link to='/login' className='text-info text-md font-bold focus:underline hover:underline'>please login</Link></p>


                </div>

            </div>
        </div>
    );
};

export default Signup;