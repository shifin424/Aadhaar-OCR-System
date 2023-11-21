
# AadhaarScan - Streamlining Aadhaar Data Extraction with MERN Stack

AadhaarScan is a comprehensive web application built on the MERN (MongoDB, Express.js, React, Node.js) stack. It is designed to extract Aadhaar card information from images, providing users with a seamless and innovative solution. Leveraging cutting-edge technologies, AadhaarScan ensures efficient parsing of Aadhaar card details for enhanced user convenience.



**The following tools were utilized for the project:**

- libraries: Morgan, Multer, Tesseract.js, Axios, Antd, Sass, and Sweetalert2.




## API Reference

#### Parse Aadhaar

```http
  POST /api/v1/upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `FormData` | **Required**. Required. Image data to upload|
| `headers` | `Object` | **Required**. Headers for the request|


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` The port number that the server will listen on

`ALLOWED_ORIGINGS`: Defines permitted domains for server access, enhancing security by restricting incoming requests to specified origins.

## Deployment Instructions:

#### Prerequisites:

- Node.js should be installed on your system.


#### Step 1: Clone the Project

Open a terminal and run the following command to clone this project:
```bash
git clone https://github.com/shifin424/Aadhaar-OCR-System.git
 
```
#### Step 2: Navigate to the Project Directory of Client 

Navigate to the `client` directory within the cloned project using the command:
```bash
cd Aadhaar-OCR-System/client
 
```

#### Step 3: Install Global Dependencies

Run the following command. This will help with server restarts during development.
```bash
 npm install
 
```

#### Step 3: Start Running the Front-end 

After navigating to the `client` directory, start the front end using the following command:
```bash
npm start
 
```

#### Step 4: Navigate to the Project Directory of server 

Open Another terminal and Navigate to the `server` directory within the cloned project using the command:
```bash
cd Aadhaar-OCR-System/server
 
```

#### Step 5: Configure Environment Variables

Before running the backend server, make sure to create an `.env` file in the `server` directory. Add the following environment variables to the file:
```bash
PORT = your_preferred_port
ALLOWED_ORIGINS = http://localhost:your_frontend_port 
 
```

#### Step 6: Install Global Dependencies

Run the following command to install nodemon globally. This will help with server restarts during development.
```bash
 npm install
 
```

## Conclusion

"AadhaarScan is an innovative web application that seamlessly extracts Aadhaar card information from images, offering a user-friendly experience. Developed with the powerful MERN (MongoDB, Express.js, React, Node.js) stack, the project combines cutting-edge technologies to deliver efficient parsing functionality.

Feel free to explore and contribute to the project, making Aadhaar information extraction a smoother process for users. If you encounter any issues or have suggestions, please check out the contribution guidelines.

Thank you for choosing AadhaarScan!

You can access the live version of AadhaarScan [here](https://aadhaarscan.netlify.app).




































