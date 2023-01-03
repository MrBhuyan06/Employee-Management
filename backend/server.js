import app from "./app.js"
import CONFIG from "./config/index.js";
const PORT= CONFIG.PORT

app.listen(PORT, (req, res) =>
{
    console.log(`Server is running at http://localhost:${PORT}/api/v1`);
})