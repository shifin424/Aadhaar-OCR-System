import AadharPromo from '../../Assets/Images/Aadhaar-logo.png'
import Button from '../Button/Button'
import { Link } from "react-router-dom"


const Banner = () => {
    return (
        <div>
            <div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 md:w-1/2">
                        <img src={AadharPromo} alt="AadharPromo" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 p-10 flex flex-col justify-center items-center md:items-start md:w-1/2">
                        <div className="mb-8 text-center md:text-left">
                            <h1 className="text-4xl font-semibold font-serif mb-4">
                                AadhaarScan: Effortlessly Perform Aadhaar OCR.
                            </h1>
                            <p className="text-gray-600">
                                Revolutionize your document processing by effortlessly extracting key details from Aadhaar cards.
                                Our OCR technology ensures swift and accurate recognition of information such as name, gender, date of birth, and Aadhaar number.
                                Tailor the application to your unique needs, optimizing your workflow and enhancing overall efficiency.
                            </p>
                        </div>
                        <div className="mb-4 md:mb-0 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
                            <Link to="/upload-image" >  <Button
                                className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition w-full md:w-full"
                                text="Explore"
                            />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner