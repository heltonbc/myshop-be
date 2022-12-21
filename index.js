import "dotenv/config";

import app from "./src/server.js";

// const app = require("./src/server.js");
import "./db.js";

const port = 3300;

app.listen(process.env.PORT || port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
