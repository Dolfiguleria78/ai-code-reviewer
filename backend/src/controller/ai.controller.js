const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    try {
        console.log("BODY:", req.body);

        const code = req.body.code;

        if (!code) {
            return res.status(400).json({
                message: "Code is required"
            });
        }

        const response = await aiService(code);

        res.send(response);

    } catch (error) {
    console.error("========== ERROR ==========");
    console.error(error);
    console.error("===========================");

    return res.status(500).json({
        message: error.message,
        stack: error.stack
    });
}
};