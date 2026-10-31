import React from "react";

function Signup() {
    return (
        <div>

            <h2 className="ml-auto mr-auto text-black text-center p-5 text-4xl font-semibold">Sign up to save 10%</h2>
            <p className="ml-auto mr-auto text-gray-900 text-center">Be the first to know about new collections and exclusive offers.</p>

            <form className="ml-70 pt-10 w-200 flex flex-row gap-5 pb-10">
                <input
                    name="name"
                    type="name"
                    placeholder="First Name"
                    className="w-100 h-12 px-4 border border-gray-300 rounded-md"
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-100 h-12 px-4 border border-gray-300 rounded-md"
                />
            </form>


            <button className="rounded-full h-12 w-200 bg-[#626652] mb-10 ml-70 mr-60 text-white font-bold" >SIGN UP</button>

            <p className="text-center pb-5">By Clicking 'Sign Up' You agree that you have read and understood Koala's Privacy Policy. </p>

            <label className="flex items-center justify-center gap-2 mb-5">
                <input
                    type="checkbox"
                    name="marketing"
                    className="h-4 w-4"
                />

                <p>
                    I agree to receive marketing communications and product updates from Koala.
                </p>
            </label>


        </div>
    )
}


export default Signup;