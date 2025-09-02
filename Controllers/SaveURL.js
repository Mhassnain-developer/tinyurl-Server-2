import  URLs from "../Models/URL.js";

export const SaveURL = async (req,res) => {
    const {longUrl} = req.body;

    try{
        const newURL = new URLs({longUrl: longUrl});
        const savedRef = await newURL.save();
        const shortURLId = savedRef._id;
        const shortURL = `${process.env.ServerURL}/url/${shortURLId}`;
        res.status(200).json({
            ok: true,
            shortURL: shortURL,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
        });
    }
};