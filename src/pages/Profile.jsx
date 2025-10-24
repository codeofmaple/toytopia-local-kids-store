import React, { useContext, useEffect, useState } from "react";
import { FaUserAlt, FaImage, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
import LoadingPage from "./LoadingPage";

const Profile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 100)

        return () => clearInterval(timer);
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!name.trim() || !photoURL.trim()) {
            toast.error("Please fill out both fields before saving.");
            return;
        }
        setLoadingSubmit(true);
        updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
                setUser((prevUser) => ({
                    ...prevUser,
                    displayName: name,
                    photoURL: photoURL,
                }));

                toast.success("Profile updated successfully!");
            })
            .catch((error) => {
                console.error("Profile update error:", error);
                toast.error("Profile update failed!");
            })
            .finally(() => {
                setLoadingSubmit(false);
            });
    };
    const handleInputChange = (result) => (e) => {
        result(e.target.value);
    };

    if (loading) {
        return <LoadingPage></LoadingPage>
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-pink-50 via-yellow-50 to-blue-50 flex justify-center items-center py-16 px-6">
            <title>ToyTopia | Profile</title>

            <div className="bg-white shadow-lg rounded-3xl p-8 max-w-md w-full text-center border-4 border-pink-200 hover:shadow-2xl transition-all duration-300">
                {/*user img */}
                <div className="size-32 mx-auto rounded-full overflow-hidden border-4 border-pink-300">
                    {user?.photoURL ? (
                        <img src={user.photoURL} alt="user-photo" className="size-full object-cover" />
                    ) : " "}
                </div>

                {/*user name */}
                <h2 className="text-3xl font-extrabold text-pink-600 mt-4">
                    {user?.displayName || " "}
                </h2>

                {/*user email */}
                <p className="text-gray-700 mt-2 flex justify-center items-center gap-2">
                    <MdEmail className="text-pink-500" />
                    {user?.email || " "}
                </p>
                <p className="mt-6 -mb-5 text-sm text-gray-600">Forgot your password <Link className="text-pink-500 hover:underline font-semibold" to="/forget-password">Click here</Link>.</p>


                <div className="h-0.5 bg-pink-300 my-6 mb-10"></div>

                {/* update form */}
                <h5 className="text-pink-600 text-lg font-bold mb-1">Update Your Profile</h5>
                <form onSubmit={handleUpdate} className="space-y-4 text-left">
                    {/* name */}
                    <div>
                        <label className="block text-pink-600 font-semibold mb-1">
                            <FaUserAlt className="inline mr-2 text-pink-400" /> Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={handleInputChange(setName)}
                            placeholder="Enter your name"
                            className="w-full border border-pink-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
                            disabled={loadingSubmit}
                            required
                        />
                    </div>
                    {/* img url */}
                    <div>
                        <label className="block text-pink-600 font-semibold mb-1">
                            <FaImage className="inline mr-2 text-blue-500" /> Photo URL
                        </label>
                        <input
                            type="text"
                            value={photoURL}
                            onChange={handleInputChange(setPhotoURL)}
                            placeholder="Enter photo URL"
                            className="w-full border border-pink-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
                            disabled={loadingSubmit}
                            required
                        />
                    </div>
                    {/* btn */}
                    <button
                        type="submit"
                        disabled={loadingSubmit}
                        className={`w-full py-2 rounded-full shadow transition-all duration-300 ${loadingSubmit
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-pink-500 hover:bg-pink-600 text-white'
                            }`}
                    >
                        {loadingSubmit ? 'Saving Changes...' : 'Save Changes'}
                    </button>
                </form>
                {/* forget password */}
                {/* <p className="mt-6 -mb-6 text-sm text-gray-600">Forgot your password <Link className="text-pink-500 hover:underline font-semibold" to="/forget-password">Click here</Link></p> */}
            </div>
        </div>
    );
};

export default Profile;

