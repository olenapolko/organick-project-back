const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("organick db"));

const expertsRoutes = require("./routes/experts.routes");
app.use("/experts", expertsRoutes);

const productRoutes = require("./routes/product.routes");
app.use("/product", productRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);

const subscriberRoutes = require("./routes/subscriber.routes");
app.use("/subscriber", subscriberRoutes);

const orderRoutes = require("./routes/order.routes");
app.use("/order", orderRoutes);

const categoryRoutes = require("./routes/category.routes");
app.use("/category", categoryRoutes);

const newsRoutes = require("./routes/news.routes");
app.use("/news", newsRoutes);

const projectsRoutes = require("./routes/projects.routes");
app.use("/projects", projectsRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
