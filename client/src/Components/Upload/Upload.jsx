import { useState } from "react";
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";
import { uploadImageApi } from "../../Services/Services";
import { message } from 'antd'



const Upload = () => {
    const [frontFile, setFrontFile] = useState(null);
    const [backFile, setBackFile] = useState(null);


    const handleFrontFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFrontFile(selectedFile)
    }

    const handleBackFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setBackFile(selectedFile)
    }

    const headers = {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    };

    const handleUpload = async () => {
        try {
            if (frontFile && backFile) {
                console.log("Handle sumbitted")
                const formData = new FormData();
                formData.append('uploads', frontFile);
                formData.append('uploads', backFile);

                const response = await uploadImageApi(formData, headers);
                console.log(response)
                if (response.status === 200) {
                    message.success("PDF Uploaded Sucessfully")
                } else {
                    message.error("Network error")
                }
            }

        } catch (err) {
            console.log(err)
        }

    };

    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-gray-300">
                <div className="bg-gray-100 text-black h-full flex flex-col pb-5 justify-around">
                    <h5 className="ml-14 font-sans">Aadhaar Front</h5>
                    <div className="bg-gray-600  h-52 w-[40rem] ml-14 rounded-full">
                        <div className={`flex items-center justify-center w-full rounded-md ${frontFile ? 'bg-gray-800' : ''}`}>
                            <label
                                htmlFor="front-file"
                                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-none rounded-lg shadow-lg cursor-pointer ${frontFile ? 'bg-gray-800' : 'bg-white'} hover:bg-gray-800`}
                            >
                                {frontFile ? (
                                    <>
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            {frontFile && <img className="mt-1 h-[15rem] " src={URL.createObjectURL(frontFile)} alt="Front Aadhaar" />}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-blue-500">
                                                <span className="font-semibold">Click here to Upload /</span> Capture
                                            </p>
                                        </div>
                                    </>
                                )}
                                <InputBox id="front-file" name="uploads" className="hidden" type="file" onChange={handleFrontFileChange} />
                            </label>
                        </div>
                    </div>

                    <h5 className="ml-14 mt-14 font-sans">Aadhaar Back</h5>
                    <div className="bg-gray-600  h-52 w-[40rem] ml-14 rounded-full">
                        <div className={`flex items-center justify-center w-full rounded-md ${backFile ? 'bg-gray-800' : ''}`}>
                            <label
                                htmlFor="back-file"
                                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-none rounded-lg shadow-lg cursor-pointer ${backFile ? 'bg-gray-800' : 'bg-white'} hover:bg-gray-800`}
                            >
                                {backFile ? (
                                    <>
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            {backFile && <img className="mt-1 h-[15rem] w-" src={URL.createObjectURL(backFile)} alt="Front Aadhaar" />}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-blue-500">
                                                <span className="font-semibold">Click here to Upload /</span> Capture
                                            </p>
                                        </div>
                                    </>
                                )}
                                <InputBox id="back-file" name="uploads" className="hidden" type="file" onChange={handleBackFileChange} />
                            </label>
                        </div>

                    </div>
                    <div className="flex justify-center">
                        <Button onClick={handleUpload} text="PARSE AADHAAR" className="bg-blue-500 text-white mt-14 px-16 py-3 rounded-md" />
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-gray-300">
                <div className="bg-white  h-full">
                   {/* <h1 className="font-semibold ml-10  pt-8">API Response</h1>
                   <div className="bg-gray-200 h-28 mt-8 rounded-md ml-10 w-[43rem] ">
                    <p className="ml-8 pt-5">'Start Performing OCR Inputing Your Aadhaar front and back'</p>
                   </div> */}

                    {/*  */}

                    <h1 className="font-bold ml-10  pt-8">Parsed Data</h1>


                </div>



                
            </div>

        </div>
    );
}

export default Upload;
