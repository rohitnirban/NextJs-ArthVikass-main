import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";

export async function GET(request: Request) {
    await dbConnect();

    try {
        const users = await UserModel.find({});

        if (!users || users.length === 0) {
            return Response.json(
                {
                    success: false,
                    message: "No User Found"
                },
                {
                    status: 400
                }
            );
        }
        
        return Response.json(
            {
                success: true,
                users
            },
            {
                status: 200
            }
        );

    } catch (error) {
        console.log("Error in getting all users ", error);
        return Response.json(
            {
                success: false,
                message: "Error in getting all users"
            },
            {
                status: 500
            }
        );
    }

}