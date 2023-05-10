const waitlistModel = require("../models/waitlist");

class Waitlist {

    async getAllWaitlist(req, res) {
        try {
            let waitlist = await waitlistModel.find({}).sort({ _id: -1 });
            if(!waitlist) {
                return res.status(404).json({ message: "No waitlist Found" });
            }
            return res.status(200).json({ waitlist });
        } catch (err) {
            console.log(err);
        }
        
    }

    async postAddWaitlist(req, res) {
        let { email } = req.body;
        if (!email) {
            return res.json({ message: "Email must be required" });
        } else {
        try {
            let newWaitlist = new waitlistModel({
            email
            });
            let save = await newWaitlist.save();
            if (save) {
            return res.json({ success: "Email sent" });
            }
        } catch (err) {
            return res.json({ error: err });
        }
        }
    }
}

const waitlistController = new Waitlist();
module.exports = waitlistController;