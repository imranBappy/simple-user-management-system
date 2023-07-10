import React from 'react';

const Form = (props) => {
    const { data, handleChange, handleSubmit } = props;
    return (
        <div className=' max-w-4xl m-auto shadow-md my-5 bg-white'>
            <form onSubmit={handleSubmit} className=' w-full px-10 py-5'>
                <div className=' mb-3'>
                    <input
                        onChange={handleChange}
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="Name"
                        required
                        className="appearance-non relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                        placeholder="Name"
                        value={data['name']}
                    />
                </div>

                <div className=' mb-3'>
                    <input
                        onChange={handleChange}
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        required
                        className="appearance-non relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                        placeholder="Email"
                        value={data['email']}
                    />
                </div>

                <div className=' mb-3'>
                    <input
                        onChange={handleChange}
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="phone"
                        required
                        className="appearance-non relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                        placeholder="Phone"
                        value={data['phone']}
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;