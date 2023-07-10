import React from 'react';

const Form = (props) => {
    const { data, handleChange, handleSubmit } = props;
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className=' w-full px-10 py-5'>
                <div className=' mb-3'>
                    <input
                        onChange={handleChange}
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="Name"
                        required
                        className="input_field"
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
                        className="input_field"
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
                        className="input_field"
                        placeholder="Phone"
                        value={data['phone']}
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="submit_btn">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;