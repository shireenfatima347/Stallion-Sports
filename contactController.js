const sendContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        console.log(`New Contact Form Submission:
        Name: ${name}
        Email: ${email}
        Message: ${message}`);
        
        res.json({ success: true, message: "Message received successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error sending message" });
    }
};

module.exports = { sendContactMessage };
