import mongoose from "mongoose";

export const connectDb = async () => {
	try {
		const connect = await mongoose.connect("mongodb+srv://Anitha123:Anitha123@cluster0.gq4vtjs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
		console.log("DATABASE CONNECTED", connect.connection.name);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
