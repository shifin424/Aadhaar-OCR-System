import { createWorker } from 'tesseract.js';

export const imageFileParser = async (req, res, next) => {
  try {
    const promises = [];
    for (const file of req.files) {
      const worker = await createWorker('eng');
      const { data: { text } } = await worker.recognize(file.path);
      promises.push(Promise.resolve({ text }));
      await worker.terminate();
    }

    const results = await Promise.all(promises);
    const filteredData = results.map(({ text }) => {

    const matchName = text.match(/(?<=\n)([^\n]*)\n.*DOB:/);
    const name = matchName ? matchName[1].trim() : '';

    const matchFirstSet = text.match(/DOB: (\d{2}\/\d{2}\/\d{4})[\s\S]*?\n([^\n]*)/);
    const [, dob] = matchFirstSet || [null, null];

    const matchGender = text.match(/(?:MALE|FEMALE)/);
    const gender = matchGender ? matchGender[0] : '';

    const matchMobileNumber = text.match(/Mobile No\. (\d{10})/);
    const mobileNumber = matchMobileNumber ? matchMobileNumber[1] : null;

    const matchAadhaarNumber = text.match(/(\d{4}\s\d{4}\s\d{4})/);
    const aadhaarNumber = matchAadhaarNumber ? matchAadhaarNumber[1].replace(/\s/g, '') : null;

    const matchSecondSet = text.match(/Address SRE[\s\S]*?C\/O:[\s\S]*?([^\n]*[\s\S]*?)(Kerala - \d{6})/);
    const [, address, pincode] = matchSecondSet || [null, null];

      return {
        name: name,
        dob,
        gender,
        mobileNumber,
        aadhaarNumber,
        address: address,
        pincode,
      };
    });

    res.json({ message: filteredData });
  } catch (err) {
    console.log(err);
    res.status(500).json({err:"Internal server error"})
  }
};






