import PropTypes from 'prop-types';

const Banner = ({ freeCredit }) => {
    return (
        <div className=" bg-black bg-cover bg-center text-center py-20 p-4 w-5/6 mx-auto rounded-lg" style={{ backgroundImage: "url('/dist/assets/bg-shadow.png')" }}>

            <div className="relative max-w-4xl mx-auto text-white z-10">
                <div className="flex justify-center">
                    <img className="w-32 md:w-40 lg:w-48" src="/dist/assets/banner-main.png" alt="" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mt-8">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mt-4">
                    Beyond Boundaries Beyond Limits
                </p>
                <button onClick={freeCredit} className="mt-8 bg-primaryclr text-black font-bold py-3 px-6 rounded-lg hover:bg-primaryclr transition duration-300 shadow-lg ring ring-primaryclr ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900">
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

Banner.propTypes = {
    freeCredit: PropTypes.func.isRequired,
};

export default Banner;