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

    res.json({ messages: results });
  } catch (err) {
    console.log("<<<<<<<<<<err>>>>>>>")
    console.log(err);
  }
};